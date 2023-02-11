import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import {
  backgroundColor,
  borderColor,
  textFieldheight,
} from "../styles.config";
import useTextField from "../TextFieldProvider/useTextField";
import { Size, Status } from "../types";

type Props = {} & ViewProps;

function TextFieldContainer({ style, children, ...props }: Props) {
  const { status, size, disabled, focus } = useTextField();

  const { textInputContainer } = getStyles(status, size, disabled, focus);

  return (
    <View style={[textInputContainer, style]} {...props}>
      {children}
    </View>
  );
}

const getStyles = (
  status: Status,
  size: Size,
  disabled: boolean,
  focus: boolean
) =>
  StyleSheet.create({
    textInputContainer: {
      backgroundColor: disabled
        ? backgroundColor["disabled"]
        : backgroundColor[status],
      paddingHorizontal: 16,
      height: textFieldheight[size],
      borderRadius: 3,
      borderWidth: 2,
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      borderColor: focus ? borderColor["active"] : borderColor[status],
    },
  });

export default TextFieldContainer;
