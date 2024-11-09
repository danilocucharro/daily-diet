import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { getMeals } from "@storage/meal/getMeals";

import { Container, IconLinkIndicator, InfoText, Percent } from "./styles";
import { getOnDietMeals } from "@storage/meal/getOnDietMeals";
import { getOffDietMeals } from "@storage/meal/getOffDietMeals";

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
    const totalOnDietMeals = await getOnDietMeals()
    const totalOffDietMeals = await getOffDietMeals() 
    const totalMeals = totalOnDietMeals + totalOffDietMeals

    calcPercent(totalMeals, totalOnDietMeals)
  }

  function handleNavigateStatsScreen() {
    navigation.navigate('statistics', {
      dietPercent: percent as string
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