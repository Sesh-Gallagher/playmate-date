import React from 'react';
import { MatchCard } from '../components/matching/MatchCard';
import type { Match } from '../types/matching';
import type { ChildProfile } from '../types/profile';

export function Matches() {
  const sampleMatch: Match = {
    id: '1',
    profiles: ['child1', 'child2'],
    commonInterests: ['Drawing', 'Science', 'Gaming'],
    compatibilityScore: 85,
    status: 'pending',
    createdAt: new Date(),
  };

  const sampleProfile: ChildProfile = {
    id: 'child2',
    name: 'Alex Thompson',
    age: 8,
    avatar: {
      baseColor: '#87CEEB',
      accessories: [],
      outfit: 'sporty',
      features: [],
    },
    interests: [],
    badges: [],
    timezone: 'PST',
    languages: ['English'],
    preferredActivities: [],
    achievements: [],
    lastActive: new Date(),
  };

  const handleAccept = (matchId: string) => {
    console.log('Accepted match:', matchId);
  };

  const handleDecline = (matchId: string) => {
    console.log('Declined match:', matchId);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Potential Matches</h1>
      
      <div className="space-y-6">
        <MatchCard
          match={sampleMatch}
          profile={sampleProfile}
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      </div>
    </div>
  );
}