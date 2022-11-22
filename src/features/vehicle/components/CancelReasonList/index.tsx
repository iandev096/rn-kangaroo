import React, { useCallback, useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import RadioListItem from "src/components/RadioListItem";
import TextArea from "src/components/TextInputs/TextArea";
import COLOR from "src/constants/COLOR";

type Props = {};

const REASONS = [
  "Couldn’t wait any longer",
  "Driver went the wrong direction",
  "Driver didn’t match description",
  "Driver told me to cancel",
  "Chose the wrong vehicle",
];

function CancelReasonsList({}: Props) {
  const [reason, setReason] = useState<string>();
  const [showOtherReason, setShowOtherReason] = useState(false);
  const textAreaRef = useRef<TextInput>(null);

  const handleSetReason = useCallback(
    (value: string) => {
      if (showOtherReason) {
        setShowOtherReason(false);
      }
      setReason(value);
    },
    [showOtherReason]
  );

  const handleShowOther = useCallback(() => {
    if (showOtherReason) return;
    setReason("");
    setShowOtherReason(true);
  }, [showOtherReason]);

  return (
    <>
      {REASONS.map((item, idx) => (
        <View key={item} style={[styles.separator]}>
          <RadioListItem
            label={item}
            checked={reason === item}
            onPress={() => handleSetReason(item)}
          />
        </View>
      ))}
      <View style={styles.other}>
        <RadioListItem
          label="Other reasons"
          checked={showOtherReason}
          value={reason}
          onPress={() => handleShowOther()}
        />
        <View style={styles.textAreaInputContainer}>
          {showOtherReason ? (
            <Animated.View entering={FadeIn} exiting={FadeOut}>
              <TextArea
                value={reason}
                placeholder="What happened?"
                onChangeText={setReason}
                ref={textAreaRef}
                textInputContainerStyle={styles.textAreaInputContainer}
                onLayout={() => textAreaRef.current?.focus()}
              />
            </Animated.View>
          ) : null}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderColor: COLOR.GRAY_200,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  other: {
    marginTop: 8,
  },
  textAreaInputContainer: {
    height: 100,
  },
});

export default CancelReasonsList;
