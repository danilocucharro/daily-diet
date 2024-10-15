
import { TouchableOpacity, View } from "react-native"
import { Fragment, useEffect, useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native";

import { getMeals } from "@storage/meal/getMeals";

import { Container, Header, IconGoBack, InfoText, Percent, Sequence, SequenceOrFailContent, StatsContent, StatsTitle } from "./styles"

type RouteParams = {
  dietPercent: string
}

export function Statistics() {
  const navigation = useNavigation()
  const route = useRoute()
  const [totalMeals, setTotalMeals] = useState<number>()
  const [totalOffDietMeals, setTotalOffDietMeals] = useState<number>()
  const [totalOnDietMeals, setTotalOnDietMeals] = useState<number>()

  const { dietPercent } = route.params as RouteParams

  async function registredMeals() {
    const mealsData = await getMeals()

    const mealsStoraged = mealsData.length
    const offDietMeals = mealsData.filter(meal => meal.dietStatus === 'OFF_DIET').length
    const onDietMeals = mealsData.filter(meal => meal.dietStatus === 'ON_DIET').length
    
    setTotalMeals(mealsStoraged)
    setTotalOffDietMeals(offDietMeals)
    setTotalOnDietMeals(onDietMeals)
  }

  useEffect(() => {
    registredMeals()
  }, [])

  return(
    <Fragment>
      <Header variant={Number(dietPercent) > 69.99 ? 'PRIMARY' : 'SECONDARY'}>
        <View>
          <TouchableOpacity 
            onPress={() => navigation.navigate('home')}
            style={{ height: 24, width: 24 }}
          >
            <IconGoBack variant={Number(dietPercent) > 69.99 ? 'PRIMARY' : 'SECONDARY'} />
          </TouchableOpacity>

          <Percent>{dietPercent}%</Percent>

          <InfoText>das refeições dentro da dieta</InfoText>
        </View>
      </Header>

      <Container>
        <StatsTitle>Estatísticas gerais</StatsTitle>

        <StatsContent>
          <Sequence>22</Sequence>

          <InfoText>melhor sequência de pratos dentro da dieta</InfoText>
        </StatsContent>

        <StatsContent>
          <Sequence>{totalMeals}</Sequence>

          <InfoText>refeições registradas</InfoText>
        </StatsContent>

        <View style={{ flexDirection: "row", marginTop: 10, gap: 10 }}>
          <SequenceOrFailContent variant="PRIMARY">
            <Sequence>{totalOnDietMeals}</Sequence>

            <InfoText>refeições dentro da dieta</InfoText>
          </SequenceOrFailContent>

          <SequenceOrFailContent variant="SECONDARY">
            <Sequence>{totalOffDietMeals}</Sequence>

            <InfoText>refeições fora da dieta</InfoText>
          </SequenceOrFailContent>
        </View>
      </Container>
    </Fragment>
  )
}