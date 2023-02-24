import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "src/components/Button";
import {
  PayoutAccountDetails,
  PayoutHeader,
  PayoutInfoBottomSheet,
  PayoutPaymentOptions,
} from "src/features/settings";
import useScrollEnabled from "src/hooks/useScrollEnabled";

type Props = {};

function PayoutScreen({}: Props) {
  const { scrollEnabled, onLayout } = useScrollEnabled();
  const [showPayoutInfo, setShowPayoutInfo] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View onLayout={onLayout}>
          <PayoutHeader />
          <PayoutPaymentOptions />
          <PayoutAccountDetails />
        </View>
      </ScrollView>
      <Button title="Save Changes" style={styles.button} />
      <PayoutInfoBottomSheet
        show={showPayoutInfo}
        onClose={() => setShowPayoutInfo(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: { marginHorizontal: 24, marginVertical: 8 },
});

export default PayoutScreen;
