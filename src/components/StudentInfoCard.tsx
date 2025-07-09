
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';

interface StudentData {
  id: string;
  nis: string;
  nama: string;
  kelas: string;
  semester: string;
  grades?: {
    nilai_bab_1: string | null;
    nilai_bab_2: string | null;
    nilai_bab_3: string | null;
    nilai_bab_4: string | null;
    nilai_bab_5: string | null;
    nilai_asts: string | null;
    nilai_asas: string | null;
    nilai_rapor: string | null;
  };
}

interface StudentInfoCardProps {
  studentData: StudentData;
}

const StudentInfoCard: React.FC<StudentInfoCardProps> = ({ studentData }) => {
  return (
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
        <div className="mt-4">
          <Label className="text-sm font-semibold text-slate-600">Semester</Label>
          <p className="text-lg font-bold text-slate-800">{studentData.semester}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentInfoCard;
