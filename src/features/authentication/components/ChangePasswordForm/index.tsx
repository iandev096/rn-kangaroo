import React from "react";
import { StyleSheet, View } from "react-native";
import TextField from "src/components/TextInputs/TextField";
import { genFontStyles } from "src/utils/font";

type Props = {};

const ChangePasswordForm = (props: Props) => {
  return (
    <View style={styles.changePasswordForm}>
      <TextField
        labelStyle={styles.textFieldLabel}
        containerStyle={styles.textFieldContainer}
        label="Current Password"
        placeholder="Enter old password"
        secureTextEntry
      />
      <TextField
        labelStyle={styles.textFieldLabel}
        containerStyle={styles.textFieldContainer}
        label="New Password"
        placeholder="New password"
        secureTextEntry
      />
      <TextField
        labelStyle={styles.textFieldLabel}
        containerStyle={styles.textFieldContainer}
        label="Repeat New Password"
        placeholder="Repeat new password"
        secureTextEntry
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  changePasswordForm: { paddingHorizontal: 24, marginVertical: 16 },
  textFieldContainer: { marginBottom: 24 },
  textFieldLabel: { ...genFontStyles(14, 20) },
});

export default ChangePasswordForm;
