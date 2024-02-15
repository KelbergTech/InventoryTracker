import { useTheme } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { Text, View } from "react-native";

import { CustomText } from "@/components/Styled/Text";
import { Container } from "@/components/Styled/View";

export default () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { colors } = useTheme();
  useEffect(() => {
    console.log(colorScheme);
  });
  return (
    <Container variant="primary">
      <CustomText variant="primary" className="dark:text-red-200">
        Global Settings
      </CustomText>
      <CustomText variant="primary">Inventory name:</CustomText>
      <CustomText variant="primary">Data fields for items:</CustomText>
    </Container>
  );
};
