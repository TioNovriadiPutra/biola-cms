import { Image, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { AnimatedPressable } from "@utils/constant/animatedComponent";
import { interpolate, useAnimatedStyle, withTiming } from "react-native-reanimated";

const OpenDrawerButton = ({ animValue }) => {
  const handlePress = () => {
    if (animValue.value === 0) {
      animValue.value = withTiming(1, { duration: 300 });
    } else if (animValue.value === 1) {
      animValue.value = withTiming(0, { duration: 300 });
    }
  };

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(animValue.value, [0, 1], [0, 180]);
    const right = interpolate(animValue.value, [0, 1], [20, -30]);

    return {
      transform: [{ rotate: `${rotate}deg` }],
      right,
    };
  });

  return (
    <AnimatedPressable style={[styles.button, buttonAnimatedStyle]} onPress={handlePress}>
      <Image source={require("@assets/images/drawerArrow.png")} style={styles.icon} />
    </AnimatedPressable>
  );
};

export default OpenDrawerButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.Primary,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    position: "absolute",
    top: 43,
    zIndex: 999,
  },
  icon: {
    width: 22,
    height: 22,
  },
});
