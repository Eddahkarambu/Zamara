import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const Signout = ({ navigation }) => {
  useEffect(() => {
    async function getId() {
      const id = await AsyncStorage.getItem("id");
      if (id) {
        await AsyncStorage.removeItem("id");
      }
    }
    getId();
    navigation.navigate("Signin");
  }, []);
  return (
    <View>
      <Text>This is signout</Text>
    </View>
  );
};
