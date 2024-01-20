import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export default () => {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={{ color: colors.text }}>Global Settings</Text>
    </View>
  );
};
