import React, { useMemo, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLOR from "src/constants/COLOR";
import { CustomTextInputProps } from "../types";
import { getStyles } from "./styles";

function TextField({
  label,
  style = {},
  size = "medium",
  disabled = false,
  status = "normal",
  containerStyle,
  textInputContainerStyle = {},
  ...props
}: CustomTextInputProps) {
  const [focus, setFocus] = useState(false);
  const styles = getStyles({ size, status, focus, disabled });

  const hasTyped = useMemo(
    () => props.value && props.value.length > 0,
    [props.value]
  );

  const clearText = () => {
    if (props.onChangeText) {
      props.onChangeText("");
    }
  };

  return (
    <View style={containerStyle}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.textInputContainer, textInputContainerStyle]}>
        <TextInput
          placeholderTextColor={disabled ? COLOR.GRAY_400 : "#6b6b6b"}
          style={[style, styles.textInput]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          editable={!disabled}
          {...props}
        />
        {hasTyped ? (
          <Pressable onPress={clearText} style={styles.closeIcon} hitSlop={22}>
            <MaterialCommunityIcons
              name="close-circle"
              size={18.33}
              color={COLOR.PRIMARY_A}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

export default TextField;
