import React from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

type Props = { image: Animated.Image["props"]["source"] };

function CarouselImage({ image }: Props) {
  return (
    <Animated.Image
      entering={FadeIn.duration(300)}
      exiting={FadeOut.duration(300)}
      source={image}
      style={{ height: 160, width: 327 }}
    />
  );
}

export default CarouselImage;
