import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { useRecoilValue } from "recoil";
import { navState } from "@store/navState";

const BackButton = () => {
  const nav = useRecoilValue(navState);

  const handlePress = () => {
    nav.goBack();
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image source={require("@assets/images/back.png")} style={styles.icon} />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  icon: {
    width: 21,
    height: 17,
    resizeMode: "contain",
  },
  container: {
    backgroundColor: colors.GrayWhite,
    alignSelf: "flex-start",
    padding: 15,
    borderRadius: 10,
  },
});
