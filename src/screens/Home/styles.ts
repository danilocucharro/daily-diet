import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 24px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const UserInfo = styled.Image`
  width: 40px;
  height: 40px;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 999px;
`;

export const MealsTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const DailyList = styled.View`
  width: 100%;

  margin-top: 38px;
  gap: 8px;
`;

export const DailyListTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;