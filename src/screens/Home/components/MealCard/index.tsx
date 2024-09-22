import { Container, DietIndicator, MealDate, MealName, Separator, MealCardVariantStyleProps } from "./styles";

type MealCardProps = {
  mealName: string;
  createdAt: string;
  dietIndicator: MealCardVariantStyleProps;
}

export function MealCard({
  mealName,
  dietIndicator,
  createdAt
}: MealCardProps) {
  return(
    <Container>
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