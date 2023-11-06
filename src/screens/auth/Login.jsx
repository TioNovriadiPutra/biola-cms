import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import LoginLeftSection from "@components/organisms/LoginLeftSection";
import LoginRightSection from "@components/organisms/LoginRightSection";
import LoadingModal from "@components/modals/LoadingModal";
import { useRecoilValue } from "recoil";
import { loadingState } from "@store/authState";

const Login = () => {
  const loading = useRecoilValue(loadingState);

  return (
    <MainContainer style={styles.container}>
      <LoginLeftSection />
      <LoginRightSection />
      <LoadingModal visible={loading} />
    </MainContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
