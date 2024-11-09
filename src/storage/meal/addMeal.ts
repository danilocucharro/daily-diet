import { getMeals } from "./getMeals";
import { MealStorageDTO } from "./MealStorageDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealSectionStorageDTO } from "./MealSectionStorageDTO";

export async function addMeal(meal: MealStorageDTO) {
  try {
    const mealsData = await getMeals()
    const mealsList = mealsData.find((item) => item.date === meal.createdAt)
    
    // caso nao exista uma refeicao criada nesse dia -> cadastrar a refeicao em uma nova secao desse dia
    if(!mealsList) {
      const newMealSection: MealSectionStorageDTO = {
        date: meal.createdAt,
        data: [
          {
            name: meal.name,
            description: meal.description,
            dietStatus: meal.dietStatus,
            createdAt: meal.createdAt,
            hour: meal.hour
          }
        ]
      }

      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify([
        newMealSection,
        ...mealsData
      ]))
    }
    else {
      const newMealsData = mealsData.filter((item) => item.date !== meal.createdAt)

      const newMeal = {
        name: meal.name,
        description: meal.description,
        dietStatus: meal.dietStatus,
        createdAt: meal.createdAt,
        hour: meal.hour
      }

      mealsList.data.push(newMeal)
      
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify([
        mealsList,
        ...newMealsData
      ]))
    }

  } catch (error) {
    throw error
  }
}