import styled from "styled-components/native";

type DietStatusCardVariantStyleProps = 'PRIMARY' | 'SECONDARY'

type DietStatusCardStyleProps = {
  variant: DietStatusCardVariantStyleProps
}

export const Container = styled.View`
  flex-direction: row;
  max-width: 144px;

  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 999px;
`;

export const DietStatus = styled.View<DietStatusCardStyleProps>`
  width: 8px;
  height: 8px;

  border-radius: 999px;
  background-color: ${({ theme, variant }) => 
  variant === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
`;

export const DietText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;