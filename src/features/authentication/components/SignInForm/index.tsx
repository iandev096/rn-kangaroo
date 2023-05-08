import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "src/components/Button";
import TextField from "src/components/TextInputs/TextField";
import { FONT_FAMILY } from "src/constants/FONT";
import NavPills from "./NavPills";

type Props = {
  onSubmit?: Function;
};

function SignInForm({}: Props) {
  return (
    <View>
      <Text style={styles.title}>Sign in</Text>
      <NavPills />
      <View style={styles.textFieldGroup}>
        <View style={styles.textFieldContainer}>
          <TextField
            label="Email or Phone Number"
            placeholder="eg. someone@email.com"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.textFieldContainer}>
          <TextField
            label="Email or Phone Number"
            placeholder="eg. someone@email.com"
            keyboardType="email-address"
          />
        </View>
      </View>
      <Button title="Sign In" onPress={() => console.log("pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 48,
    lineHeight: 58,
  },
  textFieldContainer: {
    marginBottom: 20,
  },
  textFieldGroup: {
    marginTop: 32,
    marginBottom: 48,
  },
});

export default SignInForm;
