import { FlatList, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";

import { DietStats } from "./components/DietStats";
import { Button } from "@components/Button";
import { MealCard } from "./components/MealCard";

import logoImg from "@assets/logo.png"
import userImg from "@assets/user-photo.png"

import { Container, DailyListTitle, Header, Logo, MealsTitle, UserInfo } from "./styles";

import { Plus } from "phosphor-react-native";

import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { getMeals } from "@storage/meal/getMeals";
import { Loading } from "@components/Loading";

export function Home() {
  const [meals, setMeals] = useState<MealStorageDTO[]>([])
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

      <View style={{marginBottom: 10, gap: 4}}>
        <MealsTitle>Refeições</MealsTitle>
        
        <Button 
          title="Nova refeição"
          onPress={() => navigation.navigate('newMeal')}
        >
          <Plus color="#FFFFFF" size={18} />
        </Button>
      </View>
        
      {isLoading ? <Loading/> : (
        <>
          <DailyListTitle>22.09.24</DailyListTitle>
          <FlatList
            data={meals}
            keyExtractor={item => item.description}
            renderItem={({ item }) => (
              <MealCard 
                mealName={item.name}
                createdAt={item.createdAt}
                dietIndicator={item.dietStatus}
                onPress={() => navigation.navigate('meal', {
                  mealName: item.name,
                  mealDescription: item.description,
                  createdAt: item.createdAt,
                  dietStatus: item.dietStatus
                })}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </Container>
    )
}