import React, { ForwardedRef, forwardRef, useState } from "react";
import OTPTextView from "react-native-otp-textinput";
import { getStyles } from "./styles";

type Props = {
  count?: number;
  onChangeText?: (value: string) => void;
  onComplete?: (value: string) => void;
  tintColor?: string;
  tintBgColor?: string;
  offTintColor?: string;
};

function OTPInput(
  {
    count = 4,
    onChangeText,
    onComplete = () => {},
    tintColor = "#66D19E",
    tintBgColor = "#E6F2ED",
    offTintColor = "transparent",
  }: Props,
  ref: ForwardedRef<any>
) {
  const [complete, setComplete] = useState(false);

  const styles = getStyles(count, complete, tintBgColor, tintColor);

  const handleTextChange = (text: string) => {
    if (!onChangeText) return;

    if (text?.length === count) {
      setComplete(true);
      onComplete(text);
    } else {
      setComplete(false);
    }

    onChangeText(text);
  };

  return (
    <OTPTextView
      ref={ref}
      containerStyle={styles.textInputContainer}
      textInputStyle={[styles.textInput, complete && styles.completed]}
      handleTextChange={handleTextChange}
      tintColor={tintColor}
      inputCount={count}
      offTintColor={offTintColor}
    />
  );
}

export default forwardRef(OTPInput);
