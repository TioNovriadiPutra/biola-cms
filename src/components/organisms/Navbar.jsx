import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text>Navbar</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
