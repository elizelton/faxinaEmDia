import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    min-width: 95%;
    height:60px;
    background:#17a2b8;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-top:8px;
    border-width: 2px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size:18px;
`;