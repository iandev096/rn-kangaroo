import React from "react";
import { useController } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import Slot from "src/components/Slot";
import ClearButton from "../shared/ClearButton";
import MemoizedContainer from "../shared/Container";
import TextFieldContainer from "../shared/TextFieldContainer";
import TextFieldInput from "../shared/TextFieldInput";
import TextFieldLabel from "../shared/TextFieldLabel";
import TextFieldProvider from "../shared/TextFieldProvider";
import {
  CustomTextInputProps,
  InputControlProps,
  PhoneTextInputProps,
} from "../shared/types";
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
  countryCode = "233",
  ...props
}: CustomTextInputProps & PhoneTextInputProps) {
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

PhoneTextField.Control = function PhoneTextFieldControl({
  name,
  control,
  defaultValue = "",
  countryCode = "233",
  ...props
}: CustomTextInputProps & PhoneTextInputProps & InputControlProps) {
  defaultValue = `+${countryCode}`;
  const { field } = useController({
    control,
    defaultValue,
    name,
  });

  const handleOnChangeText = (text: string) => {
    if (text.length === 0 || !text.startsWith("+233")) {
      text = `+${countryCode}`;
    }

    field.onChange(text);
  };

  return (
    <PhoneTextField
      {...props}
      value={field.value}
      onChangeText={handleOnChangeText}
      maxLength={13}
    />
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
  },
  inputContainer: {
    flex: 1,
  },
});

export default PhoneTextField;
