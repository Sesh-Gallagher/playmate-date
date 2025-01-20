import { useState, useEffect } from 'react';
import { Match } from '../types/matching';

export function useMatches() {
  const [pendingMatches, setPendingMatches] = useState<Match[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from an API
    setPendingMatches([
      {
        id: '1',
        profiles: ['child1', 'child2'],
        commonInterests: ['Drawing', 'Science'],
        compatibilityScore: 85,
        status: 'pending',
        createdAt: new Date(),
      },
    ]);
  }, []);

  return { pendingMatches };
}