import React, { useMemo, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import THEME from "src/constants/THEME";
import { getStyles } from "./styles";
import { TextFieldProps } from "./types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function TextField({
  label,
  style = {},
  size = "medium",
  disabled = false,
  status = "normal",
  ...props
}: TextFieldProps) {
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
    <View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.textInputContainer}>
        <TextInput
          placeholderTextColor={disabled ? THEME.GRAY_400 : "#6b6b6b"}
          style={[style, styles.textInput]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...props}
        />
        {hasTyped ? (
          <Pressable onPress={clearText} style={styles.closeIcon} hitSlop={22}>
            <MaterialCommunityIcons
              name="close-circle"
              size={18.33}
              color={THEME.PRIMARY_A}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

export default TextField;
