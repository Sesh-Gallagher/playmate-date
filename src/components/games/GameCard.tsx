import React from 'react';
import { Users, Star } from 'lucide-react';
import type { Game } from '../../types/games';

interface GameCardProps {
  game: Game;
  onSelect: () => void;
}

export function GameCard({ game, onSelect }: GameCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={game.thumbnail}
        alt={game.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{game.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{game.description}</p>
        
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{game.minPlayers}-{game.maxPlayers} players</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1" />
            <span>Ages {game.ageRange[0]}-{game.ageRange[1]}</span>
          </div>
        </div>

        <button
          onClick={onSelect}
          className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
        >
          Play Now
        </button>
      </div>
    </div>
  );
}