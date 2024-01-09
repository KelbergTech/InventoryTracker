import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, Text, View } from "react-native";
import { useCallback } from "react";

export default function App() {
	const [fontsLoaded] = useFonts({});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			<Text>Open up App.tsx This is a test to start working on your app!</Text>
			<Text>This is a normal text</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
