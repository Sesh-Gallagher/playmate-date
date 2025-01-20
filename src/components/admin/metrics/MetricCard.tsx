import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend: number;
  trendColor?: 'green' | 'red';
}

export function MetricCard({ title, value, icon: Icon, trend, trendColor = 'green' }: MetricCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icon className="w-6 h-6 text-purple-500 mr-3" />
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
      </div>
      <p className="mt-4 text-3xl font-semibold">{value}</p>
      <div className={`mt-2 flex items-center text-sm ${
        trendColor === 'green' ? 'text-green-600' : 'text-red-600'
      }`}>
        <span>{trend}% from last month</span>
      </div>
    </div>
  );
}