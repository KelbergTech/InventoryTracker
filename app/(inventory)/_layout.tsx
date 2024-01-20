import { Drawer } from "expo-router/drawer";
import { DrawerNavigationOptions } from "@react-navigation/drawer";

import { useColorScheme } from "react-native";
import CustomDrawerContent from "@/components/drawer/CustomContent";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  const testInventories = ["Inventory1", "Inventory2", "Inventory3"];
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="inventory"
        screenOptions={_ => {
          return {
            headerTitleAlign: "center",
            headerTintColor: Colors[colorScheme ?? "dark"].tint,
          };
        }}
        drawerContent={props => (
          <CustomDrawerContent {...props} inventories={testInventories} />
        )}
      >
        <Drawer.Screen
          name="inventory"
          //@ts-ignore
          options={({ route }): DrawerNavigationOptions => {
            return {
              headerTitle: route.params?.params?.id ?? route.name,
            };
          }}
        />
        <Drawer.Screen name="globalsettings" />
        <Drawer.Screen name="usersettings" />
        <Drawer.Screen name="companysettings" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
