import React from 'react';
import { GameCard } from './GameCard';
import { AVAILABLE_GAMES } from './constants';

interface GameHubProps {
  onSelectGame: (gameId: string) => void;
}

export function GameHub({ onSelectGame }: GameHubProps) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AVAILABLE_GAMES.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onSelect={() => onSelectGame(game.id)}
          />
        ))}
      </div>
    </div>
  );
}