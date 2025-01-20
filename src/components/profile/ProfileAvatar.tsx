import React from 'react';
import type { ChildProfile } from '../../types/profile';

interface ProfileAvatarProps {
  profile: ChildProfile;
}

export function ProfileAvatar({ profile }: ProfileAvatarProps) {
  return (
    <div 
      className="h-48 flex items-center justify-center"
      style={{ backgroundColor: profile.avatar.baseColor }}
    >
      {profile.photoUrl ? (
        <img
          src={profile.photoUrl}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="text-6xl font-bold text-white">
          {profile.name.charAt(0)}
        </div>
      )}
    </div>
  );
}