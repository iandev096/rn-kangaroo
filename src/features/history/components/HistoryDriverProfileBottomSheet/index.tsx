import React from "react";
import { View } from "react-native";
import BottomSheet from "src/components/BottomSheet";
import HistoryDriverProfile from "./HistoryDriverProfile";

type Props = {
  show: boolean;
  onClose: () => any;
};

function HistoryDriverProfileBottomSheet({ show, onClose }: Props) {
  return (
    <BottomSheet show={show} onClose={onClose} gestureEnabled={false}>
      <View>
        <HistoryDriverProfile />
      </View>
    </BottomSheet>
  );
}

export default HistoryDriverProfileBottomSheet;
