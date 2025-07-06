
import React from 'react';
import Navigation from '@/components/Navigation';
import StudentSearchForm from '@/components/StudentSearchForm';
import StudentInfoCard from '@/components/StudentInfoCard';
import GradesTable from '@/components/GradesTable';
import { useStudentData } from '@/hooks/useStudentData';

const SistemInformasiNilai = () => {
  const { studentData, isLoading, error, fetchStudentData } = useStudentData();

  const handleSearch = (nis: string) => {
    fetchStudentData(nis);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Sistem Informasi Nilai
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Masukkan Nomor Induk Siswa (NIS) untuk mengakses informasi nilai dan data akademik Anda.
            </p>
          </div>

          {/* Search Form */}
          <StudentSearchForm 
            onSearch={handleSearch}
            isLoading={isLoading}
            error={error}
          />

          {/* Student Data */}
          {studentData && (
            <div className="space-y-6">
              <StudentInfoCard studentData={studentData} />
              <GradesTable studentData={studentData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SistemInformasiNilai;
