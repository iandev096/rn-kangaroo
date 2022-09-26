import React from "react";
import { PressableProps, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import BackButton from "../BackButton";

type Props = {
  right?: React.ReactNode;
  bottom?: React.ReactNode;
  onPressBack?: PressableProps["onPress"];
};

function TransHeader({ right, bottom, onPressBack }: Props) {
  return (
    <Animated.View>
      <View style={styles.top}>
        <BackButton onPress={onPressBack} />
        {right ? <View>{right}</View> : null}
      </View>
      {bottom ? (
        <Animated.View style={[styles.bottom]}>{bottom}</Animated.View>
      ) : null}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottom: {
    marginTop: 8,
  },
});

export default TransHeader;
