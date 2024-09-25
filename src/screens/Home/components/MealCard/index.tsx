import { TouchableOpacityProps } from "react-native";
import { Container, DietIndicator, MealDate, MealName, Separator, MealCardVariantStyleProps } from "./styles";

type MealCardProps = TouchableOpacityProps &{
  mealName: string;
  createdAt: string;
  dietIndicator: MealCardVariantStyleProps;
}

export function MealCard({
  mealName,
  dietIndicator,
  createdAt,
  ...rest
}: MealCardProps) {
  return(
    <Container {...rest}>
      <MealDate>{createdAt}</MealDate>

      <Separator />

      <MealName>
        {mealName}
      </MealName>

      <DietIndicator 
        variant={dietIndicator}
      />
    </Container>
  )
}