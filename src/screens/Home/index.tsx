import { ScrollView, View } from "react-native";

import { DietStats } from "./components/DietStats";
import { Button } from "@components/Button";
import { MealCard } from "./components/MealCard";

import logoImg from "@assets/logo.png"
import userImg from "@assets/user-photo.png"

import { Container, DailyList, DailyListTitle, Header, Logo, MealsTitle, UserInfo } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";

export function Home() {
  const navigation = useNavigation()

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

      <View style={{marginBottom: 38, gap: 4}}>
        <MealsTitle>Refeições</MealsTitle>
        
        <Button 
          title="Nova refeição"
          onPress={() => navigation.navigate('newMeal')}
        >
          <Plus color="#FFFFFF" size={18} />
        </Button>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <DailyList>
          <DailyListTitle>22.09.24</DailyListTitle>

          <MealCard 
            mealName="X-Burguer"
            createdAt="20:00"
            dietIndicator="OFF_DIET"
            onPress={() => navigation.navigate('meal')}
          />
          <MealCard 
            mealName="Wheyzao brabo"
            createdAt="16:00"
            dietIndicator="ON_DIET"
          />
          <MealCard 
            mealName="Filezin ne pae"
            createdAt="12:00"
            dietIndicator="ON_DIET"
          />
          <MealCard 
            mealName="pao com bosta"
            createdAt="07:00"
            dietIndicator="ON_DIET"
          />
        </DailyList>

        <DailyList>
          <DailyListTitle>21.09.24</DailyListTitle>

          <MealCard 
            mealName="X-Burguer"
            createdAt="20:00"
            dietIndicator="OFF_DIET"
          />
          <MealCard 
            mealName="Wheyzao brabo"
            createdAt="16:00"
            dietIndicator="ON_DIET"
          />
          <MealCard 
            mealName="Filezin ne pae"
            createdAt="12:00"
            dietIndicator="ON_DIET"
          />
          <MealCard 
            mealName="pao com bosta"
            createdAt="07:00"
            dietIndicator="ON_DIET"
          />
        </DailyList>
      </ScrollView>
    </Container>
  )
}