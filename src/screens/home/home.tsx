import { useThemeStyled } from "@/hooks/useThemed";
import { Button, ButtonText, Container, SubTitle, Title } from "./style";
import { RocketIcon } from "@/components/svgs/rocketIcon";
import { heightScreen } from "../../constants/DimensionScreen";
import { CardsCustom } from "@/components/cards/card";

export const HomeScreen = () => {
  const { toggleTheme } = useThemeStyled();

  const data = [
    { title: "Turma 1" },
    { title: "Turma 2" },
    { title: "Turma 3" },
    { title: "Turma 4" },
    { title: "Turma 5" },
  ];

  return (
    <Container>
      <RocketIcon />
      <Title style={{ marginTop: 35 }}>Turmas</Title>
      <SubTitle>jogue com a sua turma</SubTitle>
      <Button onPress={() => toggleTheme()}>
        <ButtonText>Criar nova turma</ButtonText>
      </Button>
      <CardsCustom
        width={"90%"}
        marginTop={25}
        marginBottom={100}
        data={data}
      ></CardsCustom>
    </Container>
  );
};
