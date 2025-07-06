
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle } from 'lucide-react';

interface StudentSearchFormProps {
  onSearch: (nis: string) => void;
  isLoading: boolean;
  error: string;
}

const StudentSearchForm: React.FC<StudentSearchFormProps> = ({ onSearch, isLoading, error }) => {
  const [nis, setNis] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(nis);
  };

  return (
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
              placeholder="Contoh: 9422"
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
  );
};

export default StudentSearchForm;
