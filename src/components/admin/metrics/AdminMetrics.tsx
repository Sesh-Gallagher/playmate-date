import React from 'react';
import { Users, Calendar, AlertTriangle, Shield } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { ActivityChart } from './ActivityChart';
import { useAdminMetrics } from '../../../hooks/useAdminMetrics';

export function AdminMetrics() {
  const { metrics, isLoading } = useAdminMetrics();

  if (isLoading) {
    return <div>Loading metrics...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Active Profiles"
          value={metrics.activeProfiles}
          icon={Users}
          trend={metrics.profileTrend}
        />
        <MetricCard
          title="Pending Verifications"
          value={metrics.pendingVerifications}
          icon={Shield}
          trend={metrics.verificationTrend}
        />
        <MetricCard
          title="Recent Playdates"
          value={metrics.recentPlaydates}
          icon={Calendar}
          trend={metrics.playdateTrend}
        />
        <MetricCard
          title="Flagged Activities"
          value={metrics.flaggedActivities}
          icon={AlertTriangle}
          trend={metrics.flaggedTrend}
          trendColor="red"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityChart />
      </div>
    </div>
  );
}