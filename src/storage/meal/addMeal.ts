import { getMeals } from "./getMeals";
import { MealStorageDTO } from "./MealStorageDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";

import AsyncStorage from "@react-native-async-storage/async-storage";

export async function addMeal(newMeal: MealStorageDTO) {
  try {
    const meals = await getMeals()

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify([...meals, newMeal]))
  } catch (error) {
    throw error
  }
}