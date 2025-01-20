import React from 'react';
import type { ChildProfile } from '../../types/profile';

interface ProfileProgressProps {
  profile: ChildProfile;
}

export function ProfileProgress({ profile }: ProfileProgressProps) {
  const categories = [
    { name: 'Social Skills', value: profile.socialScore || 0 },
    { name: 'Learning', value: profile.learningScore || 0 },
    { name: 'Creativity', value: profile.creativityScore || 0 },
  ];

  return (
    <div className="space-y-3">
      {categories.map((category) => (
        <div key={category.name}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">{category.name}</span>
            <span className="text-gray-900 font-medium">{category.value}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full"
              style={{ width: `${category.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}