import { Text } from "react-native";

import { Button } from "@components/Button";

import { Container, FeedbackIllustration, FeedbackTitle, IllustrationContainer, InfoText } from "./styles";

import illustrationOnDiet from "@assets/illustration-ondiet.png"
import illustrationOffDiet from "@assets/illustration-offdiet.png"
import theme from "src/theme";
import { useNavigation } from "@react-navigation/native";

type FeedbackProps = {
  variant: 'ON_DIET' | 'OFF_DIET'
}

export function Feedback({ variant }: FeedbackProps) {
  const navigation = useNavigation()
  const { FONT_FAMILY, FONT_SIZE } = theme

  return(
    <Container>
      {variant === 'ON_DIET' ? (
        <>
        <FeedbackTitle variant={variant}>Continue assim!</FeedbackTitle>
        <InfoText>
          Você continua
          <Text style={{ fontSize: FONT_SIZE.BODY_M, fontFamily: FONT_FAMILY.BOLD }}>
            {' '}dentro da dieta.{' '}
          </Text>
          Muito bem!
        </InfoText>

        <IllustrationContainer>
          <FeedbackIllustration source={illustrationOnDiet} />

          <Button 
            title="Ir para a página inicial"
            onPress={() => navigation.navigate('home')} 
          />
        </IllustrationContainer>
        </>
      ) : (
        <>
          <FeedbackTitle variant={variant}>Que pena!</FeedbackTitle>
          <InfoText>
            Você
            <Text style={{ fontSize: FONT_SIZE.BODY_M, fontFamily: FONT_FAMILY.BOLD }}>
              {' '}saiu da dieta{' '}
            </Text>
            dessa vez, mas continue se esforçando e não desista!
          </InfoText>

          <IllustrationContainer>
            <FeedbackIllustration source={illustrationOffDiet} />

            <Button 
              title="Ir para a página inicial"
              onPress={() => navigation.navigate('home')}
            />
          </IllustrationContainer>
        </>
      )}
    </Container>
  )
}