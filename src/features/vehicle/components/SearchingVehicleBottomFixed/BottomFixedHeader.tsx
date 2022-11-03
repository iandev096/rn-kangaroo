import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FakeShadowDown from "src/components/FakeShadowDown";
import HorizontalProgress from "src/components/HorizontalProgress";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {
  title: string;
  loading: boolean;
};

function BottomFixedHeader({ title, loading = false }: Props) {
  return (
    <View>
      <View style={styles.bottomSheetHeader}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <HorizontalProgress loading={loading} />
      <FakeShadowDown />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSheetHeader: {
    height: 66,
    width: "100%",
    backgroundColor: COLOR.PRIMARY_B,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    lineHeight: 24,
  },
});

export default BottomFixedHeader;
