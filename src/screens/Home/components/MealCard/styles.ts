import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type MealCardVariantStyleProps = 'ON_DIET' | 'OFF_DIET'

type MealCardStyleProps = {
  variant: MealCardVariantStyleProps
}

export const Container = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;

  min-height: 50px;
  max-height: 50px;
  align-items: center;
  gap: 12px;

  padding: 14px 16px 14px 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
`

export const MealDate = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Separator = styled.View`
  width: 1px;
  height: 14px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const MealName = styled.Text`
  flex: 1;

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const DietIndicator = styled.View<MealCardStyleProps>`
  height: 14px;
  width: 14px;

  background-color: ${({ theme, variant }) => 
  variant === 'ON_DIET' ? theme.COLORS.GREEN_200 : theme.COLORS.RED_200};
  border-radius: 999px;
`;