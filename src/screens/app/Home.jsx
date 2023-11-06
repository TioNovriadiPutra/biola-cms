import { Text, StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import Navbar from "@components/organisms/Navbar";

const Home = () => {
  return (
    <MainContainer style={styles.container}>
      <Navbar />
    </MainContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 70,
  },
});
