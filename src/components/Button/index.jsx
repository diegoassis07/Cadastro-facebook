import * as S from "./styled";

const Button = ({ width, height, backgroundColor, text, color, onPress,borderRadius,borderColor }) => {
  return (
    <S.Button
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      text={text}
      onPress={onPress}
      borderRadius={borderRadius}
      borderColor={borderColor}
    >
      <S.TextButton color={color}>{text}</S.TextButton>
    </S.Button>
  );
};
export { Button };
