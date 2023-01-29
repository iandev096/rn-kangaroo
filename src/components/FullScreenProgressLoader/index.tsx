import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import CircularLoader from "../CircularLoader";

type Props = {
  loadingText: string;
} & Modal["props"];

function FullScreenProgressLoader({ loadingText, ...props }: Props) {
  return (
    <Modal {...props}>
      <View style={styles.background}>
        <CircularLoader />
        <Text numberOfLines={1} style={styles.loadingText}>
          {loadingText}
        </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLOR.PRIMARY_B,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    lineHeight: 20,
    fontSize: 16,
    textAlign: "center",
    marginTop: 24,
    overflow: "visible",
  },
});

export default FullScreenProgressLoader;
