
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
              Profil Budi Santosa
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/eb7eb705-3f7b-4f53-a462-c0c540a6abe4.png" 
                  alt="Budi Santosa" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-green-600 items-center justify-center hidden">
                  <Users className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <Card className="h-full shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Guru PAI di Era Digital</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                      Saya mengabdi sebagai guru Pendidikan Agama Islam di <span className="font-semibold">SMPN 5 Klaten</span>, dengan amanah mengajar siswa Kelas VIII dan IX. Bekerja dengan remaja di usia pencarian jati diri ini merupakan tantangan sekaligus anugerah. Saya memegang teguh prinsip dari Sayyidina Ali bin Abi Thalib bahwa setiap generasi harus dididik sesuai zamannya. Prinsip inilah yang menjadi kompas saya untuk tidak hanya mengajar, tetapi juga 'terhubung' dengan dunia mereka.
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-semibold text-slate-800">Pendidik PAI</p>
                        <p className="text-sm text-slate-600">SMPN 5 Klaten</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <Lightbulb className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-slate-800">Desainer Grafis</p>
                        <p className="text-sm text-slate-600">Media Pembelajaran</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Visi Misi Section */}
          <Card className="mb-16 shadow-xl border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                Menjemput Masa Depan dengan Iman yang Kuat dan Kreativitas
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">
                Melihat siswa yang begitu akrab dengan gawai dan informasi visual, saya terpanggil untuk membawa pembelajaran PAI ke level berikutnya. Saya percaya, nilai-nilai keimanan dan akhlak mulia bisa bersemi lebih subur jika disajikan melalui media yang mereka kenal dan sukai. Oleh karena itu, saya mendalami desain grafis dan teknologi pembelajaran sebagai jembatan untuk menyampaikan pesan-pesan kebaikan dengan cara yang relevan. Website ini adalah salah satu ikhtiar saya dalam mewujudkan visi tersebut.
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
                Riwayat Pendidikan dan Pelatihan
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Guru Pendidikan Agama Islam</h3>
                    <p className="text-slate-600">SMPN 5 Klaten (2022 - Sekarang)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Sarjana Pendidikan Islam</h3>
                    <p className="text-slate-600">UIN RADEN MAS SAID SURAKARTA</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Program Non Gelar Peningkatan Kompetensi Digital</h3>
                    <p className="text-slate-600">Kemenag RI (2022)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-3 h-3 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Google Certified Educator Level 2</h3>
                    <p className="text-slate-600">(2023)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Guru Penggerak Angkatan 10</h3>
                    <p className="text-slate-600">Kab Klaten (2024)</p>
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
