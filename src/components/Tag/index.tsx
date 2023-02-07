import React from "react";
import { Text, View } from "react-native";

import { Variant } from "src/types/tag";
import Slot from "../Slot";
import { getStyles } from "./styles";

export type TagProps = {
  left: React.ReactNode;
  title: string;
  variant: Variant;
};

function Tag({ title, left, variant }: TagProps) {
  const styles = getStyles(variant);

  return (
    // this view acts as the stage that enables the tag's width to be fit-content
    <View style={{ flexDirection: "row" }}>
      <View style={styles.tag}>
        <Slot child={left} style={styles.iconContainer} />
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* this point of this view is so that the width of the tag will always be fit-content */}
      <View style={{ flex: 1 }} />
    </View>
  );
}

export default Tag;
