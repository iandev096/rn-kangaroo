import React from "react";
import { Text, View } from "react-native";
import ItemSeparatorComponent from "./ItemSeparatorComponent";
import PaymentStatusTag from "./PaymentStatusTag";
import { styles } from "./styles";
import { DeliveriesTitle } from "./type";

type Props = {} & DeliveriesTitle;

function SectionHeader({ dateStr, dayStr, paymentStatus, totalAmt }: Props) {
  return (
    <>
      <View style={[styles.sectionHeader, styles.screenPadding]}>
        <View style={styles.row}>
          <Text style={styles.titleText}>
            {dayStr}, <Text style={styles.dateText}>{dateStr}</Text>
          </Text>
          <Text style={styles.titleText}>{totalAmt}</Text>
        </View>
        <PaymentStatusTag status={paymentStatus} />
      </View>
      <ItemSeparatorComponent />
    </>
  );
}

export default SectionHeader;
