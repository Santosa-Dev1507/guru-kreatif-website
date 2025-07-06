
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FileText, AlertCircle, CheckCircle } from 'lucide-react';

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

interface GradesTableProps {
  studentData: StudentData;
}

const GradesTable: React.FC<GradesTableProps> = ({ studentData }) => {
  const gradeEntries = [
    { label: 'Nilai BAB 1', value: studentData['nilai bab 1'] },
    { label: 'Nilai BAB 2', value: studentData['nilai bab 2'] },
    { label: 'Nilai BAB 3', value: studentData['nilai bab 3'] },
    { label: 'Nilai BAB 4', value: studentData['nilai bab 4'] },
    { label: 'Nilai BAB 5', value: studentData['nilai bab 5'] },
    { label: 'Nilai ASTS', value: studentData['nilai asts'] },
    { label: 'Nilai ASAS', value: studentData['nilai asas'] },
    { label: 'Nilai Rapor', value: studentData['nilai rapor'] }
  ];

  return (
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
            {gradeEntries.map((entry, index) => {
              const displayValue = entry.value || '0';
              const numericValue = parseFloat(displayValue);
              const isNumeric = !isNaN(numericValue);
              const status = isNumeric && numericValue >= 75 ? 'Tuntas' : 'Belum Tuntas';
              
              return (
                <TableRow key={index} className="hover:bg-slate-50">
                  <TableCell className="font-medium">
                    {entry.label}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant={isNumeric && numericValue >= 75 ? "default" : "destructive"}>
                      {displayValue}
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
  );
};

export default GradesTable;
