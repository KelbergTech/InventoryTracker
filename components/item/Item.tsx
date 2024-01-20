import { Text, View, useColorScheme } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
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
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 12,
          borderTopWidth: 2,
          borderColor: "black",
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
        <Text style={{ color: Colors[colorScheme ?? "dark"].text }}>
          <FontAwesome6
            name="caret-left"
            style={{ fontSize: 28 }}
            onPress={() => SubtractOneFromAmount()}
          />
        </Text>
        <View
          style={{
            minWidth: 16,
            alignItems: "center",
            marginRight: 6,
            marginLeft: 6,
          }}
        >
          <Text
            style={{ fontSize: 16, color: Colors[colorScheme ?? "dark"].text }}
          >
            {props.amount}
          </Text>
        </View>

        <Text style={{ color: Colors[colorScheme ?? "dark"].text }}>
          <FontAwesome6
            name="caret-right"
            style={{ fontSize: 28 }}
            onPress={() => AddOneToAmount()}
          />
        </Text>
      </View>
    </View>
  );
};

export default Item;
