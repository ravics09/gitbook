import { DefaultTheme } from "react-native-paper";

export const darkTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#1A1A1A',
      accent: '#FAFAFA',
    },
  };

export const lightTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FAFAFA',
      accent: '#1A1A1A',
    },
  };