import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { Continents } from "../screens/continents";
import { Home } from "../screens/home";
import { Signout } from "../screens/signOut";
import { Staff } from "../screens/staff";
import DrawerItems from "../constants/DrawerItems";

const Drawer = createDrawerNavigator();

export function Main() {
  return (
    <Drawer.Navigator
      drawerType="front"
      initialRouteName="Home"
      screenOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 10 },
      }}
    >
      {DrawerItems.map((drawer) => (
        <Drawer.Screen
          key={drawer.name}
          name={drawer.name}
          component={
            drawer.name === "Home"
              ? Home
              : drawer.name === "Continents"
              ? Continents
              : drawer.name === "SignOut"
              ? Signout
              : Staff
          }
          options={{
            drawerIcon: ({ focused }) => (
              <Feather
                name={drawer.iconName}
                size={24}
                color={focused ? "#e91e63" : "black"}
              />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
}
