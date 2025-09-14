export interface UserData {
  name: string;
  age: number;
  profession: string;
  hobby: string;
  personality: string;
  dreamLocation: string;
}

export interface WorldStats {
  happiness: number;
  adventure: number;
  success: number;
}

export interface Quest {
  title: string;
  description: string;
}

export interface ParallelWorld {
  id: string;
  title: string;
  profession: string;
  description: string;
  icon: string;
  theme: 'tech' | 'creative' | 'adventure' | 'mystical' | 'futuristic';
  stats: WorldStats;
  quest: Quest;
}