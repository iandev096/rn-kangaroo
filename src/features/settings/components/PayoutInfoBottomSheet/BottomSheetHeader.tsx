import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InfoIconXs from "src/components/SvgComponents/InfoIconXs";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

type Props = {};

function BottomSheetHeader({}: Props) {
  return (
    <View style={styles.header}>
      <View style={styles.iconContainer}>
        <InfoIconXs width={18} height={18} pathColor={COLOR.PRIMARY_A} />
      </View>
      <Text style={styles.title}>About Payouts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    paddingHorizontal: 22,
    height: 66,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: COLOR.GRAY_100,
    marginBottom: 32,
  },
  iconContainer: {
    position: "absolute",
    left: 22,
  },
  title: {
    ...genFontStyles(16, 24),
  },
});

export default BottomSheetHeader;
