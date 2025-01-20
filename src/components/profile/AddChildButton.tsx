import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { ProfileDetails } from './ProfileDetails';
import type { ChildProfile } from '../../types/profile';

export function AddChildButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = (profile: Partial<ChildProfile>) => {
    // In a real app, this would call an API
    console.log('Creating profile:', profile);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
      >
        <UserPlus className="w-5 h-5 mr-2" />
        Add Child
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Add New Child</h2>
            <ProfileDetails
              profile={{
                id: '',
                name: '',
                age: 5,
                avatar: {
                  baseColor: '#FFB6C1',
                  accessories: [],
                  outfit: 'casual',
                  features: [],
                },
                interests: [],
                badges: [],
                timezone: '',
                languages: [],
                preferredActivities: [],
                achievements: [],
                lastActive: new Date(),
              }}
              onSave={handleSave}
            />
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}