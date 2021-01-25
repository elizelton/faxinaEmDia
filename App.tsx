import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { View, StatusBar } from "react-native";
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#007bff"
        translucent
      />
      <Routes />
    </NavigationContainer>
  );
}
