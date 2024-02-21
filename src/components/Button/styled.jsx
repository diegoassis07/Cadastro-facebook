import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: ${({ width }) => width ?? width}%;
  height: ${({ height }) => height ?? height}px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? " #368cf5"};
  border-radius: ${({borderRadius}) => borderRadius ?? 20}px;
  border: ${({borderColor}) => borderColor ??"#368cf5"};;
  margin-top: 65px;
  justify-content: center;
  align-items: center;
`;
export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({ color }) => color ?? "#ffffff"};
`;
