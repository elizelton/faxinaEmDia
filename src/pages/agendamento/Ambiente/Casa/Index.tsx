import React, { useState } from "react";
import { Container } from "../../../../components/common/style";
import { useNavigation } from "@react-navigation/native";
import { Box, Titulo } from "./styles";
import InputSpinner from "react-native-input-spinner";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../../../components/form/Button/Index";

export default function Casa() {
  const navigation = useNavigation();
  const [value1, setvalue1] = useState(0);
  const handleSignIn = () => {};

  const handleButtonVoltar = () => {
    navigation.goBack();
  };

  const handleButtonProximo = () => {
    navigation.navigate("Faxina");
  };

  return (
    <Container>
      <Box>
        <Titulo>Quarto</Titulo>
        <InputSpinner
          value={1}
          min={0}
          max={15}
          rounded={false}
          style={{ backgroundColor: "#e6e6e6", maxHeight: 50, marginBottom: 5 }}
          fontSize={25}
          editable={false}
          width="80%"
          onChange={(value) => {}}
        />
      </Box>
      <Box>
        <Titulo>Cozinha</Titulo>
        <InputSpinner
          value={1}
          min={0}
          max={15}
          rounded={false}
          style={{ backgroundColor: "#e6e6e6", maxHeight: 50, marginBottom: 5 }}
          fontSize={25}
          editable={false}
          width="80%"
          height={50}
          onChange={(value) => {}}
        />
      </Box>
      <Box>
        <Titulo>Sala</Titulo>
        <InputSpinner
          value={1}
          min={0}
          max={15}
          rounded={false}
          style={{ backgroundColor: "#e6e6e6", maxHeight: 50, marginBottom: 5 }}
          fontSize={25}
          editable={false}
          width="80%"
          height={50}
          onChange={(value) => {}}
        />
      </Box>
      <Box>
        <Titulo>Cômodo Diverso</Titulo>
        <InputSpinner
          value={1}
          min={0}
          max={15}
          rounded={false}
          style={{ backgroundColor: "#e6e6e6", maxHeight: 50, marginBottom: 5 }}
          fontSize={25}
          editable={false}
          width="80%"
          height={50}
          onChange={(value) => {}}
        />
      </Box>
      <Box>
        <Titulo>Lavanderia</Titulo>
        <InputSpinner
          value={1}
          min={0}
          max={15}
          rounded={false}
          style={{ backgroundColor: "#e6e6e6", maxHeight: 50, marginBottom: 5 }}
          fontSize={25}
          editable={false}
          width="80%"
          height={50}
          onChange={(value) => {}}
        />
      </Box>
      <Box>
        <Titulo>Banheiro</Titulo>
        <InputSpinner
          value={1}
          min={0}
          max={15}
          rounded={false}
          style={{ backgroundColor: "#e6e6e6", maxHeight: 50, marginBottom: 5 }}
          fontSize={25}
          editable={false}
          width="80%"
          height={50}
          onChange={(value) => {}}
        />
      </Box>
      <Button onPress={handleButtonProximo} children="Próximo"></Button>
    </Container>
  );
}
