import { Input } from "./../../components/Input";
import { Button } from "./../../components/Button";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import * as S from "./style";

export default function SignIn() {
  const Navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <S.Container>
      <S.Img_Logo source={require("./../../assets/Logo-Facebook.jpg")} />
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <Input
            width={370}
            height={65}
            placeholder="Mobile number or email address"
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Input
            width={370}
            height={65}
            placeholder="Password"
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            secureTextEntry={true}
            ke
          />
        )}
      />
      <Button width={90} height={50} text="Log In" onPress={handleSubmit()} />

      <S.Label onPress={() => Navigation.navigate("SignIn")}>
        Forgotten Password?
      </S.Label>

      <Button
        width={90}
        height={50}
        text="Create new account"
        backgroundColor="transparent"
        color={"#368cf5"}
        onPress={() => Navigation.navigate("SignUp")}
      />
      <S.ContentIcon>
        <S.Icon_Meta source={require("./../../assets/Logo-meta.png")} />
        <S.Meta_Text>Meta</S.Meta_Text>
      </S.ContentIcon>
    </S.Container>
  );
}
