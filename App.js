import { SignIn } from "./components/signIn";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Main } from "./components/main";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen
          name="Signin"
          component={SignIn}
          
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "ZAMARA APP",
            headerStyle: {
              backgroundColor: "#43ae37",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
