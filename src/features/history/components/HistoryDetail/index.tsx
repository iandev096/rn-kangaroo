import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Button from "src/components/Button";
import HistoryTimestampDetail from "../HistoryDetailTimestamp";
import HistoryPaymentDetail from "../HistoryPaymentDetail";
import HistoryRecipientDetail from "../HistoryRecipientDetail";
import HistoryRideDetail from "../HistoryRideDetail";
import HistoryRiderDetail from "../HistoryRiderDetail";

type Props = {
  onReportProblem: () => any;
  onViewRiderDetail: () => any;
  onViewRecipientDetail: () => any;
};

function HistoryDetail({
  onReportProblem,
  onViewRiderDetail,
  onViewRecipientDetail,
}: Props) {
  return (
    <ScrollView>
      <HistoryTimestampDetail />
      <HistoryRiderDetail onPress={onViewRiderDetail} />
      <HistoryRideDetail />
      <HistoryRecipientDetail onPress={onViewRecipientDetail} />
      <HistoryPaymentDetail />
      <Button
        title="Report a problem"
        variant="alternate"
        style={{ marginHorizontal: 16, marginBottom: 16 }}
        onPress={() => onReportProblem()}
      />
    </ScrollView>
  );
}

export default HistoryDetail;
