export interface Game {
  id: string;
  title: string;
  description: string;
  minPlayers: number;
  maxPlayers: number;
  ageRange: [number, number];
  thumbnail: string;
}

export interface GameSession {
  id: string;
  gameId: string;
  players: string[];
  startTime: Date;
  endTime?: Date;
  scores?: Record<string, number>;
}