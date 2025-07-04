
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Laptop, Code, ArrowRight, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6 leading-tight">
              Mendidik dengan Iman,<br />
              Berkarya dengan Desain
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Selamat datang di situs pribadi saya. Saya adalah seorang Pendidik Agama Islam yang bersemangat memadukan pengajaran nilai-nilai luhur dengan sentuhan teknologi dan kreativitas desain grafis.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/portofolio" className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                Jelajahi Portofolio
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300">
              <Link to="/materi-kelas" className="flex items-center gap-2">
                <Book className="w-5 h-5" />
                Masuk Ruang Kelas
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Book className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Pendidikan PAI</h3>
                <p className="text-slate-600 leading-relaxed">
                  Menyajikan materi Pendidikan Agama Islam yang mendalam, relevan, dan mudah dipahami oleh generasi digital.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Desain Grafis</h3>
                <p className="text-slate-600 leading-relaxed">
                  Mengubah konsep-konsep abstrak menjadi infografis, presentasi, dan media visual yang menarik dan informatif.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Laptop className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Inovasi Teknologi</h3>
                <p className="text-slate-600 leading-relaxed">
                  Memanfaatkan teknologi untuk menciptakan pengalaman belajar yang interaktif, efisien, dan menyenangkan bagi semua siswa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Karya Terbaru Saya</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Book className="w-10 h-10 text-blue-600" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-800 mb-2">Infografis PAI {item}</h3>
                  <p className="text-sm text-slate-600">Media pembelajaran visual yang menarik dan informatif</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-8">
              <Link to="/portofolio">
                Lihat Semua Karya
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Pojok Inspirasi: Tulisan Terbaru</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Book className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">2 hari yang lalu</p>
                    <h3 className="font-semibold text-slate-800">Mengintegrasikan Teknologi dalam Pembelajaran PAI</h3>
                  </div>
                </div>
                <p className="text-slate-600">Bagaimana memanfaatkan teknologi digital untuk membuat pembelajaran PAI lebih menarik dan efektif...</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">5 hari yang lalu</p>
                    <h3 className="font-semibold text-slate-800">Tips Desain Infografis untuk Pendidik</h3>
                  </div>
                </div>
                <p className="text-slate-600">Panduan praktis membuat infografis yang menarik dan mudah dipahami siswa dalam pembelajaran agama...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Mari Berkolaborasi</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau ingin berdiskusi tentang pendidikan dan desain? Saya selalu terbuka untuk berbagi dan belajar bersama.
          </p>
          <div className="flex justify-center gap-4 text-sm text-slate-400">
            <span>© 2024 Pendidik PAI Digital</span>
            <span>•</span>
            <span>Made with ❤️ for Education</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
