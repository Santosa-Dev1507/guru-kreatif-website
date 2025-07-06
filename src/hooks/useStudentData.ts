
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface StudentData {
  no: string;
  nama: string;
  nis: string;
  kelas: string;
  semester: string;
  'nilai bab 1': string;
  'nilai bab 2': string;
  'nilai bab 3': string;
  'nilai bab 4': string;
  'nilai bab 5': string;
  'nilai asts': string;
  'nilai asas': string;
  'nilai rapor': string;
}

export const useStudentData = () => {
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const fetchStudentData = async (nis: string) => {
    if (!nis.trim()) {
      setError('Harap masukkan NIS');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSggYPzXmr58hqsCs9kkNOsScPK-vy7sci7hMnzZnp2xGymha4vg841Bf9F5aSjgWeplmGRK04OgkRn/pub?output=csv');
      const csvText = await response.text();
      
      console.log('CSV Response:', csvText.substring(0, 500));
      
      const lines = csvText.split('\n').filter(line => line.trim());
      if (lines.length === 0) {
        throw new Error('No data found in spreadsheet');
      }

      const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, '').toLowerCase());
      console.log('Headers:', headers);
      
      let foundStudent = null;
      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(value => value.trim().replace(/"/g, ''));
        console.log(`Row ${i} values:`, values);
        
        const studentNIS = values[2];
        if (studentNIS === nis.trim()) {
          foundStudent = {
            no: values[0] || '',
            nama: values[1] || '',
            nis: values[2] || '',
            kelas: values[3] || '',
            semester: values[4] || '',
            'nilai bab 1': values[5] || '',
            'nilai bab 2': values[6] || '',
            'nilai bab 3': values[7] || '',
            'nilai bab 4': values[8] || '',
            'nilai bab 5': values[9] || '',
            'nilai asts': values[10] || '',
            'nilai asas': values[11] || '',
            'nilai rapor': values[12] || ''
          };
          break;
        }
      }

      if (foundStudent) {
        console.log('Found student:', foundStudent);
        setStudentData(foundStudent as StudentData);
        toast({
          title: "Data ditemukan!",
          description: `Selamat datang, ${foundStudent.nama || 'Siswa'}`,
        });
      } else {
        setError('NIS tidak ditemukan dalam database');
        setStudentData(null);
        console.log('NIS not found:', nis);
      }
    } catch (err) {
      setError('Gagal mengambil data. Periksa koneksi internet Anda.');
      console.error('Error fetching data:', err);
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
