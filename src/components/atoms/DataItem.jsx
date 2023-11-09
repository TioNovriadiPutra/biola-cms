import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import { useRecoilValue } from "recoil";
import { navState } from "@store/navState";

const DataItem = ({ item, fullData, detailFunc, detailScreen }) => {
  const nav = useRecoilValue(navState);

  const handlePress = () => {
    const detailData = detailFunc(fullData, item[0]);

    nav.navigate(detailScreen, {
      data: detailData,
    });
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      {item.map((item, index) => (
        <View style={styles.itemContainer} key={index.toString()}>
          <Text style={styles.item}>{item}</Text>
        </View>
      ))}
    </Pressable>
  );
};

export default DataItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.GrayBlur,
    paddingVertical: 12,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    fontFamily: fonts.PopRegular,
    fontSize: 14,
    color: colors.Black,
  },
});
