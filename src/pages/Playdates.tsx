import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { usePlaydates } from '../hooks/usePlaydates';

export function Playdates() {
  const { playdates, scheduledPlaydates, pastPlaydates } = usePlaydates();

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Playdates</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Upcoming Playdates</h2>
          <div className="space-y-4">
            {scheduledPlaydates.map((playdate) => (
              <div key={playdate.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">{playdate.activity}</h3>
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">
                    {playdate.type}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(playdate.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {playdate.duration} minutes
                  </div>
                  {playdate.type === 'in-person' && (
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {playdate.location}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Past Playdates</h2>
          <div className="space-y-4">
            {pastPlaydates.map((playdate) => (
              <div key={playdate.id} className="bg-white p-6 rounded-lg shadow-md opacity-75">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">{playdate.activity}</h3>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                    Completed
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(playdate.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}