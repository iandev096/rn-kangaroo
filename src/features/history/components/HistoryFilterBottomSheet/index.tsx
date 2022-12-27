import React from "react";
import BottomSheet from "src/components/BottomSheet";
import HistoryFilterForm from "./HistoryFilterForm";

type Props = {
  onClose: () => any;
  onApply: (filterValue: string) => any;
  show: boolean;
};

function HistoryFilterBottomSheet({ onClose, onApply, show }: Props) {
  return (
    <BottomSheet onClose={onClose} show={show} gestureEnabled={false}>
      <HistoryFilterForm onApply={onApply} />
    </BottomSheet>
  );
}

export default HistoryFilterBottomSheet;
