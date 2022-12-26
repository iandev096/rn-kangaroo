import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {
  amount: number;
  currency?: string;
  type: string;
};

function PriceDetails({ amount, currency = "GHS", type = "Cash" }: Props) {
  return (
    <View>
      <Text style={styles.amount}>{`${currency} ${amount}`}</Text>
      <Text style={styles.type}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  amount: {
    fontSize: 16,
    lineHeight: 16,
    color: COLOR.PRIMARY_A,
    marginBottom: 4,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
  },
  type: {
    fontSize: 14,
    lineHeight: 14,
    color: COLOR.GRAY_500,
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
  },
});

export default PriceDetails;
