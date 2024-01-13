import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { Link, useNavigation, useRouter } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";

type CustomDrawerComponentProps = DrawerContentComponentProps & {
  company?: {
    name: string;
    user: {
      firstName: string;
      lastName: string;
    };
  };
  inventories: string[];
};

export default (props: CustomDrawerComponentProps) => {
  return (
    <>
      <DrawerContentScrollView {...props} style={{}}>
        <View style={{}}>
          <Text style={{ paddingLeft: 12, fontSize: 24 }}>
            {props.company?.name ?? "Inventories"}
          </Text>
          {props.inventories.map((name, index) => (
            <DrawerItem
              key={name}
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
        <Link href="/globalsettings" asChild>
          <Button title="Global settings" />
        </Link>
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
