import { SectionList, View, Text } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";

import { DietStats } from "./components/DietStats";
import { Button } from "@components/Button";
import { MealCard } from "./components/MealCard";

import logoImg from "@assets/logo.png"
import userImg from "@assets/user-photo.png"

import { Container, DailyListTitle, Header, Logo, MealsTitle, UserInfo } from "./styles";

import { Plus } from "phosphor-react-native";

import { getMeals } from "@storage/meal/getMeals";
import { Loading } from "@components/Loading";
import { MealSectionStorageDTO } from "@storage/meal/MealSectionStorageDTO";
import { DateType } from "react-native-ui-datepicker";

export function Home() {
  const [meals, setMeals] = useState<MealSectionStorageDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const navigation = useNavigation()

  async function fetchMeals() {
    try {
      setIsLoading(true)

      const mealsData = await getMeals()

      setMeals(mealsData)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  function handleNavigateMealInfo(
    mealName: string, 
    mealDescription: string, 
    dietStatus: 'ON_DIET' | 'OFF_DIET',
    createdAt: DateType
  ) {
    navigation.navigate("meal", {
      mealName: mealName,
      mealDescription: mealDescription,
      dietStatus: dietStatus,
      createdAt: createdAt
    })
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
  }, []))

  return(
    <Container>
      <Header>
        <Logo source={logoImg} />

        <UserInfo source={userImg}/>
      </Header>
      
      <DietStats />

      <View style={{gap: 4}}>
        <MealsTitle>Refeições</MealsTitle>
        
        <Button 
          title="Nova refeição"
          onPress={() => navigation.navigate('newMeal')}
        >
          <Plus color="#FFFFFF" size={18} />
        </Button>
      </View>
        
      {isLoading ? <Loading/> : (
        meals.length > 0 ? (
          <SectionList 
            sections={meals}
            keyExtractor={(item, index) => item.description + index}
            renderItem={({ item }) => (
              <MealCard 
                mealName={item.name}
                dietIndicator={item.dietStatus}
                createdAt={item.hour}
                onPress={() => handleNavigateMealInfo(
                  item.name,
                  item.description,
                  item.dietStatus,
                  item.createdAt
                )}
              />
            )}
            renderSectionHeader={({section: {date}}) => (
              <DailyListTitle>{date?.toString()}</DailyListTitle>
            )}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={{flex: 1, justifyContent: "center"}}>
            <Text
              style={{
                color: "#000000",
                textAlign: "center"
              }}
            >
              Você ainda não tem refeições cadastradas.
            </Text>
          </View>
        )
      )}
    </Container>
    )
}