import { Container, IconLinkIndicator, InfoText, Percent } from "./styles";

export function DietStats() {
  return(
    <Container>
      <IconLinkIndicator />

      <Percent>
        90,86%
      </Percent>
      <InfoText>das refeições dentro da dieta</InfoText>
    </Container>
  )
}