import { ReactElement } from "react";
import { ButtonVariantStyleProps, Container, Content, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps &{
  title: string;
  variant?: ButtonVariantStyleProps;
  children?: ReactElement
}

export function Button({ title, variant = 'PRIMARY', children, ...rest }: ButtonProps) {
  return(
    <Container
      variant={variant}
      {...rest}
    >
      <Content>
        {children}
        <Title variant={variant}>{title}</Title>
      </Content>
    </Container>
  )
}