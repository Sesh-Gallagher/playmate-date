import { useState, useEffect } from 'react';
import type { ChildProfile } from '../types/profile';

export function useChildProfiles() {
  const [profiles, setProfiles] = useState<ChildProfile[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from an API
    setProfiles([
      {
        id: '1',
        name: 'Sarah',
        age: 8,
        avatar: {
          baseColor: '#FFB6C1',
          accessories: [],
          outfit: 'casual',
          features: [],
        },
        interests: [
          { id: '1', category: 'Art', name: 'Drawing', level: 'intermediate' },
          { id: '2', category: 'Science', name: 'Space', level: 'beginner' },
        ],
        badges: [],
        timezone: 'PST',
        languages: ['English', 'Spanish'],
        preferredActivities: ['Drawing', 'Reading'],
        achievements: [],
        lastActive: new Date(),
        socialScore: 75,
        learningScore: 80,
        creativityScore: 90,
      },
    ]);
  }, []);

  const updateProfile = (id: string, updates: Partial<ChildProfile>) => {
    setProfiles(profiles.map(profile =>
      profile.id === id ? { ...profile, ...updates } : profile
    ));
  };

  return { profiles, updateProfile };
}