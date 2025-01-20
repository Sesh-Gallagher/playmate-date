import { useState, useEffect } from 'react';
import { Badge } from '../types/profile';

export function useBadges() {
  const [badges, setBadges] = useState<Badge[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from an API
    setBadges([
      {
        id: '1',
        name: 'Super Builder',
        description: 'Completed 5 building challenges',
        icon: 'https://images.unsplash.com/photo-1513682121497-80211f36a7d3?w=120&auto=format&fit=crop&q=60',
        dateEarned: new Date(),
      },
      {
        id: '2',
        name: 'Quiz Master',
        description: 'Won 3 educational quizzes',
        icon: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=120&auto=format&fit=crop&q=60',
        dateEarned: new Date(),
      },
    ]);
  }, []);

  return { badges };
}