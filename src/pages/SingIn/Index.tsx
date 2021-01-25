import React, { useCallback, useRef, useEffect } from "react";
import Input from "../../components/form/Input/Index";
import { Form } from "@unform/mobile";
import Button from "../../components/form/Button/Index";
import { FormHandles } from "@unform/core";
import { useNavigation } from "@react-navigation/native";
import { Container } from "./Styles";
import { Alert } from "react-native";

export default function SingIn() {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback(async () => {
    navigation.navigate('Agendamento');
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSignIn}>
        <Input name="name" icon="mail" placeholder="Nome" />
        <Input
          secureTextEntry
          name="password"
          icon="lock"
          placeholder="Senha"
        ></Input>
        <Button
          onPress={() => {
            formRef.current?.submitForm();
          }}
        >
          Entrar
        </Button>
      </Form>
    </Container>
  );
}
