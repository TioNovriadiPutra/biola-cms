import { createDrawerNavigator } from "@react-navigation/drawer";

const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export { Stack, Drawer };
