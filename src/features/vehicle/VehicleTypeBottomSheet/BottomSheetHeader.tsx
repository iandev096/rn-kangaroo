import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = { title: string };

function BottomSheetHeader({ title }: Props) {
  return (
    <View style={styles.bottomSheetHeader}>
      <View style={styles.bar} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSheetHeader: {
    borderColor: COLOR.GRAY_200,
    borderBottomWidth: 1,
  },

  titleContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    height: 48,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 18,
    lineHeight: 18,
  },
  bar: {
    width: 48,
    height: 4,
    backgroundColor: COLOR.GRAY_200,
    alignSelf: "center",
    marginTop: 8,
    borderRadius: 100,
  },
});

export default BottomSheetHeader;
