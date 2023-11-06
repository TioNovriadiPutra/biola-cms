import React from "react";
import { Stack } from "@utils/constant/navigation";
import Login from "@screens/auth/Login";

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStack;
