import React from 'react';
import { User, Plus } from 'lucide-react';

export function ChildrenProfiles() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Your Children</h2>
      <div className="space-y-4">
        {[1].map((_, index) => (
          <div key={index} className="flex items-center p-3 border rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=150&q=80"
              alt="Child avatar"
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-3">
              <h3 className="font-medium">Alex</h3>
              <p className="text-sm text-gray-500">Age 8</p>
            </div>
          </div>
        ))}
        <button className="w-full flex items-center justify-center px-4 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-purple-500 hover:text-purple-500">
          <Plus className="h-4 w-4 mr-2" />
          Add Child Profile
        </button>
      </div>
    </div>
  );
}