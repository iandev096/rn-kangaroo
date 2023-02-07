import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

type Props = {
  child?: React.ReactNode;
  noContainer?: boolean;
  style?: ViewStyle;
} & ViewProps;

function Slot({ child, noContainer = false, style, ...props }: Props) {
  const cmp = child ? child : null;

  if (cmp === null) return null;

  if (noContainer) return <>{cmp}</>;

  return (
    <View style={style} {...props}>
      {cmp}
    </View>
  );
}

export default Slot;
