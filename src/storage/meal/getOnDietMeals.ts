import { getMeals } from "./getMeals";

export async function getOnDietMeals() {
  const mealsStoraged = await getMeals()

  const onDietMealsListCount = mealsStoraged.map(section => section.data.filter(meal => meal.dietStatus !== "OFF_DIET").length)

  const totalOnDietMeals = onDietMealsListCount.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0)

  return totalOnDietMeals
}