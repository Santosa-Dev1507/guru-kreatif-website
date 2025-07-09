
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Profile {
  id: string;
  'full name': string | null;
  username: string | null;
  bio?: string | null;
  avatar_url?: string | null;
  role?: string | null;
  phone?: string | null;
  created_at: string;
  updated_at?: string | null;
}

export const useProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProfile();
    } else {
      setProfile(null);
      setLoading(false);
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', parseInt(user.id))
        .maybeSingle();

      if (error) {
        console.error('Error fetching profile:', error);
      }

      if (data) {
        // Map the database response to our Profile interface
        const profileData: Profile = {
          id: user.id,
          'full name': data['full name'],
          username: data.username,
          bio: null, // Not in database schema yet
          avatar_url: null, // Not in database schema yet
          role: null, // Not in database schema yet
          phone: null, // Not in database schema yet
          created_at: data.created_at,
          updated_at: null, // Not in database schema yet
        };
        setProfile(profileData);
      } else {
        // Create a basic profile if none exists
        const basicProfile: Profile = {
          id: user.id,
          'full name': null,
          username: null,
          bio: null,
          avatar_url: null,
          role: null,
          phone: null,
          created_at: new Date().toISOString(),
          updated_at: null,
        };
        setProfile(basicProfile);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast.error('Error loading profile');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<Omit<Profile, 'id' | 'created_at'>>) => {
    if (!user) return { error: 'No user logged in' };

    try {
      // Only update fields that exist in the database schema
      const dbUpdates: any = {};
      if (updates['full name'] !== undefined) dbUpdates['full name'] = updates['full name'];
      if (updates.username !== undefined) dbUpdates.username = updates.username;

      const { error } = await supabase
        .from('profiles')
        .update(dbUpdates)
        .eq('id', parseInt(user.id));

      if (error) throw error;

      await fetchProfile();
      toast.success('Profile updated successfully');
      return { error: null };
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Error updating profile');
      return { error };
    }
  };

  const uploadAvatar = async (file: File) => {
    if (!user) return { error: 'No user logged in' };

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName);

      // For now, we'll just return the URL since avatar_url isn't in the database yet
      return { error: null, url: data.publicUrl };
    } catch (error) {
      console.error('Error uploading avatar:', error);
      toast.error('Error uploading avatar');
      return { error };
    }
  };

  return {
    profile,
    loading,
    updateProfile,
    uploadAvatar,
    refetchProfile: fetchProfile,
  };
};
