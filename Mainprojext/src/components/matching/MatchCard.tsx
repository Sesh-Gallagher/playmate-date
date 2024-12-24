import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import { ChildProfile } from '../../types';

interface MatchCardProps {
  profile: ChildProfile;
  matchScore: number;
  onConnect: () => void;
}

export function MatchCard({ profile, matchScore, onConnect }: MatchCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={profile.avatar}
        alt={`${profile.name}'s avatar`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{profile.name}</h3>
          <span className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 mr-1" />
            {matchScore}%
          </span>
        </div>
        <p className="text-sm text-gray-600">Age: {profile.age}</p>
        <div className="mt-2">
          <h4 className="text-sm font-medium text-gray-700">Interests:</h4>
          <div className="flex flex-wrap gap-2 mt-1">
            {profile.interests.map((interest) => (
              <span
                key={interest}
                className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={onConnect}
          className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Connect
        </button>
      </div>
    </div>
  );
}