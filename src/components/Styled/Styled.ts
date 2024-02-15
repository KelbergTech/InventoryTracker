import type { Theme } from "@react-navigation/native";
import { Text as DefaultText, View as DefaultView } from "react-native";
import colors from "tailwindcss/colors";

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: colors.sky[300],
    background: colors.slate[800],
    card: colors.slate[700],
    text: colors.slate[200],
    border: colors.slate[900],
    notification: "rgb(255, 69, 58)",
  },
};

export const DefaultTheme: Theme = {
  dark: false,
  colors: {
    primary: "rgb(0, 122, 255)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(216, 216, 216)",
    notification: "rgb(255, 59, 48)",
  },
};

export type VariantOptions = {
  default: string;
  primary: string;
  secondary: string;
};

type CustomProps = {
  variant: keyof VariantOptions;
};

export type TextProps = CustomProps & DefaultText["props"];
export type ViewProps = CustomProps & DefaultView["props"];
