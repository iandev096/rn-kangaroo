import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import { color, fontSize } from "../styles.config";
import useTextField from "../TextFieldProvider/useTextField";
import { Size, Status } from "../types";

type Props = {} & TextInputProps;

function TextFieldInput({ style, ...props }: Props) {
  const { disabled, setFocus, size, status } = useTextField();

  const { textInput } = getStyles(disabled, size, status);

  return (
    <TextInput
      placeholderTextColor={disabled ? COLOR.GRAY_400 : "#6b6b6b"}
      style={[style, textInput]}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      editable={!disabled}
      {...props}
    />
  );
}

const getStyles = (disabled: boolean, size: Size, status: Status) =>
  StyleSheet.create({
    textInput: {
      fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
      color: disabled ? color["disabled"] : color[status],
      fontSize: fontSize[size],
      height: "100%",
      flex: 1,
    },
  });

export default TextFieldInput;
