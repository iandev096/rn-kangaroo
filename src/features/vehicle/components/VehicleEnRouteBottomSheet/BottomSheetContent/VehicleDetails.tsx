import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = { name: string; regNo: string };

function VehicleDetails({ name, regNo }: Props) {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.regNo}>{regNo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    lineHeight: 20,
    color: COLOR.GRAY_500,
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
    marginBottom: 4,
  },
  regNo: {
    color: COLOR.PRIMARY_A,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 16,
    lineHeight: 16,
  },
});

export default VehicleDetails;
