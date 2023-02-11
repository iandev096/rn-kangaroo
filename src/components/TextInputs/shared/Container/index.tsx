import React, { memo } from "react";
import { View, ViewProps } from "react-native";

type Props = {} & ViewProps;

function Container({ style, children }: Props) {
  return <View style={style}>{children}</View>;
}

const MemoizedContainer = memo(Container);

export default MemoizedContainer;
