import React, { useState } from 'react';
import type { ChildProfile } from '../../types/profile';

interface ProfileDetailsProps {
  profile: ChildProfile;
  onSave: (updates: Partial<ChildProfile>) => void;
}

export function ProfileDetails({ profile, onSave }: ProfileDetailsProps) {
  const [formData, setFormData] = useState({
    name: profile.name,
    age: profile.age,
    languages: profile.languages.join(', '),
    interests: profile.interests.map(i => i.name).join(', '),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      name: formData.name,
      age: Number(formData.age),
      languages: formData.languages.split(',').map(l => l.trim()),
      interests: formData.interests.split(',').map(i => ({
        id: Math.random().toString(),
        name: i.trim(),
        category: 'general',
        level: 'beginner',
      })),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Age</label>
        <input
          type="number"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Languages</label>
        <input
          type="text"
          value={formData.languages}
          onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          placeholder="English, Spanish"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Interests</label>
        <input
          type="text"
          value={formData.interests}
          onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          placeholder="Drawing, Science, Music"
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}