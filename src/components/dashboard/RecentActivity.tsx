import React from 'react';
import { useRecentActivity } from '../../hooks/useRecentActivity';

interface RecentActivityProps {
  className?: string;
}

export function RecentActivity({ className = '' }: RecentActivityProps) {
  const activities = useRecentActivity();

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                src={activity.avatar}
                alt=""
                className="h-10 w-10 rounded-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                {activity.message}
              </p>
              <p className="text-sm text-gray-500">
                {activity.timeAgo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}