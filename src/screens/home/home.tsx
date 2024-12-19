import { useThemeStyled } from "@/hooks/useThemed";
import { Button, ButtonText, Container, Title } from "./style";

export const HomeScreen = () => {
  const { toggleTheme } = useThemeStyled();

  return (
    <Container>
      <Title>Olá, Tema Global!</Title>
      <Button onPress={() => toggleTheme()}>
        <ButtonText>Trocar Tema</ButtonText>
      </Button>
    </Container>
  );
};
