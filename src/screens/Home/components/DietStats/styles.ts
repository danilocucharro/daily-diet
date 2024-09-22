import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.TouchableOpacity`
  width: 100%;

  margin-top: 36px;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_100};
  border-radius: 8px;
`;

export const IconLinkIndicator = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 24,
}))`
  margin-left: auto;
`;

export const Percent = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_G}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  align-self: center;
`;

export const InfoText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  align-self: center;
`;