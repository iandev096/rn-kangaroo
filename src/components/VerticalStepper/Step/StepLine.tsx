import React from "react";
import { View } from "react-native";
import COLOR from "src/constants/COLOR";

type Props = { height?: number };

function StepLine({ height }: Props) {
  console.log("stepLine height", height);

  if (!height) {
    return null;
  }

  return <View style={{ height, width: 1, backgroundColor: COLOR.GRAY_300 }} />;
}

export default StepLine;
