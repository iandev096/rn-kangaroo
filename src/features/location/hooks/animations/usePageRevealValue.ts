import {
  EventListenerCallback,
  EventMapCore,
  StackNavigationState,
  useNavigation,
} from "@react-navigation/native";
import { StackNavigationEventMap } from "@react-navigation/stack";
import { useEffect } from "react";
import { Animated, Easing } from "react-native";
import BEZIER from "src/constants/BEZIER";
import useAnimatedVal from "src/hooks/useAnimatedVal";

type BeforeRemoveFn = EventListenerCallback<
  StackNavigationEventMap & EventMapCore<StackNavigationState<any>>,
  "beforeRemove"
>;

function usePageRevealValue() {
  const progress = useAnimatedVal(0);
  const navigation = useNavigation();

  useEffect(function onEnter() {
    Animated.timing(progress, {
      toValue: 1,
      duration: 300,
      easing: Easing.bezier(...BEZIER.easeOutExpo),
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(function onLeave() {
    const beforeRemoveHandler: BeforeRemoveFn = (e) => {
      console.log("before removed");
      e.preventDefault();
      Animated.timing(progress, {
        toValue: 0,
        duration: 300,
        easing: Easing.bezier(...BEZIER.easeInCubic),
        useNativeDriver: true,
      }).start(() => navigation.dispatch(e.data.action));
    };

    navigation.addListener("beforeRemove", beforeRemoveHandler);

    return () => navigation.removeListener("beforeRemove", beforeRemoveHandler);
  }, []);

  return progress;
}

export default usePageRevealValue;
