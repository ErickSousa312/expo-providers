// src/screens/Home/HomeScreen.styles.ts
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: blue;
  padding: 15px 30px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
