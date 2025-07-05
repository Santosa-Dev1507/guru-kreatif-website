
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Palette, Laptop, ArrowRight, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Quote */}
          <div className="mb-12">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-relaxed mb-4">
              "Didiklah anak sesuai dengan zamannya karena mereka hidup pada zamannya bukan pada zamanmu."
            </blockquote>
            <cite className="text-lg md:text-xl text-slate-600 font-medium">
              - Ali bin Abi Thalib -
            </cite>
          </div>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 mb-8">
              <span className="font-semibold">Assalamu'alaikum.</span> Perkenalkan, saya <span className="font-semibold text-blue-600">Budi Santosa</span>, seorang Guru PAI di <span className="font-semibold">SMPN 5 Klaten</span>. Melalui platform ini, saya berbagi metode, materi, dan karya seputar bagaimana nilai-nilai luhur Islam dapat diajarkan secara relevan, kreatif, dan menyenangkan di era digital.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/materi-kelas">
                <BookOpen className="w-5 h-5 mr-2" />
                Akses Ruang Kelas
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 rounded-full px-8 py-4 hover:bg-blue-600 hover:text-white transition-all duration-300">
              <Link to="/portofolio">
                <Palette className="w-5 h-5 mr-2" />
                Lihat Karya Saya
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Tiga Pilar Pembelajaran
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Book className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Mata Pelajaran PAI & BP</h3>
                <p className="text-slate-600 leading-relaxed">
                  Mengembangkan materi ajar PAI untuk siswa tingkat SMP (Kelas VII, VIII, IX) yang sesuai dengan kurikulum dan perkembangan zaman.
                </p>
              </CardContent>
            </Card>

            {/* Pillar 2 */}
            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Desain Grafis</h3>
                <p className="text-slate-600 leading-relaxed">
                  Mendesain media pembelajaran visual seperti infografis, modul, dan presentasi agar materi menjadi lebih menarik dan mudah dipahami.
                </p>
              </CardContent>
            </Card>

            {/* Pillar 3 */}
            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Laptop className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Teknologi Pembelajaran</h3>
                <p className="text-slate-600 leading-relaxed">
                  Mengintegrasikan platform digital seperti Google Classroom, kuis interaktif, quizizz dan game menarik untuk menciptakan pengalaman belajar yang efektif.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Guru PAI Digital
              </h3>
            </div>
            <div>
              <p className="text-slate-400">
                © 2025 Budi Santosa - Guru PAI Digital
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
