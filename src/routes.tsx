import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ambiente from "./pages/agendamento/Ambiente/Index";
import SingIn from "./pages/SingIn/Index";
import { Agendamento } from "./pages/agendamento/Index";

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#007bff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerShown: false
    }}
  >
    <Stack.Screen
      name="SingIn"
      component={SingIn}
    />
    <Stack.Screen name="Agendamento" component={Agendamento} />
  </Stack.Navigator>
);

export default Routes;
