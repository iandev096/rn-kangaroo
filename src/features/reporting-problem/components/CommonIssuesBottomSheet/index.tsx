import React from "react";
import { StyleSheet, Text } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import IssuesBottomSheet from "../IssuesBottomSheet";

type Props = {
  title: string;
  onReport: (reportChannel: string) => any;
  description: string;
  onClose: () => any;
  show: boolean;
};

function CommonIssuesBottomSheet({ description, onReport, ...props }: Props) {
  return (
    <IssuesBottomSheet {...props}>
      <IssuesBottomSheet.Content>
        <Text style={styles.description}>{description}</Text>
      </IssuesBottomSheet.Content>
      <IssuesBottomSheet.Form onPressReport={onReport} />
    </IssuesBottomSheet>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: COLOR.PRIMARY_A,
    paddingHorizontal: 16,
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
  },
});

export default CommonIssuesBottomSheet;
