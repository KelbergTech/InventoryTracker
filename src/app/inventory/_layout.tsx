import { Tabs } from "expo-router/tabs";
import { FontAwesome5 } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs initialRouteName="[id]" screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="scanner"
        options={{
          title: "Scanner",
          tabBarIcon(props) {
            return <FontAwesome5 name="qrcode" color={props.color} />;
          },
        }}
      />

      <Tabs.Screen
        name="[id]"
        options={{
          title: "Inventory",
          tabBarIcon(props) {
            return <FontAwesome5 name="warehouse" color={props.color} />;
          },
        }}
      />

      <Tabs.Screen
        name="inventorysettings"
        options={{
          title: "Settings",
          tabBarIcon(props) {
            return <FontAwesome5 name="wrench" color={props.color} />;
          },
        }}
      />
    </Tabs>
  );
};
