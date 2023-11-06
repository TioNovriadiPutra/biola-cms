import React from "react";
import { RecoilRoot } from "recoil";
import AppNav from "@navigation/AppNav";
import { useFonts } from "expo-font";
import LoadingScreen from "@components/modals/LoadingScreen";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("@assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("@assets/fonts/Poppins-Medium.ttf"),
    "Montserrat-Bold": require("@assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("@assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("@assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) return <LoadingScreen />;

  return (
    <RecoilRoot>
      <AppNav />
    </RecoilRoot>
  );
};

export default App;
