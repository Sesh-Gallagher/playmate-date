export interface Avatar {
  baseColor: string;
  accessories: string[];
  outfit: string;
  features: string[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  dateEarned: Date;
}

export interface Interest {
  id: string;
  category: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  avatar: Avatar;
  interests: Interest[];
  badges: Badge[];
  timezone: string;
  languages: string[];
  preferredActivities: string[];
  achievements: string[];
  lastActive: Date;
  photoUrl?: string;
  socialScore?: number;
  learningScore?: number;
  creativityScore?: number;
}