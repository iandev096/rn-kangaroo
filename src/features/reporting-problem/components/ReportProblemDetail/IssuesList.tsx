import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  style?: ViewStyle;
};

function IssuesList({ title, children, style }: Props) {
  return (
    <View style={[style, styles.issuesList]}>
      <Text style={styles.issuesListTitle}>{title}</Text>
      <View>{children}</View>
    </View>
  );
}

export default IssuesList;
