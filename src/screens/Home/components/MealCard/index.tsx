import { TouchableOpacityProps } from "react-native";
import { Container, DietIndicator, MealDate, MealName, Separator, MealCardVariantStyleProps } from "./styles";
import { DateType } from "react-native-ui-datepicker";

type MealCardProps = TouchableOpacityProps &{
  mealName: string;
  createdAt: DateType;
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
      <MealDate>{createdAt?.toString()}</MealDate>

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