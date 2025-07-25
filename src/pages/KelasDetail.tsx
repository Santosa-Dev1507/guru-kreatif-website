import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Download, Play, FileText, Calendar, Users, BookOpen, Video, AlertCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const KelasDetail = () => {
  const { grade } = useParams();
  const [clickedChapters, setClickedChapters] = useState<Set<string>>(new Set());
  
  const classInfo = {
    'vii': { title: 'Kelas VII', color: 'from-blue-500 to-blue-600' },
    'viii': { title: 'Kelas VIII', color: 'from-green-500 to-green-600' },
    'ix': { title: 'Kelas IX', color: 'from-purple-500 to-purple-600' }
  };

  const currentClass = classInfo[grade as keyof typeof classInfo];

  const handleChapterClick = (chapterKey: string, link: string) => {
    setClickedChapters(prev => new Set(prev).add(chapterKey));
    window.open(link, '_blank', 'noopener noreferrer');
  };

  const defaultMaterials = [
    {
      chapter: 'Bab 1',
      title: 'Lebih Dekat dengan Allah SWT',
      description: 'Memahami kebesaran Allah melalui Asmaul Husna dan menerapkannya dalam kehidupan sehari-hari',
      resources: [
        { type: 'pdf', name: 'Modul Lengkap', size: '2.1 MB' },
        { type: 'video', name: 'Rangkuman Infografis', duration: 'PDF' }
      ]
    },
    {
      chapter: 'Bab 2',
      title: 'Hidup Tenang dengan Kejujuran, Amanah, dan Istiqamah',
      description: 'Mempelajari nilai-nilai akhlak mulia dan cara mengimplementasikannya dalam kehidupan remaja',
      resources: [
        { type: 'pdf', name: 'Modul Pembelajaran', size: '3.2 MB' },
        { type: 'video', name: 'Video Pembelajaran', duration: '25 menit' }
      ]
    },
    {
      chapter: 'Bab 3',
      title: 'Indahnya Kebersamaan dengan Salat Berjamaah',
      description: 'Memahami hikmah dan tata cara salat berjamaah sebagai bentuk persatuan umat',
      resources: [
        { type: 'pdf', name: 'Panduan Salat Berjamaah', size: '1.8 MB' },
        { type: 'video', name: 'Tutorial Praktik', duration: '20 menit' },
        { type: 'exam', name: 'Kisi-kisi PTS', size: '500 KB' }
      ]
    }
  ];

  const class9Materials = {
    ganjil: [
      {
        chapter: 'Bab 1',
        title: 'Al-Qur\'an Menginspirasi: Meraih Kesuksesan Dengan Semangat Mencari Ilmu',
        link: 'https://drive.google.com/file/d/11xvg6bVhzvL63XjlK1UoJnppjaUY3cAJ/view?usp=sharing'
      },
      {
        chapter: 'Bab 2',
        title: 'Meyakini Hari Akhir Dengan Mawas Diri',
        link: 'https://drive.google.com/file/d/170cOG97hPVo8UKXI8J0B1ifO3IRHlXd-/view?usp=sharing'
      },
      {
        chapter: 'Bab 3',
        title: 'Indahnya Etika Pergaulan Dan Komunikasi Islami',
        link: 'https://drive.google.com/file/d/15KOzh5ANysss7c-0c-WjVh-5wh5GHUk3/view?usp=sharing'
      },
      {
        chapter: 'Bab 4',
        title: 'Bersyukur Dengan Akikah Peduli Sesama Dengan Berkurban',
        link: 'https://drive.google.com/file/d/1WtqcKQA3uO_cGsn2mYSa86rvughfHZkt/view?usp=sharing'
      },
      {
        chapter: 'Bab 5',
        title: 'Mengapresiasi Peradaban Daulah Usmani',
        link: 'https://drive.google.com/file/d/1DysF_UmnpxKjqlzSIxb-x9or0hJm2ASL/view?usp=sharing'
      }
    ],
    genap: [
      {
        chapter: 'Bab 6',
        title: 'Al-Qur\'an Menginspirasi: Menjadi Khalifatullah Fil \'Ard Penebar Kasih Sayang',
        link: 'https://drive.google.com/file/d/100jEMU_lUbIVoI6FrhPuWNEcyqVihORG/view?usp=sharing'
      },
      {
        chapter: 'Bab 7',
        title: 'Meraih Ketenangan Jiwa Dengan Meyakini Qada Dan Qadar',
        link: 'https://drive.google.com/file/d/1ZTL3FOqkDYhZRXpI9bk8geq4dhbVxu4u/view?usp=sharing'
      },
      {
        chapter: 'Bab 8',
        title: 'Dengan Seni Islami, Kehidupan Semakin Harmoni',
        link: 'https://drive.google.com/file/d/1iaXbprJ8qkH-z0H1YSUj7cInc44o8bNB/view?usp=sharing'
      },
      {
        chapter: 'Bab 9',
        title: 'Mengenal Imam Madzhab, Ibadah Semakin Mantab',
        link: 'https://drive.google.com/file/d/1x-mwNAW0aEn2GqKPvCbNtGpcXn2cBXFz/view?usp=drive_link'
      },
      {
        chapter: 'Bab 10',
        title: 'Mengapresiasi Peradaban Pada Masa Syafawi Dan India Mughal',
        link: 'https://drive.google.com/file/d/1cyFqISyvwCk0L2QRXdsJjyUlQR46j60J/view?usp=sharing'
      }
    ]
  };

  const materials = grade === 'ix' ? null : defaultMaterials;

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
              Ruang Belajar PAI - {currentClass.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
          </div>

          {/* Announcements */}
          <Card className="mb-12 shadow-xl border-0">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-slate-800">Info Penting</h2>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-600">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Penilaian Tengah Semester (PTS)</h3>
                    <p className="text-slate-700">
                      PTS akan dilaksanakan pada <strong>pekan ketiga bulan September</strong>. 
                      Harap pelajari kembali materi dari Bab 1 hingga Bab 3. Kisi-kisi tersedia di materi pembelajaran.
                    </p>
                    <Badge className="mt-3 bg-orange-100 text-orange-700">Penting</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Materials */}
          {grade === 'ix' ? (
            // Special layout for Class IX with complete materials
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Materi Lengkap Kelas 9</h2>
              
              {/* Semester Ganjil */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Semester Ganjil</h3>
                <div className="space-y-4">
                  {class9Materials.ganjil.map((material, index) => {
                    const chapterKey = `ganjil-${material.chapter}`;
                    const isClicked = clickedChapters.has(chapterKey);
                    
                    return (
                      <Card 
                        key={index} 
                        className={`shadow-lg border-0 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                          isClicked 
                            ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 scale-[1.02]' 
                            : 'hover:scale-[1.01]'
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 ${
                                isClicked 
                                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse' 
                                  : `bg-gradient-to-r ${currentClass.color}`
                              } rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 transition-all duration-300`}>
                                {material.chapter.split(' ')[1]}
                                {isClicked && <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>}
                              </div>
                              <div className="relative">
                                <h4 className={`font-semibold text-lg transition-colors duration-300 ${
                                  isClicked ? 'text-green-700' : 'text-slate-800'
                                }`}>
                                  {material.title}
                                </h4>
                                <Badge 
                                  variant="outline" 
                                  className={`mt-1 transition-colors duration-300 ${
                                    isClicked 
                                      ? 'text-green-600 border-green-300 bg-green-50' 
                                      : 'text-slate-600'
                                  }`}
                                >
                                  {material.chapter} {isClicked && '✓ Dibaca'}
                                </Badge>
                              </div>
                            </div>
                            <Button 
                              onClick={() => handleChapterClick(chapterKey, material.link)}
                              className={`${
                                isClicked 
                                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-200' 
                                  : `bg-gradient-to-r ${currentClass.color} text-white`
                              } rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95`}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {isClicked ? 'Buka Lagi' : 'Buka Materi'}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Semester Genap */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Semester Genap</h3>
                <div className="space-y-4">
                  {class9Materials.genap.map((material, index) => {
                    const chapterKey = `genap-${material.chapter}`;
                    const isClicked = clickedChapters.has(chapterKey);
                    
                    return (
                      <Card 
                        key={index} 
                        className={`shadow-lg border-0 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                          isClicked 
                            ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 scale-[1.02]' 
                            : 'hover:scale-[1.01]'
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 ${
                                isClicked 
                                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse' 
                                  : `bg-gradient-to-r ${currentClass.color}`
                              } rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 transition-all duration-300 relative`}>
                                {material.chapter.split(' ')[1]}
                                {isClicked && <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>}
                              </div>
                              <div>
                                <h4 className={`font-semibold text-lg transition-colors duration-300 ${
                                  isClicked ? 'text-green-700' : 'text-slate-800'
                                }`}>
                                  {material.title}
                                </h4>
                                <Badge 
                                  variant="outline" 
                                  className={`mt-1 transition-colors duration-300 ${
                                    isClicked 
                                      ? 'text-green-600 border-green-300 bg-green-50' 
                                      : 'text-slate-600'
                                  }`}
                                >
                                  {material.chapter} {isClicked && '✓ Dibaca'}
                                </Badge>
                              </div>
                            </div>
                            <Button 
                              onClick={() => handleChapterClick(chapterKey, material.link)}
                              className={`${
                                isClicked 
                                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-200' 
                                  : `bg-gradient-to-r ${currentClass.color} text-white`
                              } rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95`}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {isClicked ? 'Buka Lagi' : 'Buka Materi'}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            // Default layout for Class VII and VIII
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Semester Ganjil</h2>
              
              <div className="space-y-8">
                {materials?.map((material, index) => (
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
          )}

          {/* Portal Access */}
          <Card className="shadow-xl border-0 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Portal Tugas, Ulangan, dan Nilai</h2>
                    <p className="text-slate-300">
                      Semua aktivitas terkait pengumpulan tugas, ulangan harian, dan informasi nilai dilakukan melalui platform Google Classroom untuk menjaga kerahasiaan dan kemudahan rekapitulasi.
                    </p>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 ml-4">
                  Masuk Google Classroom {currentClass.title}
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
