import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import { Container, ButtonText } from "./Styles";

interface ButtonProps extends RectButtonProperties {
  children: string;
  fullWidth?: boolean;
}
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
