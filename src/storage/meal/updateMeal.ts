import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMeals } from "./getMeals";
import { MealStorageDTO } from "./MealStorageDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { DateType } from "react-native-ui-datepicker";

export async function updateMeal(mealDate: DateType, oldMealDescription: string, mealUpdated: MealStorageDTO) {
  try {
    const mealsStoraged = await getMeals()
    const newMealsStoraged = mealsStoraged.filter(section => section.date !== mealDate)
    
    const oldMealSection = mealsStoraged.filter(meal => meal.date === mealDate)
    const newMealDataList = oldMealSection[0].data

    const mealListUpdated = newMealDataList.filter(meal => meal.description !== oldMealDescription)
    mealListUpdated.push(mealUpdated)
    
    const mealSectionUpdated = {
      date: mealDate,
      data: mealListUpdated
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify([mealSectionUpdated, ...newMealsStoraged]))
  } catch (error) {
    throw error
  }
}