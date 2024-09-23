
import { TouchableOpacity, View } from "react-native"
import { Fragment } from "react"

import { Container, Header, IconGoBack, InfoText, Percent, Sequence, SequenceOrFailContent, StatsContent, StatsTitle } from "./styles"
import { useNavigation } from "@react-navigation/native";

type StatisticsProps = {
  percent: number;
  mealsOnDiet: number;
  mealsOffDiet: number;
  mealsSequenceOnDiet: number;
  totalMeals: number;
}

export function Statistics() {
  const navigation = useNavigation()

  return(
    <Fragment>
      <Header variant={91.36 > 69.99 ? 'PRIMARY' : 'SECONDARY'}>
        <View>
          <TouchableOpacity 
            onPress={() => navigation.navigate('home')}
            style={{ height: 24, width: 24 }}
          >
            <IconGoBack variant={91.36 > 69.99 ? 'PRIMARY' : 'SECONDARY'} />
          </TouchableOpacity>

          <Percent>{91.36}%</Percent>

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
          <Sequence>109</Sequence>

          <InfoText>refeições registradas</InfoText>
        </StatsContent>

        <View style={{ flexDirection: "row", marginTop: 10, gap: 10 }}>
          <SequenceOrFailContent variant="PRIMARY">
            <Sequence>99</Sequence>

            <InfoText>refeições dentro da dieta</InfoText>
          </SequenceOrFailContent>

          <SequenceOrFailContent variant="SECONDARY">
            <Sequence>10</Sequence>

            <InfoText>refeições fora da dieta</InfoText>
          </SequenceOrFailContent>
        </View>
      </Container>
    </Fragment>
  )
}