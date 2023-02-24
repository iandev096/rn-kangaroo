import React from "react";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";

type Props = {
  left: React.ReactNode;
  right?: React.ReactNode;
  rightStyle?: View["props"]["style"];
  bottom?: React.ReactNode;
};

function TransHeader({ left, right, rightStyle, bottom }: Props) {
  return (
    <Animated.View>
      <View style={styles.top}>
        <View>{left}</View>
        {right ? <View style={rightStyle}>{right}</View> : null}
      </View>
      {bottom ? <Animated.View>{bottom}</Animated.View> : null}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default TransHeader;
