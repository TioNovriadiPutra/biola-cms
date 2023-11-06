import { StyleSheet, Text, View } from "react-native";
import React, { forwardRef, useCallback, useImperativeHandle } from "react";
import { useRecoilState } from "recoil";
import { showToastState, toastMessageState, toastTypeState } from "@store/toastState";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import { FontAwesome } from "@expo/vector-icons";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withDelay, withSequence, withTiming } from "react-native-reanimated";

const CustomToastMessage = forwardRef(({}, ref) => {
  const [showToast, setShowToast] = useRecoilState(showToastState);
  const [toastType, setToastType] = useRecoilState(toastTypeState);
  const [toastMessage, setToastMessage] = useRecoilState(toastMessageState);

  const toastTopAnim = useSharedValue(-100);

  useImperativeHandle(
    ref,
    () => ({
      show,
    }),
    [show]
  );

  const show = useCallback(({ type, message }) => {
    setShowToast(true);
    setToastType(type);
    setToastMessage(message);

    toastTopAnim.value = withSequence(
      withTiming(30, { duration: 1000 }),
      withDelay(
        2000,
        withTiming(-100, { duration: 1000 }, (finish) => {
          if (finish) {
            runOnJS(setShowToast)(false);
          }
        })
      )
    );
  }, []);

  const toastTopAnimatedStyle = useAnimatedStyle(() => {
    return {
      top: toastTopAnim.value,
    };
  });

  return (
    <>
      {showToast && (
        <Animated.View style={[styles.container, { backgroundColor: toastType === "success" ? colors.Success : toastType === "warning" ? colors.Warning : colors.Info }, toastTopAnimatedStyle]}>
          <View style={[styles.icon, { backgroundColor: toastType === "success" ? colors.SuccessSolid : toastType === "warning" ? colors.WarningSolid : colors.InfoSolid }]}>
            <FontAwesome name={toastType === "success" ? "check" : "info"} color={toastType === "success" ? colors.Success : toastType === "warning" ? colors.Warning : colors.Info} size={16} />
          </View>

          <Text style={styles.message}>{toastMessage}</Text>
        </Animated.View>
      )}
    </>
  );
});

export default CustomToastMessage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    position: "absolute",
    width: "50%",
    alignSelf: "center",
    zIndex: 99999,
    gap: 18,
  },
  message: {
    fontFamily: fonts.MonSemiBold,
    fontSize: 14,
    color: colors.Black,
  },
  icon: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
});
