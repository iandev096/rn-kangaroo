import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

type Props = any;

function SectionSeparatorComponent({ ...props }: Props) {
  const isStandAlone = Object.keys(props).length === 0;
  const shouldNotRenderAtTop = !props.leadingItem;
  if (shouldNotRenderAtTop && !isStandAlone) return null;
  return <View style={styles.sectionSeparator} />;
}

export default SectionSeparatorComponent;
