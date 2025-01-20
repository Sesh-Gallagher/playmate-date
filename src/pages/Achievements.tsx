import React from 'react';
import { Trophy, Star, Target } from 'lucide-react';
import { useBadges } from '../hooks/useBadges';
import { useAchievements } from '../hooks/useAchievements';

export function Achievements() {
  const { badges } = useBadges();
  const { achievements, progress } = useAchievements();

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Achievements</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Earned Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                <img src={badge.icon} alt="" className="w-16 h-16 mb-3" />
                <h3 className="text-lg font-medium text-center">{badge.name}</h3>
                <p className="text-sm text-gray-500 text-center mt-2">
                  {badge.description}
                </p>
                <span className="text-xs text-gray-400 mt-2">
                  Earned {new Date(badge.dateEarned).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Progress</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {progress.map((item) => (
              <div key={item.id} className="mb-4 last:mb-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    {item.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {item.current}/{item.required}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{
                      width: `${(item.current / item.required) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}