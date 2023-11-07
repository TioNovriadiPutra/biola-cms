import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";

const NavbarExtraButton = ({ label, color = colors.Primary, withBorder }) => {
  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: color,
          borderWidth: withBorder && 2,
          borderColor: colors.GrayWhite,
        },
      ]}
    >
      <Text
        style={[
          styles.label,
          { color: color === colors.Primary ? colors.White : colors.Gray },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default NavbarExtraButton;

const styles = StyleSheet.create({
  button: {
    width: 115,
    alignItems: "center",
    borderRadius: 8,
  },
  label: {
    fontFamily: fonts.PopSemiBold,
    fontSize: 14,
    color: colors.White,
  },
});
