import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  background-color: transparent;
  padding: 15px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.buttonBackground};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 43px;
  height: 43px;
  border-radius: 25px;
`;
