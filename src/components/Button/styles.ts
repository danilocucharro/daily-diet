import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonVariantStyleProps = 'PRIMARY' | 'SECONDARY'

type ButtonStyleProps = {
  variant: ButtonVariantStyleProps;
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  flex-direction: row;
  width: 100%;

  padding: 16px 24px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, variant }) => 
  variant === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.GRAY_100};

  border: ${({ theme, variant}) => 
  variant === 'SECONDARY' && `1px solid ${theme.COLORS.GRAY_700}`};
  border-radius: 6px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.Text<ButtonStyleProps>`
  text-align: center;

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
  color: ${({ theme, variant }) => 
  variant === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
`;