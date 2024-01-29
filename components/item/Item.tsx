import { FontAwesome6 } from "@expo/vector-icons";
import { Pressable, Text, View, useColorScheme } from "react-native";

import Colors from "@/constants/Colors";

type ItemProps = ItemType & {
  last: boolean;
};

export type ItemType = {
  id: string;
  name: string;
  amount: number;
};

const Item = (props: ItemProps) => {
  const AddOneToAmount = () => {
    console.log("+1 to amount");
  };
  const SubtractOneFromAmount = () => {
    console.log("-1 from amount");
  };
  const colorScheme = useColorScheme();
  return (
    <Pressable
      android_ripple={{ color: Colors[colorScheme ?? "dark"].tabIconSelected, foreground: true }}
      onPress={() => {
        console.log("Pressed");
      }}
    >
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 12,
            borderTopWidth: 2,
            borderColor: colorScheme === "dark" ? "white" : "black",
            backgroundColor: Colors[colorScheme ?? "dark"].background,
          },
          props.last ? { borderBottomWidth: 2 } : {},
        ]}
      >
        <View>
          <Text style={{ color: Colors[colorScheme ?? "dark"].text }}>
            {props.name}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable onPress={SubtractOneFromAmount} style={{ padding: 8 }}>
            <Text style={{ color: Colors[colorScheme ?? "dark"].text }}>
              <FontAwesome6
                name="caret-left"
                style={{ fontSize: 28 }}
              />
            </Text>
          </Pressable>
          <View
            style={{
              minWidth: 16,
              alignItems: "center",
              marginRight: 6,
              marginLeft: 6,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: Colors[colorScheme ?? "dark"].text,
              }}
            >
              {props.amount}
            </Text>
          </View>
          <Pressable onPress={AddOneToAmount} android_ripple={{ radius: 16, color: "red", borderless: true, foreground: true }} style={{ padding: 8 }}>
            <Text style={{ color: Colors[colorScheme ?? "dark"].text }}>
              <FontAwesome6
                name="caret-right"
                style={{ fontSize: 28 }}
              />
            </Text></Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default Item;
