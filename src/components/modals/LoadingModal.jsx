import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import { colors } from "@themes/colors";

const LoadingModal = ({ visible }) => {
  return (
    <Modal visible={visible} transparent>
      <MainContainer style={styles.container}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={colors.Primary} />
        </View>
      </MainContainer>
    </Modal>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.Modal,
  },
  loader: {
    backgroundColor: colors.White,
    padding: 20,
    borderRadius: 10,
  },
});
