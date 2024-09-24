import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  padding: 32px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;