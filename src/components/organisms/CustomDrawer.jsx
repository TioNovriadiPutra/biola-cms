import { StyleSheet, View } from "react-native";
import React from "react";
import OpenDrawerButton from "@components/atoms/OpenDrawerButton";
import { colors } from "@themes/colors";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import DrawerItemButton from "@components/atoms/DrawerItemButton";
import useAuth from "@hooks/useAuth";

const CustomDrawer = (props) => {
  const { logout } = useAuth();

  const activeRoute = props.navigation.getState().routes[props.navigation.getState().index].name;

  const drawerAnim = useSharedValue(0);

  const handleItemPressNav = (nav) => {
    props.navigation.navigate(nav);

    drawerAnim.value = withTiming(0, { duration: 300 });
  };

  const handleLogout = () => {
    logout();
  };

  const drawerAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(drawerAnim.value, [0, 1], [100, 300]);

    return {
      width: `${width}%`,
    };
  });

  const logoAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(drawerAnim.value, [0, 1], [0, 130]);
    return {
      opacity: drawerAnim.value,
      width,
    };
  });

  return (
    <Animated.View style={[styles.container, drawerAnimatedStyle]}>
      <OpenDrawerButton animValue={drawerAnim} />
      <Animated.Image source={require("@assets/images/drawerIcon.png")} style={[styles.logo, logoAnimatedStyle]} />
      <View style={{ gap: 50, flex: 1 }}>
        <DrawerItemButton
          image={activeRoute === "Home" ? require("@assets/images/studentActive.png") : require("@assets/images/studentInactive.png")}
          label="Student"
          color={activeRoute === "Home" ? colors.Primary : colors.Gray}
          onPress={() => handleItemPressNav("Home")}
        />
        <DrawerItemButton
          image={activeRoute === "Assessment" ? require("@assets/images/assessmentActive.png") : require("@assets/images/assessmentInactive.png")}
          label="Assessment"
          color={activeRoute === "Assessment" ? colors.Primary : colors.Gray}
          onPress={() => handleItemPressNav("Assessment")}
        />
        <DrawerItemButton
          image={activeRoute === "Course" ? require("@assets/images/courseActive.png") : require("@assets/images/courseInactive.png")}
          label="Course"
          color={activeRoute === "Course" ? colors.Primary : colors.Gray}
          onPress={() => handleItemPressNav("Course")}
        />
      </View>

      <DrawerItemButton image={require("@assets/images/logout.png")} label="Logout" color={colors.Gray} onPress={handleLogout} />
    </Animated.View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingVertical: 23,
    shadowColor: colors.Black,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowRadius: 8,
    backgroundColor: colors.White,
    paddingHorizontal: 20,
  },
  logo: {
    width: 175,
    height: 130,
    alignSelf: "center",
    marginBottom: 50,
  },
});
