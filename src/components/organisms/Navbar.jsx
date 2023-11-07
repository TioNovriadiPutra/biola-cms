import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import NavbarButtonList from "@components/molecules/NavbarButtonList";
import NavbarExtraFunction from "@components/molecules/NavbarExtraFunction";

const Navbar = ({
  listItem,
  activeScreen,
  setActiveScreen,
  withExtraFunction,
  withSeacrh,
}) => {
  return (
    <View style={styles.container}>
      <NavbarButtonList
        listItem={listItem}
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
      />

      {withExtraFunction && (
        <NavbarExtraFunction
          withSearch={withSeacrh}
          withButton={[
            {
              label: "Create",
            },
          ]}
        />
      )}
    </View>
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
