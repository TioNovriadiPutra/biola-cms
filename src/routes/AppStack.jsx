import React from "react";
import Home from "@screens/app/Home";
import { Drawer } from "@utils/constant/navigation";
import CustomDrawer from "@components/organisms/CustomDrawer";
import Assessment from "@screens/app/Assessment";
import Course from "@screens/app/Course";

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
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Drawer.Screen name="Assessment" component={Assessment} options={{ headerShown: false }} />
      <Drawer.Screen name="Course" component={Course} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};

export default AppStack;
