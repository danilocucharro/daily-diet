import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes () {
  return(
    <Navigator
      initialRouteName="home"
    >
      <Screen 
        name="home"
        component={Home}
        options={{headerShown: false}}
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
    </Navigator>
  )
}