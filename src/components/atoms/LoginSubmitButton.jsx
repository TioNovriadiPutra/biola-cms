import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { AnimatedPressable } from "@utils/constant/animatedComponent";
import useAuth from "@hooks/useAuth";

const LoginSubmitButton = ({ handleSubmit }) => {
  const { login } = useAuth();

  const submitAnim = useSharedValue(0);

  const submitAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(submitAnim.value, [0, 1], [50, 0]);

    return {
      transform: [{ translateY }],
      opacity: submitAnim.value,
    };
  });

  const handleIn = () => {
    setTimeout(() => {
      submitAnim.value = withTiming(1, { duration: 1000 });
    }, 600);
  };

  useEffect(() => {
    handleIn();
  }, []);

  return (
    <AnimatedPressable style={[styles.button, submitAnimatedStyle]} onPress={handleSubmit(login)}>
      <Text style={styles.label}>Login</Text>
    </AnimatedPressable>
  );
};

export default LoginSubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.PrimaryDark,
    borderRadius: 10,
    alignSelf: "center",
    shadowOpacity: 0.2,
    shadowColor: colors.Black,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 20,
    paddingVertical: 11,
    paddingHorizontal: 80,
  },
  label: {
    fontFamily: fonts.MonBold,
    color: colors.White,
    fontSize: 16,
  },
});
