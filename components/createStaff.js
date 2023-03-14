import React, { useEffect, useState } from "react";
import { StaffCreate, UpdateStaff } from "../API/staff";
import { SendCreateEmail, SendUpdateEmail } from "../email/mail";
import {
  Alert,
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
} from "react-native";

export const CreateStaff = ({ data, close }) => {
  const [staffNumber, setStaffNumber] = useState("");
  const [staffName, setStaffName] = useState("");
  const [staffEmail, setStaffEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [staffData, setStaffData] = useState(null);

  useEffect(() => {
    setStaffData(data);
  }, [data]);

  const onClick = () => {
    const data = {
      staffEmail: staffEmail || staffData.staffEmail,
      staffName: staffName || staffData.staffName,
      staffNumber: staffNumber || staffData.staffNumber,
      department: department || staffData.department,
      salary: salary || staffData.salary,
    };
    if (staffData) {
      UpdateStaff(staffData._id, data);
      setStaffData(null);
      SendUpdateEmail(data.staffName, data.staffEmail);

      close();
    } else {
      StaffCreate(data);
      SendCreateEmail(data.staffName, data.staffEmail);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="white"
        placeholder="Staff Number"
        style={styles.input}
        value={staffNumber || staffData?.staffNumber}
        onChangeText={(e) => setStaffNumber(e)}
      />
      <TextInput
        placeholderTextColor="white"
        placeholder="Staff Name"
        style={styles.input}
        value={staffName || staffData?.staffName}
        onChangeText={(e) => setStaffName(e)}
      />
      <TextInput
        placeholderTextColor="white"
        placeholder="Staff Email"
        style={styles.input}
        value={staffEmail || staffData?.staffEmail}
        onChangeText={(e) => setStaffEmail(e)}
      />
      <TextInput
        placeholderTextColor="white"
        placeholder="Department"
        style={styles.input}
        value={department || staffData?.department}
        onChangeText={(e) => setDepartment(e)}
      />
      <TextInput
        placeholderTextColor="white"
        placeholder="Salary"
        style={styles.input}
        value={salary || staffData?.salary}
        onChangeText={(e) => setSalary(e)}
      />
      <Pressable style={styles.button} onPress={onClick}>
        <Text style={styles.btnText}>
          {staffData ? "Edit Staff" : "Create Staff"}{" "}
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f1f3d",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 10,
    color: "white",
    borderRadius: 10,
  },
  button: {
    height: 44,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 10,
  },
  btnText: {
    color: "white",
  },
});
