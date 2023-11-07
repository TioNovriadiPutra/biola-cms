import { StyleSheet, TextInput } from "react-native";
import React, { useEffect } from "react";
import { useController } from "react-hook-form";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const LoginTextInput = ({ name, defaultValue, control, placeholder, icon, index, password, refInput, onSubmit }) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

  const inputAnim = useSharedValue(0);

  const inputAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(inputAnim.value, [0, 1], [50, 0]);

    return {
      transform: [{ translateY }],
      opacity: inputAnim.value,
    };
  });

  const handleIn = () => {
    setTimeout(() => {
      inputAnim.value = withTiming(1, { duration: 1000 });
    }, 300 * index);
  };

  useEffect(() => {
    handleIn();
  }, []);

  return (
    <Animated.View style={[styles.container, inputAnimatedStyle]}>
      {icon}
      <TextInput
        ref={refInput}
        value={field.value}
        placeholder={placeholder}
        placeholderTextColor={colors.Modal}
        onChangeText={field.onChange}
        style={styles.input}
        secureTextEntry={password}
        onSubmitEditing={onSubmit}
      />
    </Animated.View>
  );
};

export default LoginTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LightGrey,
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  input: {
    fontFamily: fonts.MonMedium,
    fontSize: 14,
    color: colors.Black,
    outlineStyle: "none",
    flex: 1,
  },
});
