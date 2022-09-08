import React from "react";
import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {
  onPressTextField?: ((event: GestureResponderEvent) => void) & (() => void);
};

function DeliverToForm({ onPressTextField }: Props) {
  return (
    <View>
      <Text style={styles.heading}>Deliver to?</Text>
      <TouchableOpacity
        onPress={onPressTextField}
        style={styles.textField}
        activeOpacity={0.8}
      >
        <Ionicons name="location-sharp" size={20} color={COLOR.PRIMARY_A} />
        <Text style={styles.textFieldText}>Enter Destination</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 48,
    lineHeight: 64,
    marginBottom: 20,
  },
  textField: {
    backgroundColor: COLOR.GRAY_100,
    height: 56,
    borderRadius: 3,
    paddingHorizontal: 19.01,
    flexDirection: "row",
    alignItems: "center",
  },
  textFieldText: {
    marginLeft: 18.24,
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
    color: "#6b6b6b",
    fontSize: 18,
    lineHeight: 28,
  },
});

export default DeliverToForm;
