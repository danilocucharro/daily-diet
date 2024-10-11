import { FlatList, View } from "react-native";

import { DietStats } from "./components/DietStats";
import { Button } from "@components/Button";
import { MealCard } from "./components/MealCard";

import logoImg from "@assets/logo.png"
import userImg from "@assets/user-photo.png"

import { Container, DailyListTitle, Header, Logo, MealsTitle, UserInfo } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import { useCallback, useEffect, useState } from "react";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { getMeals } from "@storage/meal/getMeals";

export function Home() {
  const [meals, setMeals] = useState<MealStorageDTO[]>([])
  const navigation = useNavigation()

  async function fetchMeals() {
    try {
      const mealsData = await getMeals()
      setMeals(mealsData)
    } catch (error) {
      throw error
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
      
      <DietStats 
        percent={91.36}
        onPress={() => navigation.navigate('statistics')}
      />

      <View style={{marginBottom: 10, gap: 4}}>
        <MealsTitle>Refeições</MealsTitle>
        
        <Button 
          title="Nova refeição"
          onPress={() => navigation.navigate('newMeal')}
        >
          <Plus color="#FFFFFF" size={18} />
        </Button>
      </View>
        
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
        />
    </Container>
  )
}