import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import LoginTitle from "@components/molecules/LoginTitle";
import LoginForm from "@components/molecules/LoginForm";

const LoginRightSection = () => {
  return (
    <MainContainer style={styles.container}>
      <LoginTitle />
      <LoginForm />
    </MainContainer>
  );
};

export default LoginRightSection;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: "center",
    gap: 60,
  },
});
