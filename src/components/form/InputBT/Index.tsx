import React, {
  useEffect,
  useCallback,
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { TextInputProps } from "react-native";
import {
  Container,
  TextInput,
  Button,
  ButtonText,
  ContainerBody,
  ContainerHeader,
  Titulo,
} from "./Styles";
import { useField } from "@unform/core";

interface InputProps extends TextInputProps {
  name: string;
  description: string;
  containerStyle?: object;
}
interface InputValueReference {
  value: string;
  text?: string;
}
interface InputRef {
  focus(): void;
}
const InputBT: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, description, containerStyle = {}, ...rest },
  ref
) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const [isFocused, setFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  let [value, setValue] = useState(Number(1));
  const inputElementRef = useRef<any>(null);
  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    inputElementRef.current.setNativeProps({ text: value.toString() });
  }, [value]);

  const handlePlusClick = useCallback(() => {
    // value += 1;
    setValue(value++);
  }, []);

  const handleLessClick = useCallback(() => {
    setValue(value > 0 ? value-- : 0);
  }, []);

  const handleInputFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setFocused(false);
    setIsFilled(!!inputValueRef.current?.value);
  }, []);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = "";
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container
      style={containerStyle}
      isFocused={isFocused}
      isErrored={!!error}
      isFilled={isFilled}
    >
      <ContainerHeader>
        <Titulo>{description}</Titulo>
      </ContainerHeader>
      <ContainerBody>
        <Button onPress={handleLessClick} disabled={value === 0}>
          <ButtonText>-</ButtonText>
        </Button>
        <TextInput
          keyboardAppearance="default"
          placeholderTextColor="#666360"
          defaultValue={defaultValue}
          ref={inputElementRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          editable={false}
          onChangeText={(value: any) => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />
        <Button onPress={handlePlusClick}>
          <ButtonText>+</ButtonText>
        </Button>
      </ContainerBody>
    </Container>
  );
};

export default forwardRef(InputBT);
