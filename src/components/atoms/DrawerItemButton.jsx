import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import { AnimatedPressable } from "@utils/constant/animatedComponent";
import { fonts } from "@themes/fonts";

const DrawerItemButton = ({ image, label, color, onPress }) => {
  return (
    <AnimatedPressable style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.icon} />

      <Text style={[styles.label, { color }]}>{label}</Text>
    </AnimatedPressable>
  );
};

export default DrawerItemButton;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 33,
    overflow: "hidden",
  },
  icon: {
    width: 40,
    height: 40,
  },
  label: {
    fontFamily: fonts.PopMedium,
    fontSize: 16,
  },
});
