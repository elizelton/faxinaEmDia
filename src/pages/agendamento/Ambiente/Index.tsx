import { Form } from "@unform/mobile";
import React, { useCallback, useState } from "react";
import { ButtonTT } from "../../../components/form/ButtonTT/Index";
import Casa from "./Casa/Index";
import { useNavigation } from "@react-navigation/native";
import { Container, Stack } from "./Styles";
import { ContainerCentered } from "../../../components/common/style";
import Button from "../../../components/form/Button/Index";

// import { Container } from './styles';

const Ambiente: React.FC = () => {
  const navigation = useNavigation();
  const handleSignIn = useCallback(async () => {}, []);

  const handleButtonCasa = () => {
    navigation.navigate('Casa');
  };

  const handleButtonEscritorio = () => {
    navigation.navigate('Escritorio');
  };

  return (
    <ContainerCentered>
      <Form onSubmit={handleSignIn}>
          <Button children="Minha Casa" onPress={handleButtonCasa}></Button>
          <Button
            children="Meu Escritório"
            onPress={handleButtonEscritorio}
          ></Button>
      </Form>
    </ContainerCentered>
  );
};

export default Ambiente;
