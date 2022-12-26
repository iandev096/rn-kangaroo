import React from "react";
import { View } from "react-native";
import TelephoneIcon from "src/components/SvgComponents/TelephoneIcon";
import COLOR from "src/constants/COLOR";

type Props = {};

function Telephone({}: Props) {
  return (
    <View
      style={{
        height: 48,
        width: 48,
        borderRadius: 24,
        backgroundColor: COLOR.GRAY_100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TelephoneIcon />
    </View>
  );
}

export default Telephone;
