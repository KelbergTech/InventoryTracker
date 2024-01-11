import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Inventory() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>{params.id} Screen</Text>
    </View>
  );
}
