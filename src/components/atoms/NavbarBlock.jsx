import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { colors } from "@themes/colors";

const NavbarBlock = ({ activeScreen }) => {
  const blockAnim = useSharedValue(0);
  const inAnim = useSharedValue(0);

  const handleAnim = () => {
    blockAnim.value = withTiming(activeScreen, { duration: 300 });
  };

  const handleIn = () => {
    setTimeout(() => {
      inAnim.value = withTiming(1, { duration: 1000 });
    }, 850);
  };

  const blockAnimatedStyle = useAnimatedStyle(() => {
    const right = interpolate(blockAnim.value, [0, 1], [135, 0]);

    return {
      right,
    };
  });

  const inAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(inAnim.value, [0, 1], [0, 115]);

    return {
      width,
    };
  });

  useEffect(() => {
    handleIn();
  }, []);

  useEffect(() => {
    handleAnim();
  }, [activeScreen]);

  return <Animated.View style={[styles.block, blockAnimatedStyle, inAnimatedStyle]} />;
};

export default NavbarBlock;

const styles = StyleSheet.create({
  block: {
    width: 115,
    height: 6,
    backgroundColor: colors.Primary,
    position: "absolute",
    bottom: -4,
  },
});
