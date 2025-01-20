import React from 'react';
import { Badge } from '../../types/profile';

interface BadgeShowcaseProps {
  badges: Badge[];
}

export function BadgeShowcase({ badges }: BadgeShowcaseProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Badges</h2>
      <div className="grid grid-cols-2 gap-4">
        {badges.slice(0, 4).map((badge) => (
          <div
            key={badge.id}
            className="flex flex-col items-center p-4 bg-gray-50 rounded-lg"
          >
            <img src={badge.icon} alt="" className="w-12 h-12 mb-2" />
            <h3 className="text-sm font-medium text-gray-900 text-center">
              {badge.name}
            </h3>
            <p className="text-xs text-gray-500 text-center mt-1">
              {badge.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}