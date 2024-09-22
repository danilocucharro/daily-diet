import { ButtonVariantStyleProps, Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps &{
  title: string;
  variant?: ButtonVariantStyleProps
}

export function Button({ title, variant = 'PRIMARY' }: ButtonProps) {
  return(
    <Container
      variant={variant}
    >
      <Title variant={variant}>{title}</Title>
    </Container>
  )
}