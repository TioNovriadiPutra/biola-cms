import { StyleSheet, View } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import LoginTextInput from "@components/atoms/LoginTextInput";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { colors } from "@themes/colors";
import LoginSubmitButton from "@components/atoms/LoginSubmitButton";

const LoginForm = () => {
  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.container}>
      <LoginTextInput name="email" defaultValue={""} control={control} placeholder="Email" icon={<MaterialIcons name="email" size={20} color={colors.Modal} />} index={0} />
      <LoginTextInput name="password" defaultValue={""} control={control} placeholder="Password" icon={<FontAwesome5 name="lock" size={18} color={colors.Modal} />} index={1} password />
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
