import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMeals } from "./getMeals";
import { MealStorageDTO } from "./MealStorageDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function updateMeal(mealDescription: string, mealUpdated: MealStorageDTO) {
  try {
    const mealsStoraged = await getMeals()
    const newMealsList = mealsStoraged.filter(meal => meal.description != mealDescription)

    AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify([...newMealsList, mealUpdated]))
  } catch (error) {
    throw error
  }
}