import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { genFontStyles } from "src/utils/font";
import { color, fontSize } from "../styles.config";
import useTextField from "../TextFieldProvider/useTextField";
import { Size, Status } from "../types";

type Props = {} & TextProps;

function TextFieldLabel({ style, children }: Props) {
  const { size, status, disabled } = useTextField();

  const { label } = getStyles(size, disabled, status);

  return <Text style={[label, style]}>{children}</Text>;
}

const getStyles = (size: Size, disabled: boolean, status: Status) =>
  StyleSheet.create({
    label: {
      ...genFontStyles(
        fontSize[size],
        20,
        disabled ? color["disabled"] : color[status]
      ),
      marginBottom: 8,
    },
  });

export default TextFieldLabel;
