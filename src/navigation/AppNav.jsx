import React, { useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "@routes/AuthStack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomToastMessage from "@components/molecules/CustomToastMessage";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toastRefState } from "@store/toastState";
import AppStack from "@routes/AppStack";
import { userTokenState } from "@store/authState";

const AppNav = () => {
  const setToast = useSetRecoilState(toastRefState);
  const userToken = useRecoilValue(userTokenState);

  const toastRef = useRef(null);

  useEffect(() => {
    setToast(toastRef);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CustomToastMessage ref={toastRef} />
      <NavigationContainer>{userToken ? <AppStack /> : <AuthStack />}</NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default AppNav;
