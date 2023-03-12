import React, { useState } from "react";
import { StaffCreate } from "../API/staff";
import {
  Alert,
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
} from "react-native";

export const CreateStaff = () => {
  const [staffNumber, setStaffNumber] = useState("");
  const [staffName, setStaffName] = useState("");
  const [staffEmail, setStaffEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const onClick = () => {
    const data = {
      staffEmail,
      staffName,
      staffNumber,
      department,
      salary,
    };
    StaffCreate(data);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Staff Number"
        style={styles.input}
        value={staffNumber}
        onChangeText={(e) => setStaffNumber(e)}
      />
      <TextInput
        placeholder="Staff Name"
        style={styles.input}
        value={staffName}
        onChangeText={(e) => setStaffName(e)}
      />
      <TextInput
        placeholder="Staff Email"
        style={styles.input}
        value={staffEmail}
        onChangeText={(e) => setStaffEmail(e)}
      />
      <TextInput
        placeholder="Department"
        style={styles.input}
        value={department}
        onChangeText={(e) => setDepartment(e)}
      />
      <TextInput
        placeholder="Salary"
        style={styles.input}
        value={salary}
        onChangeText={(e) => setSalary(e)}
      />
      <Pressable style={styles.button} onPress={onClick}>
        <Text> Create Staff</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  button: {
    height: 44,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 10,
  },
});
