import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Button from "src/components/Button";
import TextField from "src/components/TextField";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {};

function RecipeintForm({}: Props) {
  return (
    <View>
      <View style={styles.textFieldGroup}>
        <View style={styles.textFieldContainer}>
          <TextField label="First Name" placeholder="e.g. Rowdin" />
        </View>
        <View style={styles.textFieldContainer}>
          <TextField label="Last Name" placeholder="e.g. Rowdin" />
        </View>
        <View style={styles.textFieldContainer}>
          <TextField label="Phone Number" placeholder="e.g. 0249885904" />
        </View>
      </View>
      <View>
        <Button title="Sign In" onPress={() => console.log("pressed")} />
      </View>
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
  formContainer: {},
});

export default RecipeintForm;
