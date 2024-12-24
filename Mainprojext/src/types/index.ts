export interface User {
  id: string;
  name: string;
  email: string;
  role: 'parent' | 'child';
}

export interface ChildProfile {
  id: string;
  parentId: string;
  name: string;
  age: number;
  interests: string[];
  avatar: string;
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Interest {
  id: string;
  name: string;
  category: string;
  icon: string;
}