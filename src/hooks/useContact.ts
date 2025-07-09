
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ContactMessage {
  nama: string;
  email: string;
  subjek: string;
  pesan: string;
}

export const useContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContactMessage = async (message: ContactMessage) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([message]);

      if (error) throw error;

      toast.success('Pesan berhasil dikirim! Terima kasih atas feedback Anda.');
      return { error: null };
    } catch (error) {
      console.error('Error submitting contact message:', error);
      toast.error('Gagal mengirim pesan. Silakan coba lagi.');
      return { error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitContactMessage
  };
};
