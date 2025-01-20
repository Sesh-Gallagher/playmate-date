import { useState, useEffect } from 'react';

interface ActivityData {
  date: string;
  profiles: number;
  playdates: number;
  messages: number;
}

export function useActivityData() {
  const [data, setData] = useState<ActivityData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Generate last 7 days of mock data
        const mockData = Array.from({ length: 7 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (6 - i));
          return {
            date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            profiles: Math.floor(Math.random() * 50) + 20,
            playdates: Math.floor(Math.random() * 30) + 10,
            messages: Math.floor(Math.random() * 100) + 50,
          };
        });
        
        setData(mockData);
      } catch (error) {
        console.error('Failed to fetch activity data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
}