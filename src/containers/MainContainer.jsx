import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const MainContainer = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
});
