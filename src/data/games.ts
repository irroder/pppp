import { Game } from '../types';

// New games
export const newGames: Game[] = [
  {
    id: 'new1',
    title: 'Star Guardians',
    provider: 'Evoplay',
    providerId: 'evoplay',
    imageUrl: 'https://games-evo.cloudfire.app/1a4a147ac56246a38c8d801ffd75d40c.webp',
    isNew: true,
    category: 'slots'
  },
  {
    id: 'new2',
    title: 'Bandit Bust Bonus Buy',
    provider: 'Evoplay',
    providerId: 'evoplay',
    imageUrl: 'https://games-evo.cloudfire.app/cf5632e6b52c48a194f991f6722bc825.webp',
    isNew: true,
    category: 'slots'
  }
];

// Best games
export const bestGames: Game[] = [
  {
    id: 'best1',
    title: 'Joker Stoker',
    provider: 'Endorphina',
    providerId: 'endorphina',
    imageUrl: 'https://games-evo.cloudfire.app/443e5791fed34df5939af860f3fb3cfd.webp',
    isBest: true,
    category: 'slots'
  },
  {
    id: 'best2',
    title: 'Hell Hot 100',
    provider: 'Endorphina',
    providerId: 'endorphina',
    imageUrl: 'https://games-evo.cloudfire.app/f06ff4420d4f4b0fb045893ee35b1cd9.webp',
    isBest: true,
    category: 'slots'
  }
];

// Live dealer games
export const liveDealerGames: Game[] = [
  {
    id: 'live1',
    title: 'Lightning Roulette',
    provider: 'Evolution Gaming',
    providerId: 'evolution',
    imageUrl: 'https://games-evo.cloudfire.app/live-roulette.webp',
    category: 'liveDealers'
  },
  {
    id: 'live2',
    title: 'Blackjack VIP',
    provider: 'Evolution Gaming',
    providerId: 'evolution',
    imageUrl: 'https://games-evo.cloudfire.app/live-blackjack.webp',
    category: 'liveDealers'
  }
];

// All games combined for search and other purposes
export const allGames: Game[] = [
  ...newGames,
  ...bestGames,
  ...liveDealerGames
];