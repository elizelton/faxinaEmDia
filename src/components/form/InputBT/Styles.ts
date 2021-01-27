import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';


interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const ContainerHeader = styled.View`
  width: 100%;
  flex-direction: column;
`
export const ContainerBody = styled.View`
  width: 100%;
  flex-direction: row;
  border-width: 2px;
  border-color:#686d76;
  border-radius: 4px;
  align-items: center;
`
export const Titulo = styled.Text`
  margin-bottom: 5px;
  color: #666360;
  font-size: 18px;
`


export const Container = styled.View<ContainerProps>`
  width: 80%;
  height: 50px;
  margin: 3px 10% 10%; 
  background: #d3e0ea;
  flex-direction: column;

  ${(props: any) =>
    props.isErrored &&
    css`
      border-color: #f8f1f1;
    `}
  ${(props: any) =>
    props.isFocused &&
    css`
      color: #666360;
      border-color: #666360;
    `}
  ${(props: any) =>
    props.isFilled &&
    css`
      color: #007bff;
    `}
`;
export const TextInput = styled.TextInput`
  flex: 1;
  color: #666360;
  justify-content: center;
  text-align: center;
  font-size: 30px;
`;

export const Button = styled(RectButton)`
    min-width: 70px;
    height:50px;
    margin: -1px 0px 0px -1px;
    background:#666360;
    justify-content: center;
    align-items: center;
    border-color:#686d76;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size:30px;
    font-weight: bold;
`;