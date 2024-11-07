import { DateType } from "react-native-ui-datepicker";
import { MealStorageDTO } from "./MealStorageDTO";

export type MealSectionStorageDTO = { 
  date: DateType;
  data: MealStorageDTO[]
}