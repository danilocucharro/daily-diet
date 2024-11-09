import { getMeals } from "./getMeals";

export async function getOffDietMeals() {
  const mealsStoraged = await getMeals()

  const offDietMealsListCount = mealsStoraged.map(section => section.data.filter(meal => meal.dietStatus !== "ON_DIET").length)

  const totalOffDietMeals = offDietMealsListCount.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0)

  return totalOffDietMeals
}