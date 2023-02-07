import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

type Props = {};

function ItemSeparatorComponent({}: Props) {
  return <View style={styles.itemSeparator} />;
}

export default ItemSeparatorComponent;
