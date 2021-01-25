import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ambiente from "./Ambiente/Index";
import Faxina from "./Faxina/Index";
import Pessoa from "./Pessoa/Index";

const Tab = createBottomTabNavigator();

export default function AgendamentoRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#007bff",
        inactiveTintColor: "gray",
        labelPosition: "beside-icon",
        tabStyle: { borderColor: "#666360" },
      }}
      initialRouteName="Ambiente"
    >
      <Tab.Screen name="Ambiente" component={Ambiente} />
      <Tab.Screen name="Faxina" component={Faxina} />
      <Tab.Screen name="Pessoa" component={Pessoa} />
    </Tab.Navigator>
  );
}
