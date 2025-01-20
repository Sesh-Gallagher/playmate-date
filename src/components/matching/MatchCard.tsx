import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import type { Match } from '../../types/matching';
import type { ChildProfile } from '../../types/profile';

interface MatchCardProps {
  match: Match;
  profile: ChildProfile;
  onAccept: (matchId: string) => void;
  onDecline: (matchId: string) => void;
}

export function MatchCard({ match, profile, onAccept, onDecline }: MatchCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div
          className="w-16 h-16 rounded-full"
          style={{ backgroundColor: profile.avatar.baseColor }}
        />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{profile.name}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span>{profile.timezone}</span>
          </div>
        </div>
        <div className="ml-auto flex items-center">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="ml-1 text-sm font-medium text-gray-700">
            {match.compatibilityScore}% Match
          </span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Common Interests</h4>
        <div className="flex flex-wrap gap-2">
          {match.commonInterests.map((interest) => (
            <span
              key={interest}
              className="px-2 py-1 rounded-full bg-purple-100 text-purple-700 text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          className="flex-1 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
          onClick={() => onAccept(match.id)}
        >
          Accept
        </button>
        <button
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          onClick={() => onDecline(match.id)}
        >
          Decline
        </button>
      </div>
    </div>
  );
}