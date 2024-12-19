import { useThemeStyled } from "@/hooks/useThemed";
import { Button, ButtonText, Container, SubTitle, Title } from "./style";
import { RocketIcon } from "@/components/svgs/rocketIcon";
import { heightScreen } from "../../constants/DimensionScreen";
import { CardsCustom } from "@/components/cards/card";
import { useRouter } from "expo-router";
import useAsyncStorageClass from "@/hooks/useAsyncStorageClass";
import { useEffect } from "react";

export const HomeScreen = () => {
  const { toggleTheme } = useThemeStyled();

  const { storedValue, loadValue } = useAsyncStorageClass("turma", []);

  const route = useRouter();

  useEffect(() => {
    loadValue();
  }, [storedValue]);

  return (
    <Container>
      <RocketIcon />
      <Title style={{ marginTop: 35 }}>Turmas</Title>
      <SubTitle>jogue com a sua turma</SubTitle>
      <Button onPress={() => route.push("/class/createClass")}>
        <ButtonText>Criar nova turma</ButtonText>
      </Button>
      <CardsCustom
        width={"90%"}
        marginTop={25}
        marginBottom={100}
        data={storedValue}
      ></CardsCustom>
    </Container>
  );
};
