import { StyleProp, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";

export type ReanimatedViewStyle = StyleProp<
  Animated.AnimateStyle<StyleProp<ViewStyle>>
>;
