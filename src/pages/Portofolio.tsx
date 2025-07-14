import React, { useState } from 'react';
import { Eye, ExternalLink, Filter, Image, FileText, Users, Megaphone, Book } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const Portofolio = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filters = [
    { name: 'Semua', icon: Filter },
    { name: 'Infografis Materi', icon: Image },
    { name: 'Desain Modul Ajar', icon: Book },
    { name: 'Slide Presentasi', icon: FileText },
    { name: 'Game Interaktif', icon: Megaphone },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Infografis Asmaul Husna',
      category: 'Infografis Materi',
      description: 'Media pembelajaran visual yang menjelaskan 99 nama Allah dengan desain modern dan mudah dipahami siswa SMP.',
      gradient: 'from-blue-400 to-blue-600',
      icon: Image
    },
    {
      id: 2,
      title: 'Modul Ajar Akhlak Digital',
      category: 'Desain Modul Ajar',
      description: 'Modul pembelajaran tentang etika dan akhlak dalam penggunaan teknologi digital untuk generasi Z.',
      gradient: 'from-green-400 to-green-600',
      icon: Book
    },
    {
      id: 3,
      title: 'Slide Presentasi Sejarah Islam',
      category: 'Slide Presentasi',
      description: 'Template presentasi yang menarik untuk materi sejarah perjuangan Nabi Muhammad SAW.',
      gradient: 'from-purple-400 to-purple-600',
      icon: FileText
    },
    {
      id: 4,
      title: 'Game Kelas IX - Mengurutkan Potongan Ayat Al-Quran',
      category: 'Game Interaktif',
      description: 'Game interaktif untuk mengurutkan potongan dan terjemahan ayat Al-Quran. Tersedia untuk Al Mujadallah ayat 11 dan Az Zumar ayat 9.',
      gradient: 'from-orange-400 to-orange-600',
      icon: Megaphone,
      imageUrl: '/lovable-uploads/3280e274-c7e6-489e-984d-1472483eed42.png',
      links: [
        { title: 'Al Mujadallah ayat 11', url: 'https://smpn5klaten.sch.id/game-pai-kelas9-q-quran-bab1' },
        { title: 'Az Zumar ayat 9', url: 'https://smpn5klaten.sch.id/game-pai-kelas9-q-quran-bab1-bag2' }
      ]
    },
    {
      id: 7,
      title: 'Game Kelas VIII - Mengurutkan Potongan Ayat Al-Quran',
      category: 'Game Interaktif',
      description: 'Game interaktif untuk mengurutkan potongan dan terjemahan ayat Al-Quran untuk siswa kelas VIII.',
      gradient: 'from-purple-400 to-purple-600',
      icon: Megaphone,
      links: [
        { title: 'Game PAI Kelas 8 Bab 1 Bag 1', url: 'https://smpn5klaten.sch.id/game-pai-kelas8-q-quran-bab1-bag1' },
        { title: 'Game Q.S. Ibrahim 32', url: 'https://smpn5klaten.sch.id/game-mengurutkan-potongan-q-s-ibrahim-32' },
        { title: 'Game PAI Kelas 8 Bab 1 Bag 3', url: 'https://smpn5klaten.sch.id/game-pai-kelas8-q-quran-bab1-bag3' }
      ]
    },
    {
      id: 5,
      title: 'Infografis Rukun Islam',
      category: 'Infografis Materi',
      description: 'Visualisasi lima rukun Islam dengan pendekatan desain yang fresh dan mudah diingat.',
      gradient: 'from-teal-400 to-teal-600',
      icon: Image
    },
    {
      id: 6,
      title: 'Modul Fikih Ibadah',
      category: 'Desain Modul Ajar',
      description: 'Panduan lengkap tata cara ibadah dengan ilustrasi dan penjelasan yang komprehensif.',
      gradient: 'from-rose-400 to-rose-600',
      icon: Book
    }
  ];

  const filteredItems = activeFilter === 'Semua' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Karya Saya
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Berikut adalah beberapa contoh karya saya yang dirancang untuk mendukung proses belajar mengajar di kelas.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <Button
                  key={filter.name}
                  variant={activeFilter === filter.name ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.name)}
                  className={`flex items-center gap-2 rounded-full px-6 py-2 transition-all duration-300 ${
                    activeFilter === filter.name
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                      : 'border-2 border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {filter.name}
                </Button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                {/* Image/Preview Area */}
                <div className={`aspect-video bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                  {item.imageUrl ? (
                    <>
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-full h-full object-contain p-4"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <Eye className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Overlay with view button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.links && item.links.length > 0 ? (
                      <Button 
                        size="sm" 
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm rounded-full"
                        onClick={() => window.open(item.links[0].url, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm rounded-full">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="secondary" className="mb-2 bg-slate-100 text-slate-600">
                      {item.category}
                    </Badge>
                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  {/* Game Links */}
                  {item.links && item.links.length > 0 && (
                    <div className="space-y-2">
                      {item.links.map((link, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="w-full text-left justify-start text-blue-600 border-blue-200 hover:bg-blue-50"
                          onClick={() => window.open(link.url, '_blank')}
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          {link.title}
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto shadow-xl border-0 bg-gradient-to-r from-blue-50 to-green-50">
              <CardContent className="p-8">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Tertarik Berkolaborasi?
                </h3>
                <p className="text-slate-600 mb-6">
                  Jika Anda membutuhkan desain untuk kebutuhan pendidikan atau dakwah, saya akan senang membantu mewujudkan ide Anda.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full px-8">
                  Hubungi Saya
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
