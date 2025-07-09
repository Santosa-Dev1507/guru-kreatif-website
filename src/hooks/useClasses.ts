
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ClassData {
  id: string;
  grade: string;
  title: string;
  description?: string;
  color_scheme?: string;
  created_at: string;
  updated_at: string;
}

interface ClassMaterial {
  id: string;
  class_id: string;
  title: string;
  content?: string;
  file_url?: string;
  material_type?: string;
  created_at: string;
  updated_at: string;
}

interface Announcement {
  id: string;
  title: string;
  content: string;
  priority?: string;
  class_id?: string;
  created_at: string;
  updated_at: string;
}

export const useClasses = () => {
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('classes')
        .select('*')
        .order('grade');

      if (error) throw error;
      setClasses(data || []);
    } catch (error) {
      console.error('Error fetching classes:', error);
      toast.error('Error loading classes');
    } finally {
      setLoading(false);
    }
  };

  const fetchClassMaterials = async (classId: string) => {
    try {
      const { data, error } = await supabase
        .from('class_materials')
        .select('*')
        .eq('class_id', classId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return { data: data || [], error: null };
    } catch (error) {
      console.error('Error fetching class materials:', error);
      return { data: [], error };
    }
  };

  const fetchAnnouncements = async (classId?: string) => {
    try {
      let query = supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false });

      if (classId) {
        query = query.eq('class_id', classId);
      }

      const { data, error } = await query;

      if (error) throw error;
      return { data: data || [], error: null };
    } catch (error) {
      console.error('Error fetching announcements:', error);
      return { data: [], error };
    }
  };

  return {
    classes,
    loading,
    fetchClasses,
    fetchClassMaterials,
    fetchAnnouncements
  };
};
