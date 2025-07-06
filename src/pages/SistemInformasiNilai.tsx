
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { User, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { useToast } from '@/hooks/use-toast';

interface StudentData {
  nis: string;
  nama: string;
  kelas: string;
  [key: string]: string;
}

const SistemInformasiNilai = () => {
  const [nis, setNis] = useState('');
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const fetchStudentData = async () => {
    if (!nis.trim()) {
      setError('Harap masukkan NIS');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSggYPzXmr58hqsCs9kkNOsScPK-vy7sci7hMnzZnp2xGymha4vg841Bf9F5aSjgWeplmGRK04OgkRn/pub?output=csv');
      const csvText = await response.text();
      
      // Parse CSV
      const lines = csvText.split('\\n');
      const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, ''));
      
      // Find student by NIS
      let foundStudent = null;
      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(value => value.trim().replace(/"/g, ''));
        if (values[0] === nis) { // Assuming NIS is in first column
          foundStudent = {};
          headers.forEach((header, index) => {
            foundStudent[header.toLowerCase()] = values[index] || '';
          });
          break;
        }
      }

      if (foundStudent) {
        setStudentData(foundStudent as StudentData);
        toast({
          title: "Data ditemukan!",
          description: `Selamat datang, ${foundStudent.nama || 'Siswa'}`,
        });
      } else {
        setError('NIS tidak ditemukan dalam database');
        setStudentData(null);
      }
    } catch (err) {
      setError('Gagal mengambil data. Periksa koneksi internet Anda.');
      console.error('Error fetching data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchStudentData();
  };

  const renderStudentInfo = () => {
    if (!studentData) return null;

    const excludeKeys = ['nis', 'nama', 'kelas'];
    const gradeKeys = Object.keys(studentData).filter(key => 
      !excludeKeys.includes(key.toLowerCase()) && studentData[key]
    );

    return (
      <div className="space-y-6">
        {/* Student Info Card */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              Informasi Siswa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label className="text-sm font-semibold text-slate-600">NIS</Label>
                <p className="text-lg font-bold text-slate-800">{studentData.nis}</p>
              </div>
              <div>
                <Label className="text-sm font-semibold text-slate-600">Nama</Label>
                <p className="text-lg font-bold text-slate-800">{studentData.nama}</p>
              </div>
              <div>
                <Label className="text-sm font-semibold text-slate-600">Kelas</Label>
                <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                  {studentData.kelas}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grades Table */}
        {gradeKeys.length > 0 && (
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                Data Nilai
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Komponen Penilaian</TableHead>
                    <TableHead className="font-semibold text-center">Nilai</TableHead>
                    <TableHead className="font-semibold text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gradeKeys.map((key) => {
                    const value = studentData[key];
                    const numericValue = parseFloat(value);
                    const isNumeric = !isNaN(numericValue);
                    const status = isNumeric && numericValue >= 75 ? 'Tuntas' : 'Belum Tuntas';
                    
                    return (
                      <TableRow key={key} className="hover:bg-slate-50">
                        <TableCell className="font-medium capitalize">
                          {key.replace(/_/g, ' ')}
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant={isNumeric && numericValue >= 75 ? "default" : "destructive"}>
                            {value}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          {isNumeric && (
                            <div className="flex items-center justify-center gap-2">
                              {numericValue >= 75 ? (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              ) : (
                                <AlertCircle className="w-4 h-4 text-red-600" />
                              )}
                              <span className={numericValue >= 75 ? "text-green-600" : "text-red-600"}>
                                {status}
                              </span>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    );
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

          {/* Login Form */}
          <Card className="shadow-xl border-0 mb-8">
            <CardHeader>
              <CardTitle className="text-center">Masukkan NIS Anda</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="nis">Nomor Induk Siswa (NIS)</Label>
                  <Input
                    id="nis"
                    type="text"
                    placeholder="Contoh: 12345"
                    value={nis}
                    onChange={(e) => setNis(e.target.value)}
                    className="mt-2"
                  />
                  {error && (
                    <p className="text-red-600 text-sm mt-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? 'Mencari data...' : 'Cari Data Siswa'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Student Data */}
          {renderStudentInfo()}
        </div>
      </div>
    </div>
  );
};

export default SistemInformasiNilai;
