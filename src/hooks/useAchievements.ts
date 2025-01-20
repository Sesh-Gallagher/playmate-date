import { useState, useEffect } from 'react';

interface Achievement {
  id: string;
  name: string;
  current: number;
  required: number;
}

export function useAchievements() {
  const [achievements, setAchievements] = useState<string[]>([]);
  const [progress, setProgress] = useState<Achievement[]>([]);

  useEffect(() => {
    setProgress([
      {
        id: '1',
        name: 'Game Master',
        current: 3,
        required: 5,
      },
      {
        id: '2',
        name: 'Social Butterfly',
        current: 2,
        required: 3,
      },
      {
        id: '3',
        name: 'Learning Explorer',
        current: 4,
        required: 10,
      },
    ]);
  }, []);

  return { achievements, progress };
}