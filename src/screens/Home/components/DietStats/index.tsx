import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { getMeals } from "@storage/meal/getMeals";

import { Container, IconLinkIndicator, InfoText, Percent } from "./styles";

type DietStatsProps = TouchableOpacityProps

export function DietStats({ ...rest }: DietStatsProps) {
  const [percent, setPercent] = useState<string>()
  const navigation = useNavigation()

  function calcPercent(a: number, b: number) {
    const mult = 100 * b
    const divise = mult / a
    const result = divise.toFixed(2)

    setPercent(result)
  }

  async function gettingDietPercentageStats() {
    const mealsData = await getMeals()
    const totalMeals = mealsData.length
    const totalOnDietMeals = mealsData.filter(meal => meal.dietStatus === 'ON_DIET').length

    calcPercent(totalMeals, totalOnDietMeals)
  }

  function handleNavigateStatsScreen() {
    navigation.navigate('statistics', {
      dietPercent: percent === undefined ? "0" : percent
    })
  }

  useEffect(() => {
    gettingDietPercentageStats()
  })

  return(
    <Container
      variant={Number(percent) > 69.99 ? 'PRIMARY' : 'SECONDARY'}
      onPress={handleNavigateStatsScreen}
      {...rest}
    >
      <IconLinkIndicator variant={Number(percent) > 69.99 ? 'PRIMARY' : 'SECONDARY'} />

      <Percent>
        {percent}%
      </Percent>
      <InfoText>das refeições dentro da dieta</InfoText>
    </Container>
  )
}