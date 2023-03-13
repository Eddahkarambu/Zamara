import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native";
import { getUser } from "../API/users";

export const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getData() {
      if (user && !user.firstName) {
        const id = JSON.parse(await AsyncStorage.getItem("id"));
        console.log("id", id);
        const userData = await getUser(id);
        console.log("data", userData);
        setUser({ ...userData });
      }

      console.log("bb", user);
    }
    getData();
  }, [user]);
  return (
    <View>
      <Text>
        Welcome {user && user.firstName} {user && user.lastName}
      </Text>
      <Text>Your profile details is as below</Text>
      <Text>Age:{user && user.age}</Text>
      <Text>Gender:{user && user.gender}</Text>
      <Text>Email:{user && user.email}</Text>
      <Text>Phone:{user && user.phone}</Text>
      <Text> Birth Date: {user && user.birthDate}</Text>
      <Text>Blood Group:{user && user.bloodGroup}</Text>
      <Text>Height:{user && user.height}</Text>
      <Text>Weight:{user && user.weight}</Text>
      <Text>Eye Color:{user && user.eyeColor}</Text>
    </View>
  );
};
