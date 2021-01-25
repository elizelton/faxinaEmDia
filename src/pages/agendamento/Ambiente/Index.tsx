import { Form } from "@unform/mobile";
import React, { useCallback, useState } from "react";
import { ButtonTT } from "../../../components/form/ButtonTT/Index";
import Casa from "./Casa/Index";
import Escritorio from "./Escritorio/Index";
import { Container, Stack } from "./Styles";

// import { Container } from './styles';

const Ambiente: React.FC = () => {
  const [isCasa, setCasa] = useState(true);
  const handleSignIn = useCallback(async () => {}, []);

  const handleButtonCasa = () => {
    setCasa(true);
  };

  const handleButtonEscritorio = () => {
    setCasa(false);
  };

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        <Stack>
          <ButtonTT children="Minha Casa" onPress={handleButtonCasa}></ButtonTT>
          <ButtonTT
            children="Meu Escritório"
            onPress={handleButtonEscritorio}
          ></ButtonTT>
        </Stack>
        {isCasa && <Casa />}
        {!isCasa && <Escritorio />}
      </Form>
    </Container>
  );
};

export default Ambiente;
