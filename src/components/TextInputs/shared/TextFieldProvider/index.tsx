import React, { useState } from "react";
import { Size, Status } from "../types";
import TextFieldContext from "./context";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  size: Size;
  disabled: boolean;
  status: Status;
};

function TextFieldProvider({ children, size, disabled, status }: Props) {
  const [focus, setFocus] = useState(false);

  return (
    <TextFieldContext.Provider
      value={{ size, disabled, status, focus, setFocus }}
    >
      {children}
    </TextFieldContext.Provider>
  );
}

export default TextFieldProvider;
