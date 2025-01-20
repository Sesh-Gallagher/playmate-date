import type { Game } from '../../types/games';

export const AVAILABLE_GAMES: Game[] = [
  {
    id: 'memory-match',
    title: 'Memory Match',
    description: 'Test your memory by matching pairs of cards',
    minPlayers: 2,
    maxPlayers: 4,
    ageRange: [4, 12],
    thumbnail: 'https://images.unsplash.com/photo-1612078894399-f8b1649d8c5b?w=400&auto=format&fit=crop&q=60',
  },
  {
    id: 'word-builder',
    title: 'Word Builder',
    description: 'Build words together and learn new vocabulary',
    minPlayers: 2,
    maxPlayers: 4,
    ageRange: [6, 12],
    thumbnail: 'https://images.unsplash.com/photo-1591017403286-fd8493524e1e?w=400&auto=format&fit=crop&q=60',
  },
  {
    id: 'math-race',
    title: 'Math Race',
    description: 'Race to solve math problems together',
    minPlayers: 2,
    maxPlayers: 4,
    ageRange: [7, 12],
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&auto=format&fit=crop&q=60',
  },
];