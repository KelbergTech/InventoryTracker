import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { useNavigation, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

type CustomDrawerComponentProps = DrawerContentComponentProps & {
  company?: {
    name: string;
    user: {
      firstName: string;
      lastName: string;
    };
  };
};

export default (props: CustomDrawerComponentProps) => {
  const testList = ["Inventory1", "Inventory2", "Inventory3"];

  return (
    <>
      <DrawerContentScrollView {...props} style={{}}>
        <View style={{}}>
          <Text style={{ paddingLeft: 12, fontSize: 24 }}>
            {props.company?.name ?? "Inventories"}
          </Text>
          {testList.map((name, index) => (
            <DrawerItem
              key={index}
              label={name}
              onPress={() => {
                props.navigation.navigate("inventory", {
                  screen: "[id]",
                  params: { id: name },
                });
              }}
            />
          ))}
          {props.company ? (
            <View style={{ paddingLeft: 12 }}>
              <Text
                style={{ fontSize: 24 }}
              >{`${props.company.user.firstName} ${props.company.user.lastName}`}</Text>
            </View>
          ) : null}
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          paddingLeft: 12,
          paddingRight: 12,
          marginTop: 12,
        }}
      >
        <Button title="Global settings" />
      </View>
      <View
        style={{
          paddingLeft: 12,
          marginBottom: 12,
          marginTop: 12,
          paddingRight: 12,
        }}
      >
        {props.company ? <Button title="Logout" /> : <Button title="Login" />}
      </View>
    </>
  );
};
