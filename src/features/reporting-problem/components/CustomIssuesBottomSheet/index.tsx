import React, { useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";
import InfoIconXs from "src/components/SvgComponents/InfoIconXs";
import TextArea from "src/components/TextInputs/TextArea";
import IssuesBottomSheet from "../IssuesBottomSheet";
import { styles } from "./styles";

type Props = {
  title: string;
  onReport: (reportChannel: string) => any;
  onClose: () => any;
  show: boolean;
};

function CustomIssuesBottomSheet({ onReport, ...props }: Props) {
  const [problem, setProblem] = useState("");
  const textAreaRef = useRef<TextInput>(null);

  const handleReport = (reportChannel: string) => {
    console.log(problem);
    onReport(reportChannel);
  };

  return (
    <IssuesBottomSheet {...props}>
      <IssuesBottomSheet.Content>
        <View style={styles.textAreaStage}>
          <TextArea
            value={problem}
            placeholder="Tell us your problem?"
            onChangeText={setProblem}
            ref={textAreaRef}
            textInputContainerStyle={styles.textAreaInputContainer}
            // onLayout={() => textAreaRef.current?.focus()}
          />
        </View>
        <View style={styles.info}>
          <InfoIconXs />
          <Text style={styles.infoText}>
            Please remember to keep your complaint civil, short and concise.
          </Text>
        </View>
      </IssuesBottomSheet.Content>
      <IssuesBottomSheet.Form onPressReport={handleReport} />
    </IssuesBottomSheet>
  );
}

export default CustomIssuesBottomSheet;
