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
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
