export interface Game {
  id: string;
  title: string;
  provider: string;
  providerId?: string;
  imageUrl: string;
  isNew?: boolean;
  isBest?: boolean;
  category: 'slots' | 'liveDealers';
}

export interface Provider {
  id: string;
  name: string;
  description?: string;
}

export interface Banner {
  id: number;
  imageUrl: string;
  link: string;
}

// Add more interfaces as needed