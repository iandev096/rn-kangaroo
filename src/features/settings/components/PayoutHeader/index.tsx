import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import BackButton from "src/components/BackButton";
import InfoIconXs from "src/components/SvgComponents/InfoIconXs";
import TransHeader from "src/components/TransHeader";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

type Props = {};

function PayoutHeader({}: Props) {
  return (
    <View style={styles.header}>
      <TransHeader
        left={<BackButton onPress={() => console.log("pressed")} />}
        right={
          <Pressable>
            <InfoIconXs width={18} height={18} pathColor={COLOR.PRIMARY_A} />
          </Pressable>
        }
        bottom={<Text style={styles.title}>Weekly Payouts</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 8,
  },
  title: {
    ...genFontStyles(32, 40),
    marginTop: 16,
  },
});

export default PayoutHeader;
