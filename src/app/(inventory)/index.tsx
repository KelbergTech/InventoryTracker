import { useRouter, useFocusEffect } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";

import { CustomText } from "@/components/Styled/Text";

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
  return (
    <>
      <Text className="text-red-400">Test</Text>
      <CustomText variant="primary" className="text-red-200">
        Main screen
      </CustomText>
    </>
  );
};

export default Index;
