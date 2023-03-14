import React, { useState } from "react";

import { Text, Image } from "react-native";
import {
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import { LoginUser } from "../API/users";
import logo from "../images/Zamaralogo.png";

export const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  onClick = async () => {
    const user = await LoginUser(username, password);
    if (user) {
      navigation.navigate("Main");
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={logo} />

      <TextInput
        placeholderTextColor="white"
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={(e) => setUsername(e)}
      />
      <TextInput
        placeholderTextColor="white"
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      <Pressable style={styles.button} onPress={onClick}>
        <Text style={styles.text}>Sign In</Text>
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
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    color: "white",
    backgroundColor: "green",
    width: 100,
    height: 44,
    padding: 10,
    color: "white",
    borderWidth: 1,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  text: {
    color: "white",
  },
  tinyLogo: {
    marginBottom: 50,
    marginLeft: 35,
  },
});
