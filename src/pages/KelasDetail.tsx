
import React from 'react';
import { useParams } from 'react-router-dom';
import { Download, Play, FileText, Calendar, Users, BookOpen, Video, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const KelasDetail = () => {
  const { grade } = useParams();
  
  const classInfo = {
    'v': { title: 'Kelas V', color: 'from-blue-500 to-blue-600' },
    'viii': { title: 'Kelas VIII', color: 'from-green-500 to-green-600' },
    'ix': { title: 'Kelas IX', color: 'from-purple-500 to-purple-600' }
  };

  const currentClass = classInfo[grade as keyof typeof classInfo];

  const materials = [
    {
      chapter: 'Bab 1',
      title: 'Asmaul Husna',
      description: 'Mempelajari 99 nama-nama Allah yang mulia dan maknanya dalam kehidupan sehari-hari',
      resources: [
        { type: 'pdf', name: 'Materi Asmaul Husna', size: '2.1 MB' },
        { type: 'video', name: 'Video Pembelajaran', duration: '25 menit' }
      ]
    },
    {
      chapter: 'Bab 2',
      title: 'Sejarah Perjuangan Nabi di Mekkah',
      description: 'Memahami perjuangan Rasulullah SAW dalam menyebarkan Islam di kota Mekkah',
      resources: [
        { type: 'pdf', name: 'Sejarah Perjuangan Nabi', size: '3.2 MB' },
        { type: 'video', name: 'Video Dokumenter', duration: '35 menit' }
      ]
    },
    {
      chapter: 'Bab 3',
      title: 'Berpikir Kritis & Demokrasi',
      description: 'Mengembangkan kemampuan berpikir kritis dalam perspektif Islam dan nilai-nilai demokrasi',
      resources: [
        { type: 'pdf', name: 'Berpikir Kritis Islam', size: '1.8 MB' },
        { type: 'video', name: 'Video Diskusi', duration: '20 menit' },
        { type: 'exam', name: 'Kisi-kisi Penilaian', size: '500 KB' }
      ]
    }
  ];

  if (!currentClass) {
    return <div>Kelas tidak ditemukan</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${currentClass.color} rounded-full mb-6 shadow-lg`}>
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Ruang Belajar - {currentClass.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
          </div>

          {/* Announcements */}
          <Card className="mb-12 shadow-xl border-0">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-slate-800">Pengumuman Terbaru</h2>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-600">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Update Terbaru: Penilaian Harian Bab 3</h3>
                    <p className="text-slate-700">
                      Jangan lupa, Penilaian Harian bab 3 akan dilaksanakan pada hari <strong>Jumat, 10 Januari 2025</strong>. 
                      Kisi-kisi bisa diunduh di bawah pada materi Bab 3.
                    </p>
                    <Badge className="mt-3 bg-orange-100 text-orange-700">Penting</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Materials */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Materi Pembelajaran</h2>
            
            <div className="space-y-8">
              {materials.map((material, index) => (
                <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${currentClass.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}>
                        {material.chapter.split(' ')[1]}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-slate-800">{material.title}</h3>
                          <Badge variant="outline" className="text-slate-600">{material.chapter}</Badge>
                        </div>
                        <p className="text-slate-600 mb-6 leading-relaxed">{material.description}</p>
                        
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {material.resources.map((resource, resourceIndex) => (
                            <div key={resourceIndex} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                              {resource.type === 'pdf' && <FileText className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />}
                              {resource.type === 'video' && <Video className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />}
                              {resource.type === 'exam' && <Download className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />}
                              
                              <div className="flex-1">
                                <h4 className="font-semibold text-slate-800 text-sm">{resource.name}</h4>
                                <p className="text-xs text-slate-600">
                                  {resource.size && resource.size}
                                  {resource.duration && resource.duration}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Portal Access */}
          <Card className="shadow-xl border-0 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Akses Tugas & Nilai</h2>
                    <p className="text-slate-300">
                      Untuk melihat daftar tugas, mengumpulkan pekerjaan, dan memeriksa informasi nilai, silakan masuk ke portal aman kita.
                    </p>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 ml-4">
                  Akses Portal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KelasDetail;
