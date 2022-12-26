import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Slider from "src/components/Slider";
import CloseIcon from "src/components/SvgComponents/CloseIcon";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {
  onCancel: PressableProps["onPress"];
  onConfirm: () => any;
};

function CancelConfirm({ onCancel, onConfirm }: Props) {
  return (
    <>
      <View style={styles.cancel}>
        <Pressable onPress={onCancel}>
          <View style={styles.closeIconContainer}>
            <CloseIcon />
          </View>
        </Pressable>
        <Text style={styles.cancelLabel}>Cancel Order</Text>
      </View>
      <View>
        <Slider label="Slide to complete order" onConfirmed={onConfirm} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cancel: {
    alignItems: "center",
    marginBottom: 24,
  },
  closeIconContainer: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: COLOR.GRAY_100,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelLabel: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 14,
    lineHeight: 20,
    color: COLOR.PRIMARY_A,
    marginTop: 8,
  },
});

export default CancelConfirm;
