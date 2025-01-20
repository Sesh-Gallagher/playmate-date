import React, { useState } from 'react';
import { Shield, Video, VideoOff, AlertTriangle } from 'lucide-react';

interface ParentControlsProps {
  roomName: string;
}

export function ParentControls({ roomName }: ParentControlsProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const reportIssue = () => {
    // Implement issue reporting
    console.log('Reporting issue for room:', roomName);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <Shield className="w-5 h-5 mr-2 text-purple-600" />
          Parent Controls
        </h3>
      </div>

      <div className="space-y-4">
        <button
          onClick={toggleRecording}
          className={`w-full flex items-center justify-center px-4 py-2 rounded-lg ${
            isRecording
              ? 'bg-red-100 text-red-700'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          {isRecording ? <VideoOff className="w-4 h-4 mr-2" /> : <Video className="w-4 h-4 mr-2" />}
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>

        <button
          onClick={toggleMute}
          className={`w-full flex items-center justify-center px-4 py-2 rounded-lg ${
            isMuted
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          {isMuted ? 'Unmute Call' : 'Mute Call'}
        </button>

        <button
          onClick={reportIssue}
          className="w-full flex items-center justify-center px-4 py-2 bg-red-50 text-red-700 rounded-lg"
        >
          <AlertTriangle className="w-4 h-4 mr-2" />
          Report Issue
        </button>
      </div>
    </div>
  );
}