import React, { ForwardedRef, forwardRef, useState } from "react";
import { TextInput, View } from "react-native";
import COLOR from "src/constants/COLOR";
import { CustomTextInputProps } from "../types";
import { getStyles } from "./styles";

function TextArea(
  {
    multiline = true,
    containerStyle,
    size = "medium",
    status = "normal",
    disabled = false,
    style = {},
    textInputContainerStyle = {},
    ...props
  }: CustomTextInputProps,
  ref: ForwardedRef<TextInput>
) {
  const [focus, setFocus] = useState(false);
  const styles = getStyles({ size, status, focus, disabled });
  return (
    <View style={containerStyle}>
      <View style={[styles.textAreaContainer, textInputContainerStyle]}>
        <TextInput
          placeholderTextColor={disabled ? COLOR.GRAY_400 : "#6b6b6b"}
          multiline={true}
          editable={!disabled}
          style={[style, styles.textInput]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          ref={ref}
          {...props}
        />
      </View>
    </View>
  );
}

export default forwardRef<TextInput, CustomTextInputProps>(TextArea);
