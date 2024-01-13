import { Stack } from "expo-router";

export default function ItemLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" />
      <Stack.Screen name="additem" />
    </Stack>
  );
}
