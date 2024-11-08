import { Fragment, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Header, Container, IconGoBack, Title, MealName, InfoMealContent, MealDescription, MealDate, ButtonContainer } from "./styles";
import { Alert, View } from "react-native";
import { DietStatusCard } from "./components/DietStatusCard";
import { Button } from "@components/Button";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import theme from "src/theme";
import { DateType } from "react-native-ui-datepicker";
import { deleteMeal } from "@storage/meal/deleteMeal";
import dayjs from "dayjs";

type RouteParams = {
  mealName: string;
  mealDescription: string;
  createdAt: DateType;
  dietStatus: 'ON_DIET' | 'OFF_DIET'
}

export function Meal() {
  const navigation = useNavigation()
  const route = useRoute()
  const { 
    mealName, 
    mealDescription, 
    createdAt, 
    dietStatus 
  } = route.params as RouteParams

  function handleEditMeal() {
    navigation.navigate('editMeal', {
      createdAt: createdAt,
      mealName: mealName,
      mealDescription: mealDescription
    })
  }

  async function handleDeleteMeal() {
    Alert.alert("Excluir", "Deseja excluir essa refeição?", [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: async () => {
          await deleteMeal(createdAt, mealDescription)
          
          Alert.alert("Excluir", "A refeição foi removida!")
          navigation.navigate("home")
        }
      }
    ])
  }

  useEffect(() => {
    console.log(createdAt)
  }, [])

  return(
    <Fragment>
      <Header variant={dietStatus === 'ON_DIET' ? 'PRIMARY' : 'SECONDARY'}>
        <IconGoBack onPress={() => navigation.navigate('home')} />

        <Title>Refeição</Title>
      </Header>

      <Container>
        <InfoMealContent>
          <View style={{ gap: 8 }}>
            <MealName>{mealName}</MealName>

            <MealDescription>{mealDescription}</MealDescription>
          </View>

          <View style={{ gap: 8 }}>
            <MealDate>Data e hora</MealDate>

            <MealDescription>{createdAt?.toString()}</MealDescription>
          </View>

          <DietStatusCard 
            variant={dietStatus === 'ON_DIET' ? 'PRIMARY' : 'SECONDARY'} 
            title={dietStatus === 'ON_DIET' ? 'dentro da dieta' : 'fora da dieta'}
          />
        </InfoMealContent>

        <ButtonContainer>
          <Button 
            variant="PRIMARY"
            title="Editar refeição"
            onPress={handleEditMeal}
          >
            <PencilSimpleLine color={theme.COLORS.WHITE} size={18} />
          </Button>

          <Button 
            variant="SECONDARY"
            title="Excluir refeição"
            onPress={handleDeleteMeal}
          >
            <Trash color={theme.COLORS.GRAY_700} size={18} />
          </Button>
        </ButtonContainer>
      </Container>
    </Fragment>
  )
}