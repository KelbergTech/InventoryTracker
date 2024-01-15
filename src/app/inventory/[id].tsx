import { ItemType } from "@components/item/Item";
import ItemList from "@components/item/ItemList";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Inventory() {
  const params = useLocalSearchParams<{ id: string }>();

  const itemList: ItemType[] = [
    { id: "1", name: "Hammer", amount: 2 },
    { id: "2", name: "Skruetrækker", amount: 4 },
  ];

  return (
    <View>
      <View>
        <Text>{params.id} Screen</Text>
      </View>
      <ItemList data={itemList} />
    </View>
  );
}
