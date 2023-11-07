import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";

const DataHeader = ({ dataHead }) => {
  return (
    <View style={styles.container}>
      {dataHead.map((item, index) => (
        <View style={styles.head} key={index.toString()}>
          <Text style={styles.label}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default DataHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GrayBlur5,
    borderBottomWidth: 2,
    borderBottomColor: colors.GrayBlur,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  head: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: fonts.PopSemiBold,
    fontSize: 14,
    color: colors.Gray,
  },
});
