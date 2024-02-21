import { Input } from "./../../components/Input";
import { Button } from "./../../components/Button";

import { Keyboard, TouchableWithoutFeedback } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";
import * as S from "./style";

export default function SignUp() {
  const Navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <S.Container>
        <S.Img_Logo source={require("./../../assets/Logo-Facebook.jpg")} />
        <S.Title>Create an account:</S.Title>
        <S.ContentInput>
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <Input
                width={370}
                height={60}
                placeholder="Username"
                onChangeText={field.onChange}
                value={field.value}
                onBlur={field.onBlur}
                placeholderTextColor="#7c7c7c"
              />
            )}
          />
          <Controller
            control={control}
            name="surname"
            render={({ field }) => (
              <Input
                width={370}
                height={60}
                placeholder="Surname"
                onChangeText={field.onChange}
                value={field.value}
                onBlur={field.onBlur}
                placeholderTextColor="#7c7c7c"
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                width={370}
                height={60}
                placeholder="email"
                onChangeText={field.onChange}
                value={field.value}
                onBlur={field.onBlur}
                placeholderTextColor="#7c7c7c"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input
                width={370}
                height={60}
                placeholder="Password"
                onChangeText={field.onChange}
                value={field.value}
                onBlur={field.onBlur}
                keyboardType="numeric"
                placeholderTextColor="#7c7c7c"
              />
            )}
          />
          <Controller
            control={control}
            name="telephone"
            render={({ field }) => (
              <Input
                width={370}
                height={60}
                placeholder="Telephone"
                onChangeText={field.onChange}
                value={field.value}
                onBlur={field.onBlur}
                keyboardType="numeric"
                placeholderTextColor="#7c7c7c"
              />
            )}
          />
        </S.ContentInput>
        <Button
          width={90}
          height={50}
          color={"#ffffff"}
          text="Register"
          backgroundColor={"#01cc23"}
          borderRadius={10}
          borderColor={"transparent"}
          onPress={handleSubmit(Register)}
        />
        <S.Label onPress={() => Navigation.goBack()}>
          Do you already have an account ?
        </S.Label>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
