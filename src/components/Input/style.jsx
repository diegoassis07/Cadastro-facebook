import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export const Input = styled.TextInput`
  width: ${({ width }) => width ?? width}%;
  height: ${({ height }) => height ?? 74}px;
  border-radius: 15px;
  background-color: #ffffff;
  border: 2px solid #5c5c5c;
  margin-bottom: -57px;
  color: black;
  font-size: 18px;
  padding-left: 15px;
`;
