import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "./src/screens/DashboardScreens";
import { Provider } from "./src/context/BlogContext";

const Stack = createNativeStackNavigator()

const Container = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default () => {
  return <Provider>
    <Container />
  </Provider>
}