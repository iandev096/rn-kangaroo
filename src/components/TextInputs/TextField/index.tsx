import React from "react";

import Slot from "src/components/Slot";
import ClearButton from "../shared/ClearButton";
import MemoizedContainer from "../shared/Container";
import TextFieldContainer from "../shared/TextFieldContainer";
import TextFieldInput from "../shared/TextFieldInput";
import TextFieldLabel from "../shared/TextFieldLabel";
import TextFieldProvider from "../shared/TextFieldProvider";
import { CustomTextInputProps } from "../shared/types";

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

export default TextField;
