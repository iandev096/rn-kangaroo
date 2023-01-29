import React, { Children } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BottomSheet from "src/components/BottomSheet";
import Content from "./Content";
import ReportForm from "./ReportForm";
import { styles } from "./styles";

type Props = {
  title: string;
  onClose: () => any;
  show: boolean;
  children: React.ReactElement[] | React.ReactElement;
};

function IssuesBottomSheet({ title, children, ...props }: Props) {
  let content, reportForm;
  Children.forEach(children, (child: React.ReactElement, idx) => {
    console.log("here::");
    if (child.type === IssuesBottomSheet.Content) {
      content = child;
    }
    if (child.type === IssuesBottomSheet.Form) {
      reportForm = child;
    }
  });

  return (
    <BottomSheet {...props}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "height" : "padding"}
        keyboardVerticalOffset={200}
      >
        <ScrollView style={styles.container}>
          <View style={styles.topBar} />
          <Text style={[styles.title, styles.screenPadding]}>{title}</Text>

          {content}

          {reportForm}
        </ScrollView>
      </KeyboardAvoidingView>
    </BottomSheet>
  );
}

IssuesBottomSheet.Content = Content;

IssuesBottomSheet.Form = ReportForm;

export default IssuesBottomSheet;
