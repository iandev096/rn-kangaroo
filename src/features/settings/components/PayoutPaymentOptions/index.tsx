import React from "react";
import { StyleSheet, View } from "react-native";
import BankIconXs from "src/components/SvgComponents/BankIconXs";
import PhoneIconXs from "src/components/SvgComponents/PhoneIconXs";
import COLOR from "src/constants/COLOR";
import PaymentOptionListItem from "../PaymentOptionListItem";

type Props = {};

function PayoutPaymentOptions({}: Props) {
  return (
    <View style={styles.container}>
      <PaymentOptionListItem
        icon={<PhoneIconXs />}
        title="Mobile Money"
        desc="May attract transfer charges"
        checked={false}
        containerStyle={styles.listItemSep}
      />
      <PaymentOptionListItem
        icon={<BankIconXs />}
        title="Bank Account"
        desc="Full earnings amount, no charges"
        checked={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 16,
    borderBottomWidth: 24,
    borderBottomColor: COLOR.GRAY_50,
    marginBottom: 24,
  },
  listItemSep: {
    borderBottomWidth: 1,
    borderColor: COLOR.GRAY_100,
  },
});

export default PayoutPaymentOptions;
