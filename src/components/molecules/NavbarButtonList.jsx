import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import NavbarBlock from "@components/atoms/NavbarBlock";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const NavbarButtonList = ({ listItem, activeScreen, setActiveScreen }) => {
  const inAnim = useSharedValue(0);

  const handlePress = (index) => {
    setActiveScreen(index);
  };

  const handleIn = () => {
    inAnim.value = withTiming(1, { duration: 1000 });
  };

  const navbarAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(inAnim.value, [0, 1], [-50, 0]);

    return {
      transform: [{ translateY }],
      opacity: inAnim.value,
    };
  });

  useEffect(() => {
    handleIn();
  }, []);

  return (
    <Animated.View style={[styles.container, navbarAnimatedStyle]}>
      <FlatList
        data={listItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable style={styles.button} onPress={() => handlePress(index)}>
            <Text
              style={[
                styles.label,
                {
                  color: activeScreen === index ? colors.Primary : colors.Gray,
                },
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        )}
      />

      <NavbarBlock activeScreen={activeScreen} />
    </Animated.View>
  );
};

export default NavbarButtonList;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 7,
  },
  list: {
    gap: 20,
  },
  button: {
    width: 115,
    alignItems: "center",
  },
  label: {
    fontFamily: fonts.PopBold,
    fontSize: 16,
  },
});
