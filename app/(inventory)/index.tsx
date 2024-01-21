import { useRouter, useFocusEffect } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";

const Index = () => {
  const inventoryList = ["Inventory1", "Inventory2", "Inventory3"];
  const router = useRouter();
  // useEffect(() => {
  //   console.log("Redirecting...");
  //   router.replace({
  //     pathname: "/(inventory)/inventory/[id]",
  //     params: { id: inventoryList[0] },
  //   });
  // }, []);
  return <Text>Main screen</Text>;
};

export default Index;
