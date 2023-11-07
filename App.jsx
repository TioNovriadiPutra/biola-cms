import React from "react";
import { RecoilRoot } from "recoil";
import AppNav from "@navigation/AppNav";
import { useFonts } from "expo-font";
import LoadingScreen from "@components/modals/LoadingScreen";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("@assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("@assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("@assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("@assets/fonts/Poppins-Regular.ttf"),
    "Montserrat-Bold": require("@assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("@assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("@assets/fonts/Montserrat-SemiBold.ttf"),
  });

  const queryClient = new QueryClient();

  if (!fontsLoaded) return <LoadingScreen />;

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <AppNav />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
