// src/screens/Home/HomeScreen.styles.ts
import { Theme } from "@/@types/themeType";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

export interface HomeScreenProps {
  toggleTheme?: () => void;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.buttonBackground};
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.buttonText};
  font-size: 16px;
`;
