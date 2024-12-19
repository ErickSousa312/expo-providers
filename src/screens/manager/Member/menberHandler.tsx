import { useThemeStyled } from "@/hooks/useThemed";
import { RocketIcon } from "@/components/svgs/rocketIcon";
import { CardsCustom } from "@/components/cards/card";
import {
  Button,
  ButtonAdd,
  ButtonText,
  ButtonTime,
  Container,
  InputContainer,
  InputContainerTime,
  StyledInput,
  SubTitle,
  Title,
} from "./style";
import { ButtonBackNavigateCustom } from "@/components/buttons/backNavigate/buttonBackNavigate";
import useAsyncStorageclass from "@/hooks/useAsyncStorageClass";
import { darkTheme, lightTheme } from "@/constants/Colors";
import { useState } from "react";
import { useToast } from "@/contexts/Toast/ToastContext";
import { router, useLocalSearchParams } from "expo-router";
import { Entypo } from "@expo/vector-icons";

export const MenberHandler = () => {
  const { title } = useLocalSearchParams<{ title: string }>();
  const { isDarkMode } = useThemeStyled();
  const [inputClass, setInputClass] = useState("");
  const [timeSelected, setTimeSelected] = useState("");
  const { addToast } = useToast();
  const {
    storedValue,
    saveValue,
    removeAllValues,
    onError,
    loadValue,
    removeOneValue,
  } = useAsyncStorageclass("turma", []);

  return (
    <Container>
      <ButtonBackNavigateCustom />
      <RocketIcon />
      <Title style={{ marginTop: 15 }}>{title}</Title>
      <SubTitle>adicione a galera e separe os times</SubTitle>
      <InputContainer>
        <StyledInput
          onChangeText={(text: string) => setInputClass(text)}
          value={inputClass}
          placeholderTextColor={
            isDarkMode ? darkTheme.colors.text : lightTheme.colors.text
          }
          placeholder="Nome do participante"
        ></StyledInput>
        <ButtonAdd>
          <Entypo
            style={{ marginLeft: 1 }}
            name="plus"
            size={35}
            color="green"
          />
        </ButtonAdd>
      </InputContainer>
      <InputContainerTime>
        <ButtonTime border={true}>
          <Title bold={true} fontSize={"15px"}>
            Time A
          </Title>
        </ButtonTime>
        <ButtonTime border={false}>
          <Title bold={true} fontSize={"15px"}>
            Time B
          </Title>
        </ButtonTime>
      </InputContainerTime>
      <Button
        color={"#da2834"}
        onPress={() => {
          removeOneValue(title);
          router.push("/");
        }}
      >
        <ButtonText>Remover a turma</ButtonText>
      </Button>
    </Container>
  );
};
