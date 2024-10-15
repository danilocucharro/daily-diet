import styled from "styled-components/native";

import { TouchableHighlight } from "react-native";
 
type ChoiceButtonVariantStyleProps = 'PRIMARY' | 'SECONDARY'

type ChoiceButtonStyleProps = {
  variant: ChoiceButtonVariantStyleProps;
}

export const Container = styled(TouchableHighlight)`
  flex: 1;

  padding: 16px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;
`;

export const Content = styled.View`
  flex-direction: row;

  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const DietIndicator = styled.View<ChoiceButtonStyleProps>`
  width: 8px;
  height: 8px;

  border-radius: 999px;
  background-color: ${({ theme, variant }) => 
  variant === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;