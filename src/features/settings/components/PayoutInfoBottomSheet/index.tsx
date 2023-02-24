import React from "react";
import { StyleSheet, View } from "react-native";
import BottomSheet from "src/components/BottomSheet";
import Button from "src/components/Button";
import BottomSheetContent from "./BottomSheetContent";
import BottomSheetHeader from "./BottomSheetHeader";

type Props = {
  show: boolean;
  onClose: () => any;
};

function PayoutInfoBottomSheet({ show, onClose }: Props) {
  return (
    <BottomSheet show={show} onClose={onClose} gestureEnabled={false}>
      <View>
        <BottomSheetHeader />
        <View style={styles.screenPadding}>
          <BottomSheetContent />
          <Button
            title="Learn more"
            variant="alternate"
            style={{ marginBottom: 32 }}
          />
        </View>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  screenPadding: {
    paddingHorizontal: 22,
  },
});

export default PayoutInfoBottomSheet;
