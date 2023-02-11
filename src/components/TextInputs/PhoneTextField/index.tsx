import React from "react";
import { StyleSheet, View } from "react-native";
import Slot from "src/components/Slot";
import ClearButton from "../shared/ClearButton";
import MemoizedContainer from "../shared/Container";
import TextFieldContainer from "../shared/TextFieldContainer";
import TextFieldInput from "../shared/TextFieldInput";
import TextFieldLabel from "../shared/TextFieldLabel";
import TextFieldProvider from "../shared/TextFieldProvider";
import { CustomTextInputProps } from "../shared/types";
import CountrySelect from "./CountrySelect";

function PhoneTextField({
  label,
  style = {},
  size = "medium",
  disabled = false,
  status = "normal",
  containerStyle,
  labelStyle,
  textInputContainerStyle = {},
  left,
  ...props
}: CustomTextInputProps) {
  return (
    <TextFieldProvider size={size} disabled={disabled} status={status}>
      <MemoizedContainer>
        {label ? (
          <TextFieldLabel style={labelStyle}>{label}</TextFieldLabel>
        ) : null}
        <View style={styles.controls}>
          <CountrySelect />
          <TextFieldContainer
            style={[textInputContainerStyle, styles.inputContainer]}
          >
            <Slot child={left} />
            <TextFieldInput style={style} {...props} />
            <ClearButton
              onChangeText={props.onChangeText}
              value={props.value}
            />
          </TextFieldContainer>
        </View>
      </MemoizedContainer>
    </TextFieldProvider>
  );
}

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
  },
  inputContainer: {
    flex: 1,
  },
});

export default PhoneTextField;
