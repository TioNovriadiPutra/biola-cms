import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import DataHeader from "@components/atoms/DataHeader";
import DataItem from "@components/atoms/DataItem";

const DataScreen = ({
  parentWidth,
  dataHead,
  dataItem,
  fullData,
  detailFunc,
  detailScreen,
}) => {
  return (
    <View style={[styles.container, { width: parentWidth }]}>
      <DataHeader dataHead={dataHead} />
      <FlatList
        data={dataItem}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <DataItem
            item={item}
            fullData={fullData}
            detailFunc={detailFunc}
            detailScreen={detailScreen}
          />
        )}
      />
    </View>
  );
};

export default DataScreen;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.GrayBlur,
    borderRadius: 10,
  },
});
