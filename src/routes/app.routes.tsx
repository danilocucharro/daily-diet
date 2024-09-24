import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { MealFeedback } from "@screens/MealFeedback";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes () {
  return(
    <Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}
    >
      <Screen 
        name="home"
        component={Home}
      />

      <Screen 
        name="statistics"
        component={Statistics}
        options={{
          headerShown: false
        }}
      />

      <Screen 
        name="newMeal"
        component={NewMeal}
      />

      <Screen 
        name="mealFeedback"
        component={MealFeedback}
      />
    </Navigator>
  )
}