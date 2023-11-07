import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { colors } from "@themes/colors";

const NavbarBlock = ({ activeScreen }) => {
  const blockAnim = useSharedValue(0);

  const blockAnimatedStyle = useAnimatedStyle(() => {
    const right = interpolate(blockAnim.value, [0, 1], [135, 0]);

    return {
      right,
    };
  });

  const handleAnim = () => {
    blockAnim.value = withTiming(activeScreen, { duration: 300 });
  };

  useEffect(() => {
    handleAnim();
  }, [activeScreen]);

  return <Animated.View style={[styles.block, blockAnimatedStyle]} />;
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
