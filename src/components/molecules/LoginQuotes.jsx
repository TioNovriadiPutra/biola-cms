import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const LoginQuotes = () => {
  const quotesAnim = useSharedValue(0);

  const quotesAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(quotesAnim.value, [0, 1], [0, 45]);
    const opacity = interpolate(quotesAnim.value, [0, 1], [0, 1]);

    return {
      height: `${height}%`,
      opacity,
    };
  });

  const handleIn = () => {
    quotesAnim.value = withTiming(1, { duration: 1000 });
  };

  useEffect(() => {
    handleIn();
  }, []);

  return (
    <Animated.View style={[styles.container, quotesAnimatedStyle]}>
      <Text style={styles.title}>"Lorem Ipsum"</Text>
      <Text style={styles.quotes}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet arcu urna, nec auctor neque vehicula eu. Quisque vehicula odio finibus nisi semper, a malesuada nunc pulvinar.
      </Text>
    </Animated.View>
  );
};

export default LoginQuotes;

const styles = StyleSheet.create({
  container: {
    height: "45%",
    backgroundColor: colors.PrimaryDark,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    position: "absolute",
    bottom: 0,
    overflow: "hidden",
  },
  title: {
    fontFamily: fonts.MonBold,
    fontSize: 24,
    color: colors.White,
  },
  quotes: {
    fontFamily: fonts.MonMedium,
    fontSize: 16,
    color: colors.White,
    textAlign: "center",
    marginHorizontal: 20,
  },
});
