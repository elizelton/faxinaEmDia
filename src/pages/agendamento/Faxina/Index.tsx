import React, {useCallback} from "react";
import { Container, ContainerCentered, Stack, Titulo } from "../../../components/common/style";
import Button from "../../../components/form/Button/Index";
import CheckboxInput from "../../../components/form/CheckBox/Index";
import { Form } from "@unform/mobile";
import { useNavigation } from "@react-navigation/native";
import { ButtonTT } from "../../../components/form/ButtonTT/Index";

const Faxina: React.FC = () => {

  const navigation = useNavigation();

  const handleSignIn = useCallback(async () => {}, []);

  const handleButton = () => {
    navigation.navigate('Opcoes')
  }

  return (
    <ContainerCentered>
      <Titulo>Escolha o tipo de faxina</Titulo>
      <ButtonTT onPress={handleButton} children="Hora Certa" />
      <ButtonTT onPress={handleButton}  children="Faxina Padrão 2H" />
      <ButtonTT onPress={handleButton} children="Faxina Padrão 4H" />
      <ButtonTT onPress={handleButton} children="Faxina Completa 8H" />
      <Stack>
        <Form onSubmit={handleSignIn}>
          {/* <CheckboxInput name="checkbox" options={checkboxOptions} /> */}
        </Form>
      </Stack>
    </ContainerCentered>
  );
};

export default Faxina;
