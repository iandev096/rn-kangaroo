import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = { title: string; timeValue: number | string; timeUnit?: string };

function BottomSheetHeader({ title, timeValue, timeUnit = "MIN" }: Props) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.roundedEdge}>
        <View style={styles.bar} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.timeGroup}>
          <Text style={styles.timeValue}>{timeValue}</Text>
          <Text style={styles.timeUnit}>{timeUnit}</Text>
        </View>
      </View>
      <View style={styles.bottomEdge} />
    </View>
  );
}

const ROUNDED_EDGE_HEIGHT = 12;
const styles = StyleSheet.create({
  roundedEdge: {
    borderTopEndRadius: 3,
    borderTopStartRadius: 3,
    backgroundColor: COLOR.PRIMARY_A,
    height: ROUNDED_EDGE_HEIGHT,
    width: "100%",
    position: "absolute",
    top: -ROUNDED_EDGE_HEIGHT,
  },
  bottomEdge: {
    height: 4,
    width: "100%",
    position: "absolute",
    bottom: -4,
    backgroundColor: COLOR.PRIMARY_A,
  },
  bar: {
    backgroundColor: COLOR.PRIMARY_B,
    height: 4,
    width: 48,
    alignSelf: "center",
    marginTop: "auto",
    opacity: 0.18,
    borderRadius: 4,
  },
  headerContainer: {
    position: "relative",
    height: 64,
    backgroundColor: COLOR.PRIMARY_A,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: ROUNDED_EDGE_HEIGHT / 2 - ROUNDED_EDGE_HEIGHT / 2 / 2,
  },
  timeGroup: {
    marginLeft: "auto",
    alignItems: "center",
  },
  title: {
    color: COLOR.PRIMARY_B,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 18,
    lineHeight: 18,
  },
  timeValue: {
    color: COLOR.ACCENT,
    fontSize: 32,
    lineHeight: 32,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
  },
  timeUnit: {
    color: COLOR.ACCENT,
    fontSize: 12,
    lineHeight: 12,
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
  },
});

export default BottomSheetHeader;
