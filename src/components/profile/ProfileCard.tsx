import React, { useState, useRef } from 'react';
import { Edit2, Camera, Award } from 'lucide-react';
import type { ChildProfile } from '../../types/profile';
import { ProfileProgress } from './ProfileProgress';
import { ProfileDetails } from './ProfileDetails';
import { ProfileAvatar } from './ProfileAvatar';

interface ProfileCardProps {
  profile: ChildProfile;
  onUpdate: (id: string, updates: Partial<ChildProfile>) => void;
}

export function ProfileCard({ profile, onUpdate }: ProfileCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdate(profile.id, { photoUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <ProfileAvatar profile={profile} />
        <label 
          className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-50"
          onClick={() => fileInputRef.current?.click()}
        >
          <Camera className="w-5 h-5 text-gray-600" />
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handlePhotoUpload}
          />
        </label>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{profile.name}</h3>
            <p className="text-sm text-gray-500">Age: {profile.age}</p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <Edit2 className="w-5 h-5" />
          </button>
        </div>

        {isEditing ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
              <ProfileDetails
                profile={profile}
                onSave={(updates) => {
                  onUpdate(profile.id, updates);
                  setIsEditing(false);
                }}
              />
              <button
                onClick={() => setIsEditing(false)}
                className="mt-4 px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <ProfileProgress profile={profile} />
        )}

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <Award className="w-4 h-4 mr-2" />
            {profile.badges.length} Badges Earned
          </div>
        </div>
      </div>
    </div>
  );
}