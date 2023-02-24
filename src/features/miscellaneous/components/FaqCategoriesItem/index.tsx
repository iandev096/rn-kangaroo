import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ChevronRight from "src/components/SvgComponents/ChevronRight";
import { styles } from "./styles";

type Props = {
  onPress?: TouchableOpacity["props"]["onPress"];
  title: string;
};

function FaqCategoriesItem({ onPress, title }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.listItem}>
        <Text style={styles.title}>{title}</Text>
        <ChevronRight />
      </View>
    </TouchableOpacity>
  );
}

export default FaqCategoriesItem;
