import { View } from "react-native";

import { VariantOptions, ViewProps } from "./Styled";

const variantStyles: VariantOptions = {
  default: "",
  primary: "m-4",
  secondary: "",
};

export function Container(props: ViewProps) {
  return (
    <View
      className={`${variantStyles.default} ${variantStyles[props.variant]}`}
    >
      {props.children}
    </View>
  );
}
