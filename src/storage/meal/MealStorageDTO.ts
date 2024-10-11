import { DateType } from "react-native-ui-datepicker";

export type MealStorageDTO = { 
  name: string;
  description: string;
  dietStatus: 'ON_DIET' | 'OFF_DIET';
  createdAt: DateType
}