
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Download, Play, FileText, Lock, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const MateriKelas = () => {
  const classes = [
    {
      grade: 'VII',
      title: 'Kelas VII',
      studentCount: 32,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      grade: 'VIII',
      title: 'Kelas VIII',
      studentCount: 28,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      grade: 'IX',
      title: 'Kelas IX',
      studentCount: 30,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Ruang Kelas PAI
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Selamat datang di pusat pembelajaran digital PAI SMPN 5 Klaten. Silakan pilih kelasmu untuk melihat pengumuman, jadwal, materi, dan akses ke portal tugas.
            </p>
          </div>

          {/* Class Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {classes.map((classInfo) => (
              <Card key={classInfo.grade} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                <div className={`h-32 bg-gradient-to-br ${classInfo.bgColor} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${classInfo.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {classInfo.title}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-slate-600">
                      <Users className="w-4 h-4" />
                      <span>{classInfo.studentCount} Siswa</span>
                    </div>
                  </div>
                  
                  <Button asChild className={`w-full bg-gradient-to-r ${classInfo.color} text-white rounded-full py-3 shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <Link to={`/kelas/${classInfo.grade.toLowerCase()}`}>
                      Masuk Kelas
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Access Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Announcements */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Pengumuman Umum</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-slate-800">Penilaian Tengah Semester</h3>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">Penting</Badge>
                    </div>
                    <p className="text-sm text-slate-600">PTS PAI akan dilaksanakan pada pekan ketiga bulan September. Harap pelajari kembali materi dari Bab 1 hingga Bab 3.</p>
                    <p className="text-xs text-slate-500 mt-2">3 hari yang lalu</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-slate-800">Materi Baru Tersedia</h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">Update</Badge>
                    </div>
                    <p className="text-sm text-slate-600">Materi tentang "Akhlak dalam Era Digital" sudah tersedia di semua portal kelas.</p>
                    <p className="text-xs text-slate-500 mt-2">1 minggu yang lalu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Sumber Belajar</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    <Download className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800">Panduan Shalat</h4>
                      <p className="text-sm text-slate-600">PDF - 2.5 MB</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    <Play className="w-5 h-5 text-green-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800">Video Wudhu</h4>
                      <p className="text-sm text-slate-600">MP4 - 15 menit</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    <FileText className="w-5 h-5 text-purple-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800">Kumpulan Doa Harian</h4>
                      <p className="text-sm text-slate-600">PDF - 1.8 MB</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-6 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full">
                  Lihat Semua Sumber
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Portal Access */}
          <Card className="mt-12 shadow-xl border-0 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <CardContent className="p-8 text-center">
              <Lock className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h2 className="text-3xl font-bold mb-4">Portal Google Classroom</h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Semua aktivitas terkait pengumpulan tugas, ulangan harian, dan informasi nilai dilakukan melalui platform Google Classroom untuk menjaga kerahasiaan dan kemudahan rekapitulasi.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                Masuk Google Classroom
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MateriKelas;
