import React from 'react';
import { GameCard } from '../components/games/GameCard';
import { useGames } from '../hooks/useGames';

export function GameCenter() {
  const { games, startGame } = useGames();

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Game Center</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onSelect={() => startGame(game.id)}
          />
        ))}
      </div>
    </div>
  );
}