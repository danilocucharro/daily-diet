import { Container, Header, Logo, UserInfo } from "./styles";

import logoImg from "@assets/logo.png"
import userImg from "@assets/user-photo.png"
import { Text, View } from "react-native";
import { DietStats } from "./components/DietStats";
import { Button } from "@components/Button";
import theme from "src/theme";

export function Home() {
  return(
    <Container>
      <Header>
        <Logo source={logoImg} />

        <UserInfo source={userImg}/>
      </Header>
      
      <DietStats />

      <View style={{marginTop: 36, gap: 4}}>
        <Text style={{
          color: theme.COLORS.GRAY_700, 
          fontSize: theme.FONT_SIZE.BODY_M,
          fontFamily: theme.FONT_FAMILY.REGULAR
        }}>
          Refeições
        </Text>
        <Button 
          title="Nova refeição"
        />
      </View>
    </Container>
  )
}