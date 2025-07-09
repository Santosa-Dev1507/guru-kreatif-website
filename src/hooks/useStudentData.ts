
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface StudentData {
  id: string;
  nis: string;
  nama: string;
  kelas: string;
  semester: string;
  grades?: {
    nilai_bab_1: string | null;
    nilai_bab_2: string | null;
    nilai_bab_3: string | null;
    nilai_bab_4: string | null;
    nilai_bab_5: string | null;
    nilai_asts: string | null;
    nilai_asas: string | null;
    nilai_rapor: string | null;
  };
}

export const useStudentData = () => {
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchStudentData = async (nis: string) => {
    if (!nis.trim()) {
      setError('Harap masukkan NIS');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Fetch student data with grades
      const { data: studentData, error: studentError } = await supabase
        .from('students')
        .select(`
          *,
          grades (
            nilai_bab_1,
            nilai_bab_2,
            nilai_bab_3,
            nilai_bab_4,
            nilai_bab_5,
            nilai_asts,
            nilai_asas,
            nilai_rapor
          )
        `)
        .eq('nis', nis.trim())
        .single();

      if (studentError) {
        if (studentError.code === 'PGRST116') {
          setError('NIS tidak ditemukan dalam database');
          setStudentData(null);
          return;
        }
        throw studentError;
      }

      if (studentData) {
        const formattedData: StudentData = {
          id: studentData.id,
          nis: studentData.nis,
          nama: studentData.nama,
          kelas: studentData.kelas,
          semester: studentData.semester,
          grades: studentData.grades?.[0] || undefined
        };

        setStudentData(formattedData);
        toast.success(`Selamat datang, ${studentData.nama}!`);
      }
    } catch (err) {
      console.error('Error fetching student data:', err);
      setError('Gagal mengambil data. Periksa koneksi internet Anda.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    studentData,
    isLoading,
    error,
    fetchStudentData
  };
};
