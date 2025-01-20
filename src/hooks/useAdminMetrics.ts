import { useState, useEffect } from 'react';

interface AdminMetrics {
  activeProfiles: number;
  pendingVerifications: number;
  recentPlaydates: number;
  flaggedActivities: number;
  profileTrend: number;
  verificationTrend: number;
  playdateTrend: number;
  flaggedTrend: number;
}

export function useAdminMetrics() {
  const [metrics, setMetrics] = useState<AdminMetrics>({
    activeProfiles: 0,
    pendingVerifications: 0,
    recentPlaydates: 0,
    flaggedActivities: 0,
    profileTrend: 0,
    verificationTrend: 0,
    playdateTrend: 0,
    flaggedTrend: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data for demonstration
        setMetrics({
          activeProfiles: 1250,
          pendingVerifications: 45,
          recentPlaydates: 89,
          flaggedActivities: 12,
          profileTrend: 15,
          verificationTrend: -5,
          playdateTrend: 25,
          flaggedTrend: -10,
        });
      } catch (error) {
        console.error('Failed to fetch metrics:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  return { metrics, isLoading };
}