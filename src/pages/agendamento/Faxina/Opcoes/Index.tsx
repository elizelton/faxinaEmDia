import { Form } from "@unform/mobile";
import React, { useState } from "react";
import { ContainerCentered } from "../../../../components/common/style";
import CheckBox from "@react-native-community/checkbox";
import {
  CheckBoxContainer,
  Container,
  FormContainer,
  SubTitulo,
  Titulo,
} from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { ButtonTT } from "../../../../components/form/ButtonTT/Index";
import RNCheckboxCard from "react-native-checkbox-card";
import Button from "../../../../components/form/Button/Index";

const Opcoes: React.FC = () => {
  const handleForm = () => {};
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();

  const handleButtonVoltar = () => {
    navigation.goBack();
  };

  const handleButtonProximo = () => {
    navigation.navigate("Pessoa");
  };

  return (
    <Container>
      <Titulo>Itens opcionais</Titulo>
      
        <Form onSubmit={handleForm}>
        <FormContainer>
          <RNCheckboxCard
            quantity="+ 1,50 hora(s)"
            text="Passadoria - Roupa Básica (média de 15 peças)"
            enableQuantityText
            circleBackgroundColor="#17a2b8"
            quantityTextStyle={{ color: "blue" }}
            onPress={(checked: boolean) => console.log("Checked: ", checked)}
          />
          <RNCheckboxCard
            quantity="+ 1,50 hora(s)"
            text="Interior de Fogão"
            enableQuantityText
            circleBackgroundColor="#17a2b8"
            quantityTextStyle={{ color: "blue" }}
            onPress={(checked: boolean) => console.log("Checked: ", checked)}
          />
          <RNCheckboxCard
            quantity="+ 1,50 hora(s)"
            text="Interior de Armário"
            enableQuantityText
            circleBackgroundColor="#17a2b8"
            quantityTextStyle={{ color: "blue" }}
            onPress={(checked: boolean) => console.log("Checked: ", checked)}
          />
          <RNCheckboxCard
            quantity="+ 1,50 hora(s)"
            text="Passadoria - Roupa Social (média de 15 peças)"
            enableQuantityText
            circleBackgroundColor="#17a2b8"
            quantityTextStyle={{ color: "blue" }}
            onPress={(checked: boolean) => console.log("Checked: ", checked)}
          />
          <RNCheckboxCard
            quantity="+ 1,50 hora(s)"
            text="Área externa (até 25m²)"
            enableQuantityText
            circleBackgroundColor="#17a2b8"
            quantityTextStyle={{ color: "blue" }}
            onPress={(checked: boolean) => console.log("Checked: ", checked)}
          />
          </FormContainer>
        </Form>
      <Button onPress={handleButtonProximo} children="Próximo"></Button>
    </Container>
  );
};

export default Opcoes;
