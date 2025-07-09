
-- Create portfolio items table
CREATE TABLE public.portfolio_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  project_url TEXT,
  gradient_colors TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create classes table
CREATE TABLE public.classes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  grade TEXT NOT NULL, -- VII, VIII, IX
  title TEXT NOT NULL,
  description TEXT,
  color_scheme TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create class materials table
CREATE TABLE public.class_materials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  class_id UUID REFERENCES public.classes NOT NULL,
  title TEXT NOT NULL,
  content TEXT,
  file_url TEXT,
  material_type TEXT, -- pdf, video, image, etc
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create announcements table
CREATE TABLE public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  priority TEXT DEFAULT 'normal', -- high, normal, low
  class_id UUID REFERENCES public.classes,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nama TEXT NOT NULL,
  email TEXT NOT NULL,
  subjek TEXT NOT NULL,
  pesan TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create students table for grade information system
CREATE TABLE public.students (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nis TEXT UNIQUE NOT NULL,
  nama TEXT NOT NULL,
  kelas TEXT NOT NULL,
  semester TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create grades table for student grades
CREATE TABLE public.grades (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.students NOT NULL,
  nilai_bab_1 TEXT,
  nilai_bab_2 TEXT,
  nilai_bab_3 TEXT,
  nilai_bab_4 TEXT,
  nilai_bab_5 TEXT,
  nilai_asts TEXT,
  nilai_asas TEXT,
  nilai_rapor TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.class_materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.grades ENABLE ROW LEVEL SECURITY;

-- RLS Policies for portfolio_items
CREATE POLICY "Users can view all portfolio items" 
  ON public.portfolio_items 
  FOR SELECT 
  USING (true);

CREATE POLICY "Users can manage their own portfolio items" 
  ON public.portfolio_items 
  FOR ALL 
  USING (auth.uid() = user_id);

-- RLS Policies for classes
CREATE POLICY "Users can view all classes" 
  ON public.classes 
  FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can manage classes" 
  ON public.classes 
  FOR ALL 
  USING (auth.role() = 'authenticated');

-- RLS Policies for class_materials
CREATE POLICY "Users can view all class materials" 
  ON public.class_materials 
  FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can manage class materials" 
  ON public.class_materials 
  FOR ALL 
  USING (auth.role() = 'authenticated');

-- RLS Policies for announcements
CREATE POLICY "Users can view all announcements" 
  ON public.announcements 
  FOR SELECT 
  USING (true);

CREATE POLICY "Users can manage their own announcements" 
  ON public.announcements 
  FOR ALL 
  USING (auth.uid() = user_id);

-- RLS Policies for contact_messages
CREATE POLICY "Users can insert contact messages" 
  ON public.contact_messages 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact messages" 
  ON public.contact_messages 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- RLS Policies for students
CREATE POLICY "Users can view all students" 
  ON public.students 
  FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can manage students" 
  ON public.students 
  FOR ALL 
  USING (auth.role() = 'authenticated');

-- RLS Policies for grades
CREATE POLICY "Users can view all grades" 
  ON public.grades 
  FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can manage grades" 
  ON public.grades 
  FOR ALL 
  USING (auth.role() = 'authenticated');

-- Insert default classes
INSERT INTO public.classes (grade, title, description, color_scheme) VALUES
('VII', 'Kelas VII', 'Kelas VII Pendidikan Agama Islam', 'from-blue-500 to-blue-600'),
('VIII', 'Kelas VIII', 'Kelas VIII Pendidikan Agama Islam', 'from-green-500 to-green-600'),
('IX', 'Kelas IX', 'Kelas IX Pendidikan Agama Islam', 'from-purple-500 to-purple-600');
