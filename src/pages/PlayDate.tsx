import React, { useState } from 'react';
import { VideoCall } from '../components/video/VideoCall';
import { GameHub } from '../components/games/GameHub';

export function PlayDate() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [token] = useState('demo-token'); // In production, fetch from server
  const [roomName] = useState('demo-room'); // In production, generate unique room

  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <VideoCall
              roomName={roomName}
              token={token}
              isParent={true}
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <GameHub onSelectGame={handleGameSelect} />
          </div>
        </div>
      </div>
    </div>
  );
}