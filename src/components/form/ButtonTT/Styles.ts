import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
    width: 70%;
    height:50px;
    border-radius: 4px;
    background: #17a2b8;
    justify-content: center;
    align-items: center;
    margin-top:8px;
    border-color:red;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size:18px;
`;