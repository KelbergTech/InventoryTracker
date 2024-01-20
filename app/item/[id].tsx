import Colors from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import { Text, useColorScheme } from "react-native";

const Item = () => {
  const colorScheme = useColorScheme();
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <Text style={{ color: Colors[colorScheme ?? "dark"].text }}>
      This is an item {params.id}
    </Text>
  );
};
export default Item;
