import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ContainerCard = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secundaryBackground};
  padding-left: 20px;
  width: 100%;
  height: 70px;
  border-radius: 10px;
  margin-top: 15px;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.buttonText};
  padding-left: 20px;
  font-size: 16px;
`;
