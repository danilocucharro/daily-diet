import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function getMeals() {
  try {
    const mealsStoraged = await AsyncStorage.getItem(MEAL_COLLECTION)
    const mealsData: MealStorageDTO[] = mealsStoraged ? JSON.parse(mealsStoraged) : []

    return mealsData
  } catch (error) {
    throw error
  }
}