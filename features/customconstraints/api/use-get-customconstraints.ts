import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import { client } from '@/lib/hono';

export const useGetcustomconstraints = () => {
  const query = useQuery({
    queryKey: ['customconstraints'],
    queryFn: async () => {
      const response = await client.api.customconstraints.$get();

      if (!response.ok) {
        throw new Error('Failed to fetch customconstraints');
      }

      const { data } = await response.json();
      
      return data;
    }
  });

  return query;
};
