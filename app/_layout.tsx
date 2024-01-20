import FontAwesome from "@expo/vector-icons/FontAwesome6";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  useTheme,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "react-native";
import CustomDrawerContent from "@/components/drawer/CustomContent";
import { GestureHandlerRootView } from "react-native-gesture-handler";
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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          initialRouteName="inventory"
          screenOptions={_ => {
            const { colors } = useTheme();
            return {
              headerTitleAlign: "center",
              headerTintColor: colors.text,
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
    </ThemeProvider>
  );
}
