import { StyleSheet } from "react-native";
import React from "react";
import ImageContainer from "@containers/ImageContainer";
import { Image } from "expo-image";
import LoginQuotes from "@components/molecules/LoginQuotes";

const LoginLeftSection = () => {
  return (
    <ImageContainer source={require("@assets/images/loginBackground.png")} style={styles.container}>
      <Image source={require("@assets/images/loginVector.png")} style={styles.vector} />
      <LoginQuotes />
    </ImageContainer>
  );
};

export default LoginLeftSection;

const styles = StyleSheet.create({
  container: {
    resizeMode: "repeat",
  },
  vector: {
    width: "70%",
    height: "50%",
    alignSelf: "center",
    resizeMode: "contain",
  },
});
