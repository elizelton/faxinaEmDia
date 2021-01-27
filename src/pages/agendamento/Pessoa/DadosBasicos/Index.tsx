import React, { useCallback, useRef, useState, useEffect } from "react";
import {
  Container,
  ContainerCentered,
  Stack,
  SubTitulo,
  Titulo,
} from "../../../../components/common/style";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";
import Input from "../../../../components/form/Input/Index";
import { ButtonTT } from "../../../../components/form/ButtonTT/Index";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box } from "./Styles";
import Button from "../../../../components/form/Button/Index";

const DadosBasicos: React.FC = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date(1598051730000));
  const handleSignIn = useCallback(async () => {}, []);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const handleButtonVoltar = () => {
    navigation.goBack();
  };

  const handleButtonProximo = () => {
    navigation.navigate("Endereco");
  };

  const handleDatechange = () => {
    // formRef.current.setFieldValue('dataNascimento', date);
    setShow(false);
  };

  const showDatePicker = () => {
    setMode("date");
    setShow(true);
  };

  useEffect(() => {
    // formRef.current.setFieldValue('dataNascimento', date);
  }, [date]);

  return (
    <Container>
      <ContainerCentered>
        <Form ref={formRef} onSubmit={handleSignIn}>
          <Box>
            <Titulo>Sobre você</Titulo>
            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="mail" icon="mail" placeholder="E-mail" />
            <TouchableOpacity onPress={showDatePicker}>
              <Input
                name="dataNascimento"
                icon="calendar"
                onFocus={showDatePicker}
                placeholder="Data nascimento"
              />
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                onChange={handleDatechange}
                is24Hour={true}
                display="default"
              />
            )}
            <Input
              name="telefone"
              icon="phone"
              placeholder="Preencha seu telefone"
            />
          </Box>
          <Box>
            <Titulo>Preencha o estado/cidade ou o CEP</Titulo>
            <Input name="email" icon="map" placeholder="Informe o CEP" />
            <SubTitulo>Ou</SubTitulo>
            <Input name="cidade" placeholder="Estado" />
            <Input name="estado" placeholder="Cidade" />
          </Box>
        </Form>
      </ContainerCentered>
      <Stack>
        <Button onPress={handleButtonProximo} children="Próximo"></Button>
      </Stack>
    </Container>
  );
};

export default DadosBasicos;
