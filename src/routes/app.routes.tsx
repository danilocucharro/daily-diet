import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import { EditMeal } from "@screens/EditMeal";
import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
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
      />

      <Screen 
        name="newMeal"
        component={NewMeal}
      />

      <Screen 
        name="mealFeedback"
        component={MealFeedback}
      />

      <Screen 
        name="meal"
        component={Meal}
      />
    </Navigator>
  )
}