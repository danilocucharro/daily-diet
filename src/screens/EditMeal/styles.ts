import styled from "styled-components/native";

import { TouchableOpacityProps } from "react-native";

import { ArrowLeft } from "phosphor-react-native";
import DateTimePicker from "react-native-ui-datepicker";

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  height: 130px;

  padding: 24px 24px 36px 24px;
  align-items: flex-end;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
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

export const Form = styled.View`
  flex: 1;
  width: 100%;
  gap: 24px;
`;

export const InputContainer = styled.View`
  gap: 4px;
  width: 100%;
`;

export const TimeInputContainer = styled.View`
  gap: 4px;
  flex: 1;
`;

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Input = styled.TextInput`
  width: 100%;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  padding: 14px;
  align-items: flex-start;

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const TimeInput = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  padding: 14px;
`;

export const DateTimeInput = styled(DateTimePicker).attrs(({ theme }) => ({
  selectedItemColor: theme.COLORS.GRAY_700,
}))`
`;

export const SaveDateTimeButton = styled.TouchableOpacity`
  width: 58px;
  padding: 8px;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: 24px;

  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const TitleButton = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;