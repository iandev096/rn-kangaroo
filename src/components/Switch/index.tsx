import React from "react";
import { GestureResponderEvent, Pressable, ViewStyle } from "react-native";
import Animated, { Easing, Layout } from "react-native-reanimated";
import COLOR from "src/constants/COLOR";
import { styles } from "./styles";

type Props = {
  onPress?: (event: GestureResponderEvent) => void;
  value: boolean;
  containerStyle?: ViewStyle;
};

function Switch({ onPress, value, containerStyle }: Props) {
  const trackBg = value ? COLOR.PRIMARY_A : COLOR.GRAY_100;
  const thumbAlignSelf = value ? "flex-end" : "flex-start";

  return (
    <Animated.View style={containerStyle}>
      <Pressable onPress={onPress} hitSlop={12}>
        <Animated.View style={[styles.track, { backgroundColor: trackBg }]}>
          <Animated.View
            style={[styles.thumb, { alignSelf: thumbAlignSelf }]}
            layout={Layout.easing(Easing.out(Easing.ease))}
          >
            <Animated.View style={styles.thumbInner} />
          </Animated.View>
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
}

export default Switch;
