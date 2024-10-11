import { useRoute } from "@react-navigation/native";

import { Feedback } from "./components/Feedback";

import { Container } from "./styles";

type RouteParams = { 
  mealStatus: 'ON_DIET' | 'OFF_DIET';
}

export function MealFeedback() {
  const route = useRoute()
  const { mealStatus } = route.params as RouteParams

  return(
    <Container>
      <Feedback variant={mealStatus}/>
    </Container>
  )
}