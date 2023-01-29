import React, { useState } from "react";
import { Text, View, ViewStyle } from "react-native";
import Button from "src/components/Button";
import RadioListItem from "src/components/RadioListItem";
import TelephoneIcon from "src/components/SvgComponents/TelephoneIcon";
import { styles } from "./styles";

export type ReportFormProps = {
  onPressReport?: (reportChannel: string) => any;
  style?: ViewStyle;
};

const channels = [
  { label: "Phone Call", Icon: TelephoneIcon, value: "Phone Call" },
  { label: "Email", Icon: TelephoneIcon, value: "Email" },
];

function ReportForm({ onPressReport, style }: ReportFormProps) {
  const [reportChannel, setReportChannel] = useState("");

  const handleReportChange = () => {
    if (!onPressReport) return;
    onPressReport(reportChannel);
  };

  return (
    <View style={[styles.screenPadding, style]}>
      <Text style={styles.contactTitle}>How should we contact you?</Text>
      <View style={styles.radioItemsContainer}>
        {channels.map((channel) => (
          <RadioListItem
            key={channel.label}
            label={channel.label}
            checked={reportChannel === channel.value}
            onPress={() => setReportChannel(channel.value)}
          />
        ))}
      </View>
      <Button title="Report" onPress={handleReportChange} />
    </View>
  );
}

export default ReportForm;
