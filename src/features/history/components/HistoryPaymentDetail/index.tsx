import React from "react";
import { Text, View } from "react-native";
import CashIcon from "src/components/SvgComponents/CashIcon";
import { styles } from "./styles";

type Props = {};

function HistoryPaymentDetail({}: Props) {
  return (
    <View style={styles.historyPaymentDetail}>
      <Text style={styles.title}>Total Payment</Text>
      <View style={styles.item}>
        <View style={styles.labelGroup}>
          <CashIcon />
          <Text style={styles.labelText}>Cash</Text>
        </View>
        <Text style={styles.value}>GHS 32</Text>
      </View>
    </View>
  );
}

export default HistoryPaymentDetail;
