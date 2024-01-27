import { FlatList, View } from "react-native";

import Item, { ItemType } from "./Item";

type ItemListProps = {
  data: ItemType[];
};

const ItemList = ({ data }: ItemListProps) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <Item key={item.id} last={data.length === index + 1} {...item} />
        )}
      />
    </View>
  );
};

export default ItemList;
