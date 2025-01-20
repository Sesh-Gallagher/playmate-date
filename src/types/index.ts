export interface Profile {
  id: string;
  name: string;
  age: number;
  interests: string[];
  avatar: string;
  location: string;
}

export interface Parent {
  id: string;
  name: string;
  email: string;
  children: Profile[];
  verified: boolean;
}

export interface Match {
  id: string;
  profiles: [Profile, Profile];
  commonInterests: string[];
  status: 'pending' | 'accepted' | 'declined';
  createdAt: Date;
}