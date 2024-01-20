import { Link } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

const Index = () => {
  const inventoryList = ["Inventory1", "Inventory2", "Inventory3"];

  return (
    <ScrollView>
      {inventoryList.map(name => (
        <Link
          key={name}
          href={{
            pathname: "/(inventory)/inventory/[id]",
            params: { id: name },
          }}
          asChild
        >
          <View></View>
        </Link>
      ))}
    </ScrollView>
  );
};

export default Index;
