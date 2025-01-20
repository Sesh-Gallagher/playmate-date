import { useState, useEffect } from 'react';

interface Activity {
  id: string;
  message: string;
  timeAgo: string;
  avatar: string;
}

export function useRecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from an API
    setActivities([
      {
        id: '1',
        message: 'Sarah earned the "Super Builder" badge!',
        timeAgo: '5 minutes ago',
        avatar: 'https://images.unsplash.com/photo-1517677129300-07b130802f46?w=120&auto=format&fit=crop&q=60',
      },
      {
        id: '2',
        message: 'New playdate scheduled with Alex',
        timeAgo: '1 hour ago',
        avatar: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=120&auto=format&fit=crop&q=60',
      },
    ]);
  }, []);

  return activities;
}