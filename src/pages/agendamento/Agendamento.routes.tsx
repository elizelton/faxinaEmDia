import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ambiente from "./Ambiente/Index";
import Faxina from "./Faxina/Index";
import Pessoa from "./Pessoa/DadosBasicos/Index";
import Casa from "./Ambiente/Casa/Index";
import Escritorio from "./Ambiente/Escritorio/Index";
import Opcoes from "./Faxina/Opcoes/Index";
import DadosBasicos from "./Pessoa/DadosBasicos/Index";
import Endereco from "./Pessoa/Endereco/Index";
import DataAgendamento from "./Pessoa/DataAgendamento/Index";

const Stack = createStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function AgendamentoRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#007bff",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      initialRouteName="Ambiente"
      mode="modal"
      headerMode="float"
    >
      <Stack.Screen name="Ambiente" component={Ambiente} />
      <Stack.Screen name="Casa" component={Casa} />
      <Stack.Screen name="Escritorio" component={Escritorio} />
      <Stack.Screen name="Faxina" component={Faxina} />
      <Stack.Screen
        name="Opcoes"
        component={Opcoes}
        options={{ title: "Opções" }}
      />
      <Stack.Screen name="Pessoa" component={Pessoa} />
      <Stack.Screen name="DadosBasicos" component={DadosBasicos} />
      <Stack.Screen name="DataAgendamento" component={DataAgendamento} />
    </Stack.Navigator>
  );
}
