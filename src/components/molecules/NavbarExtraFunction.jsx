import { StyleSheet, View } from "react-native";
import React from "react";
import SearchBar from "@components/atoms/SearchBar";
import NavbarExtraButton from "@components/atoms/NavbarExtraButton";

const NavbarExtraFunction = ({ withSearch, withButton }) => {
  return (
    <View style={styles.container}>
      {withSearch && <SearchBar />}

      {withButton.map((item, index) => (
        <NavbarExtraButton label={item.label} key={index.toString} />
      ))}
    </View>
  );
};

export default NavbarExtraFunction;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
