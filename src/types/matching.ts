export interface Match {
  id: string;
  profiles: [string, string]; // Child Profile IDs
  commonInterests: string[];
  compatibilityScore: number;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: Date;
}

export interface PlaydateSchedule {
  id: string;
  matchId: string;
  date: Date;
  duration: number;
  type: 'virtual' | 'in-person';
  activity: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  feedback?: {
    rating: number;
    comments: string;
    reportedIssues: string[];
  };
}