import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardCard } from '../components/dashboard/DashboardCard';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { BadgeShowcase } from '../components/dashboard/BadgeShowcase';
import { useMatches } from '../hooks/useMatches';
import { useBadges } from '../hooks/useBadges';
import { useChildProfiles } from '../hooks/useChildProfiles';

export function Dashboard() {
  const navigate = useNavigate();
  const { pendingMatches } = useMatches();
  const { badges } = useBadges();
  const { profiles } = useChildProfiles();

  const menuItems = [
    {
      title: 'Profiles' as const,
      description: 'Manage child profiles and progress',
      action: () => navigate('/profiles'),
      count: profiles.length,
    },
    {
      title: 'Find Matches' as const,
      description: 'Discover new playmates based on interests',
      action: () => navigate('/matches'),
      notification: pendingMatches.length,
    },
    {
      title: 'Playdates' as const,
      description: 'Schedule and manage playdates',
      action: () => navigate('/playdates'),
    },
    {
      title: 'Game Center' as const,
      description: 'Play games and earn rewards',
      action: () => navigate('/game-center'),
      highlight: true,
    },
    {
      title: 'Achievements' as const,
      description: 'View earned badges and rewards',
      action: () => navigate('/achievements'),
      count: badges.length,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menuItems.map((item) => (
              <DashboardCard key={item.title} {...item} />
            ))}
          </div>
          <RecentActivity className="mt-8" />
        </div>
        <div>
          <BadgeShowcase badges={badges} />
        </div>
      </div>
    </div>
  );
}