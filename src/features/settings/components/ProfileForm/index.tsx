import React from "react";
import { StyleSheet, View } from "react-native";
import LocationIcon from "src/components/SvgComponents/LocationIcon";
import PhoneTextField from "src/components/TextInputs/PhoneTextField";
import TextField from "src/components/TextInputs/TextField";
import { genFontStyles } from "src/utils/font";

type Props = {};

function ProfileForm({}: Props) {
  const textIcon = (
    <View style={styles.textIconContainer}>
      <LocationIcon width={14} height={18} />
    </View>
  );

  return (
    <View style={styles.profileForm}>
      <TextField
        labelStyle={styles.textFieldLabel}
        containerStyle={styles.textFieldContainer}
        label="Business name"
        placeholder="Malcom Nanakrom"
      />
      <TextField
        labelStyle={styles.textFieldLabel}
        containerStyle={styles.textFieldContainer}
        label="Location"
        placeholder="Nmai Djorn Papilio Hills"
        left={textIcon}
      />
      <TextField
        labelStyle={styles.textFieldLabel}
        containerStyle={styles.textFieldContainer}
        label="Email address"
        placeholder="nanakrom@melcom.gh.com"
      />
      <PhoneTextField
        labelStyle={styles.textFieldLabel}
        containerStyle={styles.textFieldContainer}
        label="Phone number"
        placeholder="+2332080300"
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  profileForm: { paddingHorizontal: 24, marginVertical: 16 },
  textFieldContainer: { marginBottom: 24 },
  textFieldLabel: { ...genFontStyles(14, 20) },
  textIconContainer: {
    marginRight: 24,
    marginLeft: 8,
  },
});

export default ProfileForm;
