import styled from "styled-components/native";

type FeedbackVariantStyleProps = 'ON_DIET' | 'OFF_DIET'

type FeedbackStyleProps = {
  variant: FeedbackVariantStyleProps;
}

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const FeedbackTitle = styled.Text<FeedbackStyleProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_M}px;
  color: ${({ theme, variant }) =>
  variant === 'ON_DIET' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700}
`;

export const InfoText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  text-align: center;
`;

export const IllustrationContainer = styled.View`
  padding: 32px;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const FeedbackIllustration = styled.Image`

`;