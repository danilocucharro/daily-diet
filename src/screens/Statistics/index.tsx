import { TouchableOpacity, View } from "react-native"
import { Fragment, useEffect, useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native";

import { getMeals } from "@storage/meal/getMeals";

import { Container, Header, IconGoBack, InfoText, Percent, Sequence, SequenceOrFailContent, StatsContent, StatsTitle } from "./styles"
import { getSequence } from "@storage/sequence/getSequence";

type RouteParams = {
  dietPercent: string
}

export function Statistics() {
  const navigation = useNavigation()
  const route = useRoute()
  const [totalMeals, setTotalMeals] = useState<number>(0)
  const [totalOffDietMeals, setTotalOffDietMeals] = useState<number>(0)
  const [totalOnDietMeals, setTotalOnDietMeals] = useState<number>(0)
  const [bestOnDietMealsSequence, setBestOnDietMealsSequence] = useState<number>()

  const { dietPercent } = route.params as RouteParams

  async function fetchSequences() {
    const { bestSequence } = await getSequence()
    setBestOnDietMealsSequence(bestSequence)
  }

  async function getOnDietMeals() {
    const mealsData = await getMeals()
    //lista todas as refeicoes ON_DIET salvas no app separadas por data em um array diferente
    const mealsOnDietList = mealsData.map(meal => meal.data.filter(meal => meal.dietStatus !== 'OFF_DIET').length);
    //
    const mealsOnDiet = mealsOnDietList.reduce(
      (acc, totalOnDietMeals) => acc + totalOnDietMeals, 0)
    setTotalOnDietMeals(mealsOnDiet)
    setTotalMeals((prevState) => prevState + mealsOnDiet)
  }

  async function getOffDietMeals() {
    const mealsData = await getMeals()
    //lista todas as refeicoes OFF_DIET salvas no app separadas por data em um array diferente
    const mealsOffDietList = mealsData.map(meal => meal.data.filter(meal => meal.dietStatus !== 'ON_DIET').length);
    //
    const mealsOffDiet = mealsOffDietList.reduce(
      (acc, totalOnDietMeals) => acc + totalOnDietMeals, 0)
    setTotalOffDietMeals(mealsOffDiet)
    setTotalMeals((prevState) => prevState + mealsOffDiet)
  }

  useEffect(() => {
    getOnDietMeals()
    getOffDietMeals()
    fetchSequences()
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

          <Percent>{dietPercent === typeof NaN ? 0 : dietPercent}%</Percent>

          <InfoText>das refeições dentro da dieta</InfoText>
        </View>
      </Header>

      <Container>
        <StatsTitle>Estatísticas gerais</StatsTitle>

        <StatsContent>
          <Sequence>{bestOnDietMealsSequence}</Sequence>

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