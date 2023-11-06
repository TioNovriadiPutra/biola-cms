import { StyleSheet } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

const LoginBlock = ({ animValue }) => {
  const blockAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(animValue.value, [0, 1], [0, 55]);

    return {
      width: `${width}%`,
    };
  });

  return <Animated.View style={[styles.block, blockAnimatedStyle]} />;
};

export default LoginBlock;

const styles = StyleSheet.create({
  block: {
    backgroundColor: colors.PrimaryDark,
    height: 10,
    width: "55%",
    position: "absolute",
    bottom: 0,
    right: -30,
  },
});
