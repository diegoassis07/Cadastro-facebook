import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.COLORS_BG.primary};
  align-items: center;
`;
export const Img_Logo = styled.Image`
  width: 200px;
  height: 40px;
  margin-top: 150px;
`;
export const Label = styled.Text`
  font-size: 18px;
  color: ${theme.COLORS_INPUT.primary};
  font-weight: 500;
  margin-top: 25px;
  margin-bottom: 20px;
`;
export const ContentIcon = styled.View`
flex-direction: row;
gap: 8px;
margin-top: 25px;
`;
export const Icon_Meta = styled.Image`
width: 29px;
height: 20px;
`;
export const Meta_Text = styled.Text`
font-size: 20px;
font-weight: 700;
color: ${theme.COLORS_INPUT.primary};
`;
