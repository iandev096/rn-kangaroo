import React from "react";
import { StyleSheet, View } from "react-native";
import COLOR from "src/constants/COLOR";

type Props = {
  left: React.ReactNode;
  center: React.ReactNode;
  right?: React.ReactNode;
  containerStyle?: View["props"]["style"];
};

function BottomSheetItem({ left, center, right, containerStyle = {} }: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.left}>{left}</View>
      <View style={styles.center}>{center}</View>
      {right ? <View style={styles.right}>{right}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLOR.PRIMARY_B,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  left: { marginRight: 16, flexShrink: 0 },
  center: { marginRight: 16 },
  right: { marginLeft: "auto", flexShrink: 0 },
});

export default BottomSheetItem;
