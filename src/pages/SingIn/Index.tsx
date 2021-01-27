import React, { useCallback, useRef, useEffect } from "react";
import Input from "../../components/form/Input/Index";
import { Form } from "@unform/mobile";
import Button from "../../components/form/Button/Index";
import { SubmitHandler, FormHandles } from "@unform/core";
import { useNavigation } from "@react-navigation/native";
import { ContainerCentered } from "../../components/common/style";
import { TextInput } from "react-native";
import getValidationErrors from '../../util/getValidationErrors';
// import * as Yup from 'yup';
interface SignInFormData {
  email: string;
  password: string;
}

export default function SingIn() {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordRef = useRef<TextInput>(null);
  const inputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      formRef.current?.setErrors({});

      // try {
        // const schema = Yup.object().shape({
        //   email: Yup.string()
        //     .required('E-mail é obrigatório')
        //     .email('Digite um e-mail válido'),
        //   password: Yup.string().required('Senha obrigatória'),
        // });
        // await schema.validate(data, {
        //   abortEarly: false,
        // });
        // await signIn({
        //   email: data.email,
        //   password: data.password,
        // });
        // Alert.alert(
        //   'Login feito com s  ucesso!'
        // );

        navigation.navigate('Agendamento');
      // } catch (err) {
      //   if (err instanceof Yup.ValidationError) {
      //     console.log(err);
      //     const errors = getValidationErrors(err);
      //     formRef.current?.setErrors(errors);
      //     return;
      //   }
      //   // Alert.alert(
      //   //   'Erro na autenticação',
      //   //   'Ocorreu um erro ao fazer login, cheque as credenciais.',
      //   // );
      // }
    },
    [],
  );

  return (
    <ContainerCentered>
      <Form ref={formRef} onSubmit={handleSignIn}>
        <Input ref={inputRef} name="email" icon="mail" placeholder="E-mail" />
        <Input
          secureTextEntry
          ref={passwordRef}
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
    </ContainerCentered>
  );
}
