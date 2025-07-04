
import React from 'react';
import { Award, BookOpen, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const Profil = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Lebih Dekat dengan Saya
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <Card className="h-full shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <p className="text-lg leading-relaxed text-slate-700">
                      <span className="font-semibold text-blue-600">Assalamu'alaikum warahmatullahi wabarakatuh.</span> 
                      {" "}Perkenalkan, saya <span className="font-semibold">[Nama Anda]</span>, seorang guru Pendidikan Agama Islam di <span className="font-semibold">[Nama Sekolah Anda]</span>. Sejak awal mengajar, saya selalu percaya bahwa tugas seorang pendidik bukan hanya mentransfer ilmu, tetapi juga menyalakan api semangat belajar di hati setiap siswa.
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-semibold text-slate-800">Pendidik PAI</p>
                        <p className="text-sm text-slate-600">Profesional & Berdedikasi</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <Lightbulb className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-slate-800">Desainer Grafis</p>
                        <p className="text-sm text-slate-600">Kreatif & Inovatif</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Philosophy Section */}
          <Card className="mb-16 shadow-xl border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                Filosofi Mengajar Saya
              </h2>
              <p className="text-lg leading-relaxed text-slate-700 mb-6">
                Bagi saya, PAI bukan sekadar mata pelajaran, melainkan fondasi karakter. Di era digital ini, tantangannya adalah bagaimana membuat nilai-nilai Islam yang agung tetap relevan dan menarik bagi generasi Z. Inilah yang mendorong saya untuk keluar dari metode konvensional dan merangkul dunia teknologi serta desain.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                Saya percaya, sebuah infografis yang baik bisa menjelaskan Rukun Iman lebih efektif daripada ribuan kata, dan sebuah video animasi singkat bisa membuat kisah para nabi lebih hidup.
              </p>
            </CardContent>
          </Card>

          {/* Creative Journey */}
          <Card className="mb-16 shadow-xl border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                Perjalanan Kreatif
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">
                Kecintaan saya pada desain grafis berawal dari hobi sederhana, namun kini menjadi alat bantu utama dalam mengajar. Melalui desain, saya berusaha menerjemahkan materi yang kompleks menjadi visual yang indah dan mudah dicerna. Website ini adalah wujud dari semangat tersebut, sebuah rumah digital tempat saya berbagi, berkarya, dan berinteraksi.
              </p>
            </CardContent>
          </Card>

          {/* Qualifications */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                Kualifikasi & Pengalaman
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-800">S.Pd. Pendidikan Agama Islam</h3>
                    <p className="text-slate-600">[Nama Universitas Anda] (Tahun Lulus)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Guru PAI</h3>
                    <p className="text-slate-600">[Nama Sekolah Saat Ini] (Tahun Mulai - Sekarang)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Sertifikasi Google Certified Educator</h3>
                    <p className="text-slate-600">(Tahun)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-3 h-3 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Pemenang Lomba Inovasi Mengajar</h3>
                    <p className="text-slate-600">[Nama Lomba] (Tahun)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profil;
