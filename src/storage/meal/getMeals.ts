import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealSectionStorageDTO } from "./MealSectionStorageDTO";

export async function getMeals() {
  try {
    const mealsStoraged = await AsyncStorage.getItem(MEAL_COLLECTION)
    const mealsData: MealSectionStorageDTO[] = mealsStoraged ? JSON.parse(mealsStoraged) : []

    return mealsData
  } catch (error) {
    throw error
  }
}