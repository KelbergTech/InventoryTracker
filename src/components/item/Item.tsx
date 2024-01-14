import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

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
        },
        props.last ? { borderBottomWidth: 2 } : {},
      ]}
    >
      <View>
        <Text>{props.name}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome
          name="caret-left"
          style={{ fontSize: 28 }}
          onPress={() => SubtractOneFromAmount()}
        />
        <View
          style={{
            minWidth: 16,
            alignItems: "center",
            marginRight: 6,
            marginLeft: 6,
          }}
        >
          <Text style={{ fontSize: 16 }}>{props.amount}</Text>
        </View>
        <FontAwesome
          name="caret-right"
          style={{ fontSize: 28 }}
          onPress={() => AddOneToAmount()}
        />
      </View>
    </View>
  );
};

export default Item;
