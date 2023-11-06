import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import LoginBlock from "@components/atoms/LoginBlock";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const LoginTitle = () => {
  const titleAnim = useSharedValue(0);

  const titleAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(titleAnim.value, [0, 1], [-50, 0]);

    return {
      opacity: titleAnim.value,
      transform: [{ translateY }],
    };
  });

  const handleIn = () => {
    titleAnim.value = withTiming(1, { duration: 1000 });
  };

  useEffect(() => {
    handleIn();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, titleAnimatedStyle]}>LOGIN</Animated.Text>
      <LoginBlock animValue={titleAnim} />
    </View>
  );
};

export default LoginTitle;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  title: {
    fontFamily: fonts.PopBold,
    fontSize: 44,
    color: colors.Black,
    includeFontPadding: false,
  },
});
