import React, { useEffect } from 'react';
import {
  LiveKitRoom,
  VideoConference,
  ControlBar,
  useTracks,
} from '@livekit/components-react';
import { Track } from 'livekit-client';
import { ParentControls } from './ParentControls';
import '@livekit/components-styles';

interface VideoCallProps {
  roomName: string;
  token: string;
  isParent: boolean;
}

export function VideoCall({ roomName, token, isParent }: VideoCallProps) {
  const tracks = useTracks();

  useEffect(() => {
    // Monitor active participants
    const participants = tracks.filter(track => track.kind === Track.Kind.Video);
    console.log('Active participants:', participants.length);
  }, [tracks]);

  return (
    <LiveKitRoom
      token={token}
      serverUrl={import.meta.env.VITE_LIVEKIT_URL}
      connect={true}
      className="h-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="relative">
          <VideoConference />
          <ControlBar />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          {isParent && <ParentControls roomName={roomName} />}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-4">Interactive Activities</h3>
            <div className="space-y-4">
              <button className="w-full py-2 px-4 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200">
                Start Drawing Game
              </button>
              <button className="w-full py-2 px-4 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
                Play Quiz Together
              </button>
              <button className="w-full py-2 px-4 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
                Memory Match Game
              </button>
            </div>
          </div>
        </div>
      </div>
    </LiveKitRoom>
  );
}