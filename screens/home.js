import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet } from "react-native";
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
    <View style={styles.container}>
      <Text style={styles.heading}>
        Welcome {user && user.firstName} {user && user.lastName}
      </Text>
      <Text style={styles.heading}>Your profile details is as below</Text>
      <View style={styles.details}>
        <Text style={styles.info}>Age:</Text>
        <Text style={styles.information}>{user && user.age}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.info}>Gender:</Text>
        <Text style={styles.information}>{user && user.gender}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.info}>Email:</Text>
        <Text style={styles.information}>{user && user.email}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.info}>Phone:</Text>
        <Text style={styles.information}>{user && user.phone}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.info}> Birth Date:</Text>
        <Text style={styles.information}> {user && user.birthDate}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.info}>Blood Group:</Text>
        <Text style={styles.information}>{user && user.bloodGroup}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.info}>Height:</Text>
        <Text style={styles.information}>{user && user.height}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.info}>Weight:</Text>
        <Text style={styles.information}>{user && user.weight}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.info}>Eye Color:</Text>
        <Text style={styles.information}>{user && user.eyeColor}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1f1f3d",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    color: "white",
    padding: 2,
    marginLeft: 30,
  },
  info: {
    color: "white",
    fontWeight: 800,
    fontSize: 18,
  },
  information: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
  heading: {
    color: "white",
    padding: 5,
    fontWeight: 800,
    fontSize: 18,
    marginLeft: 30,
  },
});
