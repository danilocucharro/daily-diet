import { TouchableHighlightProps } from "react-native";
import { ButtonTitle, Container, Content, DietIndicator } from "./styles";

type ChoiceButtonProps = TouchableHighlightProps & {
  variant: 'PRIMARY' | 'SECONDARY';
  title: string;
}

export function ChoiceButton({ variant, title, ...rest }: ChoiceButtonProps) {
  return(
    <Container 
      underlayColor={variant === 'PRIMARY' ? "#E5F0DB" : "#F4E6E7"}
      {...rest}
    >
      <Content>
        <DietIndicator variant={variant} />
        <ButtonTitle>{title}</ButtonTitle>
      </Content>
    </Container>
  )
}