import { useState, useEffect } from 'react';
import type { PlaydateSchedule } from '../types/matching';

export function usePlaydates() {
  const [playdates, setPlaydates] = useState<PlaydateSchedule[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from an API
    setPlaydates([
      {
        id: '1',
        matchId: 'match1',
        date: new Date('2024-03-20T15:00:00'),
        duration: 60,
        type: 'virtual',
        activity: 'Drawing Together',
        status: 'scheduled',
      },
      {
        id: '2',
        matchId: 'match2',
        date: new Date('2024-03-18T14:00:00'),
        duration: 45,
        type: 'in-person',
        activity: 'Park Playdate',
        status: 'completed',
        location: 'Central Park',
      },
    ]);
  }, []);

  const scheduledPlaydates = playdates.filter(p => p.status === 'scheduled');
  const pastPlaydates = playdates.filter(p => p.status === 'completed');

  return { playdates, scheduledPlaydates, pastPlaydates };
}