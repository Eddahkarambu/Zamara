import React, { useState } from "react";
import { CreateStaff } from "../components/createStaff";
import { ViewAllStaff } from "../components/viewAllStaff";
import { View, StyleSheet } from "react-native";
import { FAB } from "@rneui/themed";

export const Staff = () => {
  const [open, setOpen] = useState(false);
  const [staffData, setStaffData] = useState(null);

  const onClick = () => {
    setOpen(true);
  };

  const handleClick = () => {
    setStaffData(null);
    setOpen(false);
  };

  const onEditClicked = async (staff) => {
    setOpen(true);
    setStaffData(staff);
  };

  return (
    <View style={styles.container}>
      {open ? (
        <CreateStaff data={staffData} close={handleClick} />
      ) : (
        <ViewAllStaff onEdit={onEditClicked} />
      )}
      {open ? (
        <FAB
          icon={{ name: "cancel", color: "white" }}
          color="red"
          style={styles.button}
          onPress={handleClick}
        />
      ) : (
        <FAB
          icon={{ name: "add", color: "white" }}
          color="green"
          style={styles.button}
          onPress={onClick}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  button: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
