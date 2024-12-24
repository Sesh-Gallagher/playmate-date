import React, { useState } from 'react';
import { User, Camera } from 'lucide-react';
import { InterestSelector } from './InterestSelector';
import { AvatarCreator } from './AvatarCreator';
import { ChildProfile } from '../../types';

export function CreateProfileForm() {
  const [profile, setProfile] = useState<Partial<ChildProfile>>({
    name: '',
    age: 4,
    interests: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile creation
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Create Child Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            min="4"
            max="12"
            value={profile.age}
            onChange={(e) => setProfile({ ...profile, age: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
        <AvatarCreator onSelect={(avatar) => setProfile({ ...profile, avatar })} />
        <InterestSelector 
          selectedInterests={profile.interests || []}
          onInterestsChange={(interests) => setProfile({ ...profile, interests })}
        />
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
}