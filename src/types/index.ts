export interface Name {
  id: string;
  name: string;
  meaning: string;
  gender: 'male' | 'female' | 'neutral';
  popularity: number; // 1-10
  category: Category;
}

export type Category = 'writer' | 'sport' | 'musician' | 'actor' | 'general';

export interface CategoryOption {
  id: Category;
  label: string;
}
