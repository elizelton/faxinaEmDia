import { Form } from "@unform/mobile";
import React from "react";
import { Container } from "../../../../components/common/style";
import { ButtonTT } from "../../../../components/form/ButtonTT/Index";
import InputBT from "../../../../components/form/InputBT/Index";
import { useNavigation } from "@react-navigation/native";
import { Box, Titulo } from "./styles";
import Button from "../../../../components/form/Button/Index";
import InputSpinner from "react-native-input-spinner";

const Escritorio: React.FC = () => {
  const handleSignIn = () => {};
  const navigation = useNavigation();

  const handleButtonVoltar = () => {
    navigation.goBack();
  };

  const handleButtonProximo = () => {
    navigation.navigate("Faxina");
  };

  return (
    <Container>
      <Box>
        <Titulo>Banheiro Trabalho</Titulo>
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
        <Titulo>Cozinha Trabalho</Titulo>
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
        <Titulo>Sala Trabalho</Titulo>
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
        <Titulo>Cômodo Diverso Trabalho</Titulo>
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
};

export default Escritorio;
