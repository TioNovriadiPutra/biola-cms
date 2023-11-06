import { Image, StyleSheet, View } from "react-native";
import React from "react";
import DrawerItemButton from "@components/atoms/DrawerItemButton";

const DrawerList = (props) => {
  return (
    
      <DrawerItemButton {...props} />
    </View>
  );
};

export default DrawerList;

const styles = StyleSheet.create({
  icon: {
    width: 60,
    height: 60,
  },
});
