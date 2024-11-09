import AsyncStorage from "@react-native-async-storage/async-storage"

import { DateType } from "react-native-ui-datepicker"

import { getMeals } from "./getMeals"
import { MEAL_COLLECTION } from "@storage/storageConfig"

export async function deleteMeal(mealDate: DateType, mealDescription: string) {
  try {
    const mealsStoraged = await getMeals()
    
    const oldSectionList = mealsStoraged.filter(section => section.date === mealDate)

    if(oldSectionList[0].data.length > 1) {
      const newMealList = oldSectionList[0].data.filter(meal => meal.description !== mealDescription)
    
      const newSectionsDataList = mealsStoraged.filter(section => section.date !== mealDate)
      const newMealSection = {
        date: mealDate,
        data: newMealList
      }

      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify([newMealSection, ...newSectionsDataList]))
    } 
    else {
      const newSectionsDataList = mealsStoraged.filter(section => section.date !== mealDate)
      
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newSectionsDataList))
    }
  } catch (error) {
    throw error
  }
}