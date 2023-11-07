import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import LoginTextInput from "@components/atoms/LoginTextInput";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { colors } from "@themes/colors";
import LoginSubmitButton from "@components/atoms/LoginSubmitButton";
import useAuth from "@hooks/useAuth";

const LoginForm = () => {
  const { control, handleSubmit } = useForm();
  const { login } = useAuth();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const emailOnSubmit = (refInput) => {
    refInput.current.focus();
  };

  return (
    <View style={styles.container}>
      <LoginTextInput
        refInput={emailRef}
        name="email"
        defaultValue={""}
        control={control}
        placeholder="Email"
        icon={<MaterialIcons name="email" size={20} color={colors.Modal} />}
        index={0}
        onSubmit={() => emailOnSubmit(passwordRef)}
      />

      <LoginTextInput
        refInput={passwordRef}
        name="password"
        defaultValue={""}
        control={control}
        placeholder="Password"
        icon={<FontAwesome5 name="lock" size={18} color={colors.Modal} />}
        index={1}
        password
        onSubmit={handleSubmit(login)}
      />

      <LoginSubmitButton handleSubmit={handleSubmit} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    gap: 30,
    width: "50%",
    alignSelf: "center",
  },
});
