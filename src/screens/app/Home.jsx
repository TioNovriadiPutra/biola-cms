import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import MainContainer from "@containers/MainContainer";
import Navbar from "@components/organisms/Navbar";
import { homeNavbar } from "@utils/constant/navbar";
import ScreenSlider from "@components/organisms/ScreenSlider";
import { useRecoilState, useSetRecoilState } from "recoil";
import { homeScreenState } from "@store/homeState";
import useFetchData from "@hooks/useFetchData";
import { ENDPOINT } from "@utils/config/endpoint";
import LoadingScreen from "@components/modals/LoadingScreen";
import { navState } from "@store/navState";

const Home = ({ navigation }) => {
  const [sliderScreen, setSliderScreen] = useRecoilState(homeScreenState);
  const setNav = useSetRecoilState(navState);

  const dataBatch = useFetchData(ENDPOINT.getAllBatches, false);
  const dataStudent = useFetchData(ENDPOINT.getAllStudents, true);

  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    setNav(navigation);
  }, []);

  useEffect(() => {
    if (dataBatch.data && dataStudent.data) {
      const oldData = [...sliderScreen];

      const newData = oldData.map((item, index) => {
        return {
          head: item.head,
          data: item.filtering(
            index === 0 ? dataStudent.data.data : dataBatch.data.data
          ),
          fullData: index === 0 ? dataStudent.data.data : dataBatch.data.data,
          filtering: item.filtering,
          detail: item.detail,
          detailScreen: item.detailScreen,
        };
      });

      setSliderScreen(newData);
    }
  }, [dataBatch.data, dataStudent.data]);

  if (dataBatch.isLoading || dataStudent.isLoading) return <LoadingScreen />;

  return (
    <MainContainer style={styles.container}>
      <Navbar
        listItem={homeNavbar}
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        withExtraFunction
      />
      <ScreenSlider
        screens={sliderScreen}
        setScreen={setSliderScreen}
        type="data"
        activeScreen={activeScreen}
      />
    </MainContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: "3%",
    paddingBottom: "1%",
    gap: 15,
  },
});
