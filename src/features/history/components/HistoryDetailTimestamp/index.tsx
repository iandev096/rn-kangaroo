import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {};

function HistoryTimestampDetail({}: Props) {
  return (
    <View style={styles.timestampContainer}>
      <Text style={styles.timestamp}>Tuesday, 21 May 2022 11:35 AM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timestampContainer: {
    paddingHorizontal: 16,
    borderBottomColor: COLOR.GRAY_100,
    borderBottomWidth: 8,
    borderStyle: "solid",
    marginTop: 4,
    paddingBottom: 16,
  },
  timestamp: {
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
    fontSize: 14,
    lineHeight: 20,
    color: COLOR.GRAY_500,
  },
});
export default HistoryTimestampDetail;
