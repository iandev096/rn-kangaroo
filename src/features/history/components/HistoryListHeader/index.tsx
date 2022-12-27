import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "src/components/BackButton";
import Pill from "src/components/Pill";
import CaretDownIcon from "src/components/SvgComponents/CaretDownIcon";
import TransHeader from "src/components/TransHeader";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {
  filterText: string;
  toggleFilter: () => any;
};

function PillRightIcon() {
  return (
    <View style={styles.pillRightIcon}>
      <CaretDownIcon />
    </View>
  );
}

function HistoryListHeader({ filterText = "All", toggleFilter }: Props) {
  return (
    <View style={styles.header}>
      <TransHeader
        left={<BackButton onPress={() => console.log("pressed")} />}
        bottom={<Text style={styles.title}>History</Text>}
        right={
          <Pill
            onPress={() => toggleFilter()}
            title={filterText}
            right={<PillRightIcon />}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    color: COLOR.PRIMARY_A,
    marginTop: 16,
  },
  pillRightIcon: {
    height: 16,
    width: 16,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
});

export default HistoryListHeader;
