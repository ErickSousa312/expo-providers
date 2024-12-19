export const lightTheme = {
  colors: {
    background: "#f8f9fa",
    text: "#212529",
    buttonBackground: "#00875F",
    buttonText: "",
  },
};

export const darkTheme = {
  colors: {
    background: "#212529",
    text: "#f8f9fa",
    buttonBackground: "#00875F",
    buttonText: "#ffffff",
  },
};

// Tipagem do tema
export type ThemeType = typeof lightTheme;
