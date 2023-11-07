import { StyleSheet } from "react-native";
import React, { useState } from "react";
import MainContainer from "@containers/MainContainer";
import Navbar from "@components/organisms/Navbar";
import { homeNavbar } from "@utils/constant/navbar";

const Home = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <MainContainer style={styles.container}>
      <Navbar
        listItem={homeNavbar}
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        withExtraFunction
      />
    </MainContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: "3%",
  },
});
