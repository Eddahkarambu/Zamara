import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

export const StaffCard = ({
  staffName,
  staffEmail,
  staffNumber,
  department,
  salary,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <Feather name="user" size={24} color="black" />
        <Text> {staffName}</Text>
      </View>

      <View style={styles.detail}>
        <Feather name="mail" size={24} color="black" />
        <Text> {staffEmail}</Text>
      </View>

      <View style={styles.detail}>
        <Feather name="hash" size={24} color="black" />
        <Text>{staffNumber}</Text>
      </View>

      <View style={styles.detail}>
        <Feather name="user" size={24} color="black" />
        <Text> {department}</Text>
      </View>

      <View style={styles.detail}>
        <Feather name="dollar-sign" size={24} color="black" />
        <Text>{salary}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth:2,
    width: 300,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    margin: 20,
    padding: 10,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  detail: {
    flexDirection: "row",
    padding: 5,
  },
});
