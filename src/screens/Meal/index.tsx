import { Fragment } from "react";
import { useNavigation } from "@react-navigation/native";

import { Header, Container, IconGoBack, Title, MealName, InfoMealContent, MealDescription, MealDate, ButtonContainer } from "./styles";
import { View } from "react-native";
import { DietStatusCard } from "./components/DietStatusCard";
import { Button } from "@components/Button";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import theme from "src/theme";

export function Meal() {
  const navigation = useNavigation()
  return(
    <Fragment>
      <Header variant="PRIMARY">
        <IconGoBack onPress={() => navigation.navigate('home')}/>

        <Title>Refeição</Title>
      </Header>

      <Container>
        <InfoMealContent>
          <View style={{ gap: 8 }}>
            <MealName>Sanduíche</MealName>

            <MealDescription>Sanduíche de pão integral com atum e salada de alface e tomate</MealDescription>
          </View>

          <View style={{ gap: 8 }}>
            <MealDate>Data e hora</MealDate>

            <MealDescription>12/08/2022 às 16:00</MealDescription>
          </View>

          <DietStatusCard variant="PRIMARY" title="dentro da dieta" />
        </InfoMealContent>

        <ButtonContainer>
          <Button 
            variant="PRIMARY"
            title="Editar refeição"
            onPress={() => navigation.navigate('editMeal')}
          >
            <PencilSimpleLine color={theme.COLORS.WHITE} size={18} />
          </Button>

          <Button 
            variant="SECONDARY"
            title="Excluir refeição"
          >
            <Trash color={theme.COLORS.GRAY_700} size={18} />
          </Button>
        </ButtonContainer>
      </Container>
    </Fragment>
  )
}