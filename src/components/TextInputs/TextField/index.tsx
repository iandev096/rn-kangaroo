import React from "react";

import { useController } from "react-hook-form";
import Slot from "src/components/Slot";
import ClearButton from "../shared/ClearButton";
import MemoizedContainer from "../shared/Container";
import TextFieldContainer from "../shared/TextFieldContainer";
import TextFieldInput from "../shared/TextFieldInput";
import TextFieldLabel from "../shared/TextFieldLabel";
import TextFieldProvider from "../shared/TextFieldProvider";
import { CustomTextInputProps, InputControlProps } from "../shared/types";

function TextField({
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
      <MemoizedContainer style={containerStyle}>
        {label ? (
          <TextFieldLabel style={labelStyle}>{label}</TextFieldLabel>
        ) : null}
        <TextFieldContainer style={textInputContainerStyle}>
          <Slot child={left} />
          <TextFieldInput style={style} {...props} />
          {!disabled ? (
            <ClearButton
              onChangeText={props.onChangeText}
              value={props.value}
            />
          ) : null}
        </TextFieldContainer>
      </MemoizedContainer>
    </TextFieldProvider>
  );
}

TextField.Control = function TextFieldControl({
  name,
  control,
  defaultValue = "",
  ...props
}: InputControlProps & CustomTextInputProps) {
  const { field } = useController({
    control,
    defaultValue,
    name,
  });
  return (
    <TextField {...props} value={field.value} onChangeText={field.onChange} />
  );
};

export default TextField;
