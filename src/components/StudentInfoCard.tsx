
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';

interface StudentData {
  no: string;
  nama: string;
  nis: string;
  kelas: string;
  semester: string;
  'nilai bab 1': string;
  'nilai bab 2': string;
  'nilai bab 3': string;
  'nilai bab 4': string;
  'nilai bab 5': string;
  'nilai asts': string;
  'nilai asas': string;
  'nilai rapor': string;
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
