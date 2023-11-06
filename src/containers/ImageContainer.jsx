import { ImageBackground, StyleSheet } from "react-native";
import React from "react";

const ImageContainer = ({ children, source, style }) => {
  return (
    <ImageBackground source={source} style={[styles.container, style]}>
      {children}
    </ImageBackground>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "contain",
  },
});
