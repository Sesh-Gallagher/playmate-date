import React from 'react';
import { Users, Calendar, GamepadIcon, Award, UserCircle } from 'lucide-react';

const icons = {
  'Find Matches': Users,
  'Playdates': Calendar,
  'Game Center': GamepadIcon,
  'Achievements': Award,
  'Profiles': UserCircle,
} as const;

interface DashboardCardProps {
  title: keyof typeof icons;
  description: string;
  action: () => void;
  notification?: number;
  highlight?: boolean;
  count?: number;
}

export function DashboardCard({
  title,
  description,
  action,
  notification,
  highlight,
  count,
}: DashboardCardProps) {
  const Icon = icons[title];

  return (
    <button
      onClick={action}
      className={`relative p-6 rounded-lg shadow-md text-left transition-all ${
        highlight
          ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:shadow-lg'
          : 'bg-white hover:shadow-lg'
      }`}
    >
      <div className="flex items-start">
        <Icon className={`h-8 w-8 ${highlight ? 'text-white' : 'text-purple-500'} mb-4`} />
        {notification && (
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {notification}
          </span>
        )}
      </div>
      <h3 className={`text-lg font-medium ${highlight ? 'text-white' : 'text-gray-900'} mb-2`}>
        {title}
      </h3>
      <p className={`text-sm ${highlight ? 'text-white/90' : 'text-gray-500'}`}>
        {description}
      </p>
      {count !== undefined && (
        <div className={`mt-4 text-sm ${highlight ? 'text-white/90' : 'text-purple-600'}`}>
          {count} {count === 1 ? 'item' : 'items'}
        </div>
      )}
    </button>
  );
}