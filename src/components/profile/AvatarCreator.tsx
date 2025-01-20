import React, { useState } from 'react';
import { Palette, Shirt, Sparkles } from 'lucide-react';
import type { Avatar } from '../../types/profile';

interface AvatarCreatorProps {
  initialAvatar?: Avatar;
  onSave: (avatar: Avatar) => void;
}

export function AvatarCreator({ initialAvatar, onSave }: AvatarCreatorProps) {
  const [avatar, setAvatar] = useState<Avatar>(initialAvatar || {
    baseColor: '#FFB6C1',
    accessories: [],
    outfit: 'casual',
    features: [],
  });

  const colors = ['#FFB6C1', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C'];
  const outfits = ['casual', 'sporty', 'fancy', 'creative'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Create Your Avatar</h3>
      
      <div className="space-y-6">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Palette className="w-4 h-4 mr-2" />
            Choose Your Color
          </label>
          <div className="flex space-x-2">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full ${
                  avatar.baseColor === color ? 'ring-2 ring-purple-500' : ''
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setAvatar({ ...avatar, baseColor: color })}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Shirt className="w-4 h-4 mr-2" />
            Choose Your Outfit
          </label>
          <div className="flex space-x-2">
            {outfits.map((outfit) => (
              <button
                key={outfit}
                className={`px-4 py-2 rounded-md ${
                  avatar.outfit === outfit
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setAvatar({ ...avatar, outfit })}
              >
                {outfit.charAt(0).toUpperCase() + outfit.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <button
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
          onClick={() => onSave(avatar)}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Save Avatar
        </button>
      </div>
    </div>
  );
}