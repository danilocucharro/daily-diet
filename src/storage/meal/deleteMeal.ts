import AsyncStorage from "@react-native-async-storage/async-storage"
import { getMeals } from "./getMeals"
import { MEAL_COLLECTION } from "@storage/storageConfig"

export async function deleteMeal(mealDescription: string) {
  try {
    const mealsStoraged = await getMeals()
    const newMealsList = mealsStoraged.filter(meal => meal.description != mealDescription)

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newMealsList))
  } catch (error) {
    throw error
  }
}