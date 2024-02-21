import styled from "styled-components/native";
import { theme } from "./../../global/theme";

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.COLORS_BG.primary};
`;
export const Img_Logo = styled.Image`
  width: 200px;
  height: 40px;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.COLORS_INPUT.primary};
  margin-top: 50px;
  right: 90px;
`;
export const ContentInput = styled.View`
  gap: 10px;
  bottom: 40px;
`;
export const Label = styled.Text`
color: ${theme.COLORS_INPUT.primary};
font-size: 13px;
font-weight: 500;
right: 90px;
margin-top: 15px;
`;