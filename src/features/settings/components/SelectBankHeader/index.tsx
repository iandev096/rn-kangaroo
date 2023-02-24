import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CloseButton from "src/components/CloseButton";
import TextField from "src/components/TextInputs/TextField";
import TransHeader from "src/components/TransHeader";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

type Props = {};

function SelectBankHeader({}: Props) {
  return (
    <View style={styles.header}>
      <TransHeader
        left={<CloseButton onPress={() => console.log("pressed")} />}
        bottom={<Text style={styles.title}>Select Your Bank</Text>}
      />
      <TextField
        containerStyle={styles.textFieldContainer}
        left={
          <View style={styles.textFieldIcon}>
            <Ionicons name="search" size={16} color={COLOR.PRIMARY_A} />
          </View>
        }
        placeholder="Search for your bank"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 8,
    borderBottomWidth: 8,
    borderBottomColor: COLOR.GRAY_100,
  },
  title: {
    ...genFontStyles(32, 32),
    marginTop: 16,
  },
  textFieldContainer: {
    paddingTop: 20,
    paddingBottom: 28,
  },
  textFieldIcon: {
    paddingRight: 24,
    paddingLeft: 12,
  },
});
export default SelectBankHeader;
