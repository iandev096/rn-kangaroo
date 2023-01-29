import React, { useReducer } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CommonIssuesBottomSheet,
  CustomIssuesBottomSheet,
  ReportProblemDetail,
  ReportProblemHeader,
  SubmitProgressModal,
} from "src/features/reporting-problem";
import overlayContentReducer, {
  initialOverlayState,
} from "./overlayContentReducer";

type Props = {};

function ReportProblemScreen({}: Props) {
  const [{ showCommonIssues, showCustomIssues, showSubmitProgress }, dispatch] =
    useReducer(overlayContentReducer, initialOverlayState);

  return (
    <SafeAreaView style={styles.container}>
      <ReportProblemHeader title="Report a problem" />
      <ReportProblemDetail />
      <CommonIssuesBottomSheet
        onReport={console.log}
        show={showCommonIssues}
        title="Unpleasant experience"
        description={
          "If your driver displayed an unpleasant attitude we would like to know. \n\nEnsuring our customers’ safety and experience while using Kangaroo is a top priority. We take feedback very seriously."
        }
        onClose={() => dispatch({ type: "reset" })}
      />
      <CustomIssuesBottomSheet
        onReport={console.log}
        show={showCustomIssues}
        title="Unpleasant experience"
        onClose={() => dispatch({ type: "reset" })}
      />
      <SubmitProgressModal show={showSubmitProgress} progress="SENT" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });

export default ReportProblemScreen;
