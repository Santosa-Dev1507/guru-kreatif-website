
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description?: string;
  image_url?: string;
  project_url?: string;
  gradient_colors?: string;
  created_at: string;
  updated_at: string;
}

export const usePortfolio = () => {
  const { user } = useAuth();
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  const fetchPortfolioItems = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPortfolioItems(data || []);
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
      toast.error('Error loading portfolio items');
    } finally {
      setLoading(false);
    }
  };

  const addPortfolioItem = async (item: Omit<PortfolioItem, 'id' | 'created_at' | 'updated_at'>) => {
    if (!user) {
      toast.error('Please log in to add portfolio items');
      return { error: 'Not authenticated' };
    }

    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .insert([{
          ...item,
          user_id: user.id
        }])
        .select()
        .single();

      if (error) throw error;

      await fetchPortfolioItems();
      toast.success('Portfolio item added successfully');
      return { error: null, data };
    } catch (error) {
      console.error('Error adding portfolio item:', error);
      toast.error('Error adding portfolio item');
      return { error };
    }
  };

  const updatePortfolioItem = async (id: string, updates: Partial<PortfolioItem>) => {
    if (!user) {
      toast.error('Please log in to update portfolio items');
      return { error: 'Not authenticated' };
    }

    try {
      const { error } = await supabase
        .from('portfolio_items')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;

      await fetchPortfolioItems();
      toast.success('Portfolio item updated successfully');
      return { error: null };
    } catch (error) {
      console.error('Error updating portfolio item:', error);
      toast.error('Error updating portfolio item');
      return { error };
    }
  };

  const deletePortfolioItem = async (id: string) => {
    if (!user) {
      toast.error('Please log in to delete portfolio items');
      return { error: 'Not authenticated' };
    }

    try {
      const { error } = await supabase
        .from('portfolio_items')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;

      await fetchPortfolioItems();
      toast.success('Portfolio item deleted successfully');
      return { error: null };
    } catch (error) {
      console.error('Error deleting portfolio item:', error);
      toast.error('Error deleting portfolio item');
      return { error };
    }
  };

  return {
    portfolioItems,
    loading,
    addPortfolioItem,
    updatePortfolioItem,
    deletePortfolioItem,
    refetchPortfolioItems: fetchPortfolioItems
  };
};
