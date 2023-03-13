import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoginUser = async (username, password) => {
  return fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => response.json())
    .then(async (responseData) => {
      try {
        const userData = await AsyncStorage.getItem("id");
        if (userData) {
          await AsyncStorage.removeItem("id");
        }
        await AsyncStorage.setItem("id", JSON.stringify(responseData.id));
        return responseData;
      } catch (error) {
        console.log("error is", error);
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export const getUser = async (id) => {
  return fetch(`https://dummyjson.com/users/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then(async (responseData) => {
      return responseData;
    })
    .catch((error) => {
      console.log("error", error);
    });
};
