import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export type ContentProps = { children: React.ReactNode | React.ReactNode[] };

function Content({ children }: ContentProps) {
  return <View style={styles.content}>{children}</View>;
}

export default Content;
