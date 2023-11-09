import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BatchDetail = ({ route }) => {
  const { data } = route.params;

  return (
    <View>
      <Text>BatchDetail</Text>
    </View>
  );
};

export default BatchDetail;

const styles = StyleSheet.create({});
