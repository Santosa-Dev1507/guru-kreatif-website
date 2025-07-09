
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
        .eq('id', user.id)
        .maybeSingle();

      if (error) {
        throw error;
      }

      if (data) {
        // Map the database response to our Profile interface
        const profileData: Profile = {
          id: data.id.toString(),
          'full name': data['full name'],
          username: data.username,
          bio: data.bio || null,
          avatar_url: data.avatar_url || null,
          role: data.role || null,
          phone: data.phone || null,
          created_at: data.created_at,
          updated_at: data.updated_at || null,
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
      const { error } = await supabase
        .from('profiles')
        .update({ 
          ...updates, 
          updated_at: new Date().toISOString() 
        })
        .eq('id', user.id);

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

      await updateProfile({ avatar_url: data.publicUrl });
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
