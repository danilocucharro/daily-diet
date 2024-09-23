import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

type StatisticsVariantStyleProps = 'PRIMARY' | 'SECONDARY'

type StatisticsStyleProps = {
  variant: StatisticsVariantStyleProps
}

export const Header = styled.View<StatisticsStyleProps>`
  width: 100%;
  height: 200px;

  padding: 24px;
  justify-content: center;

  background-color: ${({ theme, variant }) => 
  variant === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
`;

export const IconGoBack = styled(ArrowLeft).attrs<StatisticsStyleProps>(({ theme, variant }) => ({
  color: variant === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700,
  size: 24,
}))``;

export const Percent = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_G}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  text-align: center;
`;

export const InfoText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  text-align: center;
`;

export const Container = styled.View`
  flex: 1;

  margin-top: -20px;
  padding: 24px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const StatsTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  margin-bottom: 14px;
  text-align: center;
`;

export const StatsContent = styled.View`
  width: 100%;

  gap: 8px;
  padding: 16px;
  margin-top: 10px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 8px;
`;

export const Sequence = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_M}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  text-align: center;
`;

export const SequenceOrFailContent = styled.View<StatisticsStyleProps>`
  flex: 1;

  gap: 8px;
  padding: 16px;

  border-radius: 8px;
  background-color: ${({ theme, variant }) => 
  variant === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
`;