import React, { useState } from "react";
import { CreateStaff } from "../components/createStaff";
import { ViewAllStaff } from "../components/viewAllStaff";
import { View, StyleSheet } from "react-native";
import { FAB } from "@rneui/themed";

export const Staff = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(true);
  };

  return (
    <View style={styles.container}>
      {open ? <CreateStaff /> : <ViewAllStaff />}

      {!open && (
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
