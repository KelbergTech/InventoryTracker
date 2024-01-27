import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";

export default () => {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={{ color: colors.text }}>Global Settings</Text>
    </View>
  );
};
