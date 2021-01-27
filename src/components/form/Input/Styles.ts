import styled,{css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-color:#666360;

  ${(props: any) =>
    props.isErrored &&
    css`
      border-color: #f8f1f1;
    `}
  ${(props: any) =>
    props.isFocused &&
    css`
      color: #666360;
      border-color: #17a2b8;
    `}
  ${(props: any) =>
    props.isFilled &&
    css`
      color: #17a2b8;
    `}
`;
export const TextInput = styled.TextInput`
  flex: 1;
  color: #666360;
  font-size: 16px;
`;
export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;
