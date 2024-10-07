export type MealStorageDTO = { 
  name: string;
  description: string;
  dietStatus: 'ON_DIET' | 'OFF_DIET';
  createdAt: string;
}