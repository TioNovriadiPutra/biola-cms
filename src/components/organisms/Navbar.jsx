import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import NavbarButtonList from "@components/molecules/NavbarButtonList";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const Navbar = ({ listItem, activeScreen, setActiveScreen, withExtraFunction, withSeacrh }) => {
  const navbarAnim = useSharedValue(0);

  const handleIn = () => {
    navbarAnim.value = withTiming(1, { duration: 1000 });
  };

  const navbarAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(navbarAnim.value, [0, 1], [0, 100]);

    return {
      width: `${width}%`,
      opacity: navbarAnim.value,
    };
  });

  useEffect(() => {
    handleIn();
  }, []);

  return (
    <Animated.View style={[styles.container, navbarAnimatedStyle]}>
      <NavbarButtonList listItem={listItem} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </Animated.View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: colors.GrayBlur,
  },
});
