import React from "react";
import Home from "@screens/app/Home";
import { Drawer, Stack } from "@utils/constant/navigation";
import CustomDrawer from "@components/organisms/CustomDrawer";
import Assessment from "@screens/app/Assessment";
import Course from "@screens/app/Course";
import StudentDetail from "@screens/app/StudentDetail";
import BatchDetail from "@screens/app/BatchDetail";

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerType: "permanent",
        drawerStyle: {
          width: 100,
        },
        drawerItemStyle: {
          padding: 0,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Assessment"
        component={Assessment}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Course"
        component={Course}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StudentDetail"
        component={StudentDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BatchDetail"
        component={BatchDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
