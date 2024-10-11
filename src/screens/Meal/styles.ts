import styled from "styled-components/native";

import { TouchableOpacityProps } from "react-native";

import { ArrowLeft } from "phosphor-react-native";

type MealVariantStyleProps = 'PRIMARY' | 'SECONDARY'

type MealStyleProps = {
  variant: MealVariantStyleProps
}

export const Header = styled.View<MealStyleProps>`
  flex-direction: row;
  width: 100%;
  height: 130px;

  padding: 24px 24px 36px 24px;
  align-items: flex-end;

  background-color: ${({ theme, variant }) =>
  variant === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
`;

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const IconGoBack = styled(ArrowLeft).attrs<TouchableOpacityProps>(({ theme }) => ({
  color: theme.COLORS.GRAY_600,
  size: 24,
}))`
  z-index: 1;
  margin-right: auto;
`;

export const Container = styled.View`
  flex: 1;

  margin-top: -20px;
  padding: 36px 24px 24px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const InfoMealContent = styled.View`
  gap: 24px;
`;

export const MealName = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const MealDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const MealDate = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const ButtonContainer = styled.View`
  gap: 8px;
  margin-top: auto;
`;