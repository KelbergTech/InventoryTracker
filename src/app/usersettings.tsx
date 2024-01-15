import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export default () => {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={{ color: colors.text }}>User Settings</Text>
    </View>
  );
};
