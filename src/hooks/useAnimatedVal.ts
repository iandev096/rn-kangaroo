import { useRef } from "react";
import { Animated } from "react-native";

function useAnimatedVal(value: number) {
  const val = useRef(new Animated.Value(value)).current;

  return val;
}

export default useAnimatedVal;
