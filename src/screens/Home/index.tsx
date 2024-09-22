import { Container, DailyList, DailyListTitle, Header, Logo, MealsTitle, UserInfo } from "./styles";

import logoImg from "@assets/logo.png"
import userImg from "@assets/user-photo.png"
import { ScrollView, Text, View } from "react-native";
import { DietStats } from "./components/DietStats";
import { Button } from "@components/Button";
import theme from "src/theme";
import { MealCard } from "./components/MealCard";

export function Home() {
  return(
    <Container>
      <Header>
        <Logo source={logoImg} />

        <UserInfo source={userImg}/>
      </Header>
      
      <DietStats 
        percent={70}
      />

      <View style={{marginBottom: 38, gap: 4, height: "auto"}}>
        <MealsTitle>Refeições</MealsTitle>
        
        <Button 
          title="Nova refeição"
        />
      </View>
      
      <ScrollView>
        <DailyList>
          <DailyListTitle>22.09.24</DailyListTitle>

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