import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import BackButton from "@components/atoms/BackButton";
import StudentDetailHeader from "@components/organisms/StudentDetailHeader";

const StudentDetail = ({ route }) => {
  const { data } = route.params;

  console.log(data);

  return (
    <MainContainer style={styles.container}>
      <BackButton />
      <StudentDetailHeader />
    </MainContainer>
  );
};

export default StudentDetail;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: "3%",
    paddingBottom: "1%",
  },
});
