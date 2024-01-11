import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { Text, useColorScheme } from "react-native";
import CustomDrawerContent from "@components/drawer/CustomContent";
import { Stack } from "expo-router";
import { DrawerContentComponentProps, DrawerNavigationOptions } from "@react-navigation/drawer";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "inventory",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Geist: require("@assets/fonts/Geist-Regular.otf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const testInventories = ["Inventory1", "Inventory2", "Inventory3"];
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer
        initialRouteName={`inventory/${testInventories[0]}`}
        screenOptions={{
          headerTitleAlign: "center",
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
      </Drawer>
    </ThemeProvider>
  );
}
