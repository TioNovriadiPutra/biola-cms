import { FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MainContainer from "@containers/MainContainer";
import DataScreen from "@components/molecules/DataScreen";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const ScreenSlider = ({ screens, type, activeScreen }) => {
  const [sliderLayout, setSliderLayout] = useState(null);

  const listRef = useRef(null);

  const sliderAnim = useSharedValue(0);

  const handleSlide = () => {
    listRef.current.scrollToIndex({ animation: true, index: activeScreen });
  };

  const handleIn = () => {
    sliderAnim.value = withTiming(1, { duration: 1000 });
  };

  const sliderAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(sliderAnim.value, [0, 1], [50, 0]);

    return {
      transform: [{ translateY }],
      opacity: sliderAnim.value,
    };
  });

  useEffect(() => {
    handleSlide();
  }, [activeScreen]);

  useEffect(() => {
    handleIn();
  }, []);

  return (
    <MainContainer
      onLayout={(event) => {
        setSliderLayout(event.nativeEvent.layout.width);
      }}
    >
      <Animated.View style={[sliderAnimatedStyle, { flex: 1 }]}>
        <FlatList
          ref={listRef}
          data={screens}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return type === "data" ? <DataScreen parentWidth={sliderLayout} dataHead={item.head} dataItem={item.data} /> : null;
          }}
        />
      </Animated.View>
    </MainContainer>
  );
};

export default ScreenSlider;
