import { ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import { colors } from "@themes/colors";

const LoadingScreen = () => {
  return (
    <MainContainer style={styles.container}>
      <ActivityIndicator size={"large"} color={colors.Primary} />
    </MainContainer>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
