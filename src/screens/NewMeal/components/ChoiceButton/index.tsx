import { ButtonProps, View } from "react-native";

import { ButtonTitle, Container, Content, DietIndicator } from "./styles";

type ChoiceButtonProps = {
  variant: 'PRIMARY' | 'SECONDARY';
  title: string;
}

export function ChoiceButton({ variant, title }: ChoiceButtonProps) {
  return(
    <Container 
      underlayColor={variant === 'PRIMARY' ? "#E5F0DB" : "#F4E6E7"}
      onPress={() => console.log("apertou")}  
    >
      <Content>
        <DietIndicator variant={variant} />
        <ButtonTitle>{title}</ButtonTitle>
      </Content>
    </Container>
  )
}