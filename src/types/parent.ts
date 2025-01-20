export interface ParentVerification {
  id: string;
  status: 'pending' | 'verified' | 'rejected';
  documents: {
    idVerification: boolean;
    backgroundCheck: boolean;
    phoneVerification: boolean;
  };
  verifiedAt?: Date;
}

export interface ParentProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  verification: ParentVerification;
  children: string[]; // References to ChildProfile IDs
  preferences: {
    maxDistance: number;
    ageRange: [number, number];
    languages: string[];
    notifications: boolean;
    calendarSync: boolean;
  };
}