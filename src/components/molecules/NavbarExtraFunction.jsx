import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "@components/atoms/SearchBar";
import NavbarExtraButton from "@components/atoms/NavbarExtraButton";

const NavbarExtraFunction = ({ withSearch, withButton }) => {
  return (
    <View style={styles.container}>
      {withSearch && <SearchBar />}

      {withButton.map((item) => (
        <NavbarExtraButton label={item.label} />
      ))}
    </View>
  );
};

export default NavbarExtraFunction;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
  },
});
