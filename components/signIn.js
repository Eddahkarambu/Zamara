import React, { useState } from "react";
import { Alert, Button, TextInput, View, StyleSheet } from "react-native";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  onClick = () => {
    Alert.alert(`Your credentials are ${username} ${password}`);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={(e) => setUsername(e)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      <Button title="Sign In" style={styles.input} onPress={onClick} />
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
});