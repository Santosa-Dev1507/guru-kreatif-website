
import React, { useState } from 'react';
import { Mail, Instagram, Youtube, Facebook, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';

const Kontak = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const socialMedia = [
    {
      name: 'Instagram',
      icon: Instagram,
      description: 'Tempat saya berbagi portofolio visual, infografis materi PAI, dan cuplikan proses kreatif di balik layar. Cocok untuk Anda yang menyukai konten visual.',
      link: 'https://instagram.com/boedi.sant0sa',
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'TikTok',
      icon: null, // We'll use image instead
      description: 'Tempat saya berbagi portofolio visual, infografis materi PAI, dan cuplikan proses kreatif di balik layar. Cocok untuk Anda yang menyukai konten visual.',
      link: 'https://tiktok.com/@boedi.sant0sa',
      color: 'from-black to-gray-800'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      description: 'Kunjungi kanal ini untuk mengakses video-video pembelajaran, tutorial membuat media ajar, dan rekaman webinar atau diskusi seputar inovasi pendidikan.',
      link: 'https://youtube.com/c/buditariacademy',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      description: 'Untuk informasi dan pengumuman yang lebih bersifat umum dan menjangkau komunitas orang tua murid atau alumni.',
      link: 'https://facebook.com/Budi Santosa',
      color: 'from-blue-500 to-blue-600'
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
              Hubungi Saya
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Jika Anda memiliki pertanyaan, ide untuk kolaborasi, atau ingin berdiskusi lebih lanjut seputar inovasi pembelajaran PAI, jangan ragu untuk menghubungi saya melalui kanal di bawah ini.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Informasi Kontak</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Email</h3>
                      <p className="text-slate-600">santosa.1507@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Kirim Pesan</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nama" className="block text-sm font-medium text-slate-700 mb-2">
                      Nama
                    </label>
                    <Input
                      id="nama"
                      name="nama"
                      type="text"
                      value={formData.nama}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Masukkan email Anda"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subjek" className="block text-sm font-medium text-slate-700 mb-2">
                      Subjek
                    </label>
                    <Input
                      id="subjek"
                      name="subjek"
                      type="text"
                      value={formData.subjek}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Subjek pesan"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="pesan" className="block text-sm font-medium text-slate-700 mb-2">
                      Pesan
                    </label>
                    <Textarea
                      id="pesan"
                      name="pesan"
                      value={formData.pesan}
                      onChange={handleInputChange}
                      className="w-full min-h-[120px]"
                      placeholder="Tulis pesan Anda di sini..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Terhubung di Media Sosial</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Anda juga bisa mengikuti aktivitas, karya-karya, dan pemikiran saya melalui platform berikut.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {socialMedia.map((social, index) => {
              const Icon = social.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {social.name === 'TikTok' ? (
                          <img 
                            src="/lovable-uploads/d3cb02dc-6bd1-454f-8614-60ed9bf1e42a.png" 
                            alt="TikTok Logo" 
                            className="w-10 h-10 object-contain"
                          />
                        ) : (
                          Icon && <Icon className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{social.name}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {social.description}
                        </p>
                        <Button 
                          asChild 
                          variant="outline" 
                          size="sm"
                          className="border-2 border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 rounded-full"
                        >
                          <a href={social.link} target="_blank" rel="noopener noreferrer">
                            Kunjungi {social.name}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
