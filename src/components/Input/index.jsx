import * as S from "./style";

const Input = ({
  placeholder,
  width,
  height,
  onChangeText,
  value,
  onBlur,
  keyboardType,
  placeholderTextColor,
  secureTextEntry
}) => {
  return (
    <S.Container>
      <S.Input
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        }}
        placeholder={placeholder}
        width={width}
        height={height}
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
      />
    </S.Container>
  );
};
export { Input };
