import React from 'react';
import { useChildProfiles } from '../hooks/useChildProfiles';
import { ProfileCard } from '../components/profile/ProfileCard';
import { AddChildButton } from '../components/profile/AddChildButton';

export function ChildProfiles() {
  const { profiles, updateProfile } = useChildProfiles();

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Child Profiles</h1>
        <AddChildButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onUpdate={updateProfile}
          />
        ))}
      </div>
    </div>
  );
}