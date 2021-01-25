import React from "react";
import { Container, Stack, Titulo } from "../../../components/common/style";
import Button from "../../../components/form/Button/Index";
import CheckboxInput from "../../../components/form/CheckBox/Index";

const Faxina: React.FC = () => {
  const checkboxOptions: CheckboxOption[] = [
    { id: "node", value: "node", label: "Node" },
    { id: "react", value: "react", label: "ReactJS" },
  ];

  return (
    <Container>
      <Titulo>Escolha o tipo de faxina</Titulo>
      <Button children="Hora Certa" />
      <Button children="Faxina Padrão 2H" />
      <Button children="Faxina Padrão 4H" />
      <Button children="Faxina Completa 8H" />
      <Stack>
        <CheckboxInput name="checkbox" options={checkboxOptions} />
      </Stack>
    </Container>
  );
};

export default Faxina;
