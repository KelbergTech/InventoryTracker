import { Text } from "react-native";

import { VariantOptions, TextProps } from "./Styled";

const variantStyles: VariantOptions = {
  default: "",
  primary: "dark:text-red-200 text-slate-200",
  secondary: "text-blue-800",
};

export function CustomText(props: TextProps) {
  return (
    <Text
      {...props}
      className={`${variantStyles.default} ${variantStyles[props.variant]}`}
    >
      {props.children}
    </Text>
  );
}
