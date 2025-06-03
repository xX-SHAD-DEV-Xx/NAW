export type Category = 'general' | 'writer' | 'sport' | 'musician' | 'actor';

export interface Name {
  id: string;
  name: string;
  meaning: string;
  gender: 'male' | 'female';
  popularity: number;
  category: Category;
}

export interface CategoryOption {
  id: string;
  label: string;
}
