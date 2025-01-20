import React from 'react';
import { useActivityData } from '../../../hooks/useActivityData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function ActivityChart() {
  const { data, isLoading } = useActivityData();

  if (isLoading) {
    return <div>Loading chart...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Activity Overview</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="profiles" stroke="#8B5CF6" name="New Profiles" />
            <Line type="monotone" dataKey="playdates" stroke="#10B981" name="Playdates" />
            <Line type="monotone" dataKey="messages" stroke="#3B82F6" name="Messages" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}