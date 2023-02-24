import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import { genFontStyles } from "src/utils/font";

type Props = {};

function BottomSheetContent({}: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.p, styles.pGap]}>
        We allocate 1.5% of our service charges to partners as a way to show
        goodwill for using Kangaroo.
      </Text>
      <Text style={[styles.p]}>
        Payouts are meant to be paid weekly. However, we are only able to do so
        after couriers have also settled us.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 38,
  },
  p: {
    ...genFontStyles(16, 24, COLOR.PRIMARY_A, FONT_FAMILY.BR_FIRMA_REGULAR),
  },
  pGap: {
    marginBottom: 24,
  },
});

export default BottomSheetContent;
