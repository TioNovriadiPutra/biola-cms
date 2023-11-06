const { Pressable } = require("react-native");
const { default: Animated } = require("react-native-reanimated");

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export { AnimatedPressable };
