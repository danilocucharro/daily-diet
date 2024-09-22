import { Container, IconLinkIndicator, InfoText, Percent } from "./styles";

type DietStatsProps = {
  percent: number
}

export function DietStats({ percent }: DietStatsProps) {
  return(
    <Container
      variant={percent > 69.99 ? 'PRIMARY' : 'SECONDARY'}
    >
      <IconLinkIndicator variant={percent > 69.99 ? 'PRIMARY' : 'SECONDARY'} />

      <Percent>
        {percent}%
      </Percent>
      <InfoText>das refeições dentro da dieta</InfoText>
    </Container>
  )
}