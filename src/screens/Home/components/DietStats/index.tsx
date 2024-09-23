import { TouchableOpacityProps } from "react-native";

import { Container, IconLinkIndicator, InfoText, Percent } from "./styles";

type DietStatsProps = TouchableOpacityProps &{
  percent: number
}

export function DietStats({ percent, ...rest }: DietStatsProps) {
  return(
    <Container
      variant={percent > 69.99 ? 'PRIMARY' : 'SECONDARY'}
      {...rest}
    >
      <IconLinkIndicator variant={percent > 69.99 ? 'PRIMARY' : 'SECONDARY'} />

      <Percent>
        {percent}%
      </Percent>
      <InfoText>das refeições dentro da dieta</InfoText>
    </Container>
  )
}