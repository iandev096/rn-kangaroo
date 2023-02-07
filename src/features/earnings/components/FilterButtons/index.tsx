import React from "react";
import { View } from "react-native";
import RoundedButton from "src/components/RoundedButton";
import { isFirstItem } from "src/utils/array";
import { styles } from "./styles";

type Props = {
  onChangeFilter: (filter: string) => any;
  value: string;
};

const FILTERS = ["Today", "This Week", "This Month", "This Year"];

function FilterButtons({ onChangeFilter, value }: Props) {
  return (
    <View style={styles.filterButtons}>
      {FILTERS.map((filter, idx) => (
        <View key={filter} style={[!isFirstItem(idx) ? styles.buttonGap : {}]}>
          <RoundedButton
            title={filter}
            onPress={() => onChangeFilter(filter)}
            size="small"
            variant={filter === value ? "normal" : "alternate"}
          />
        </View>
      ))}
    </View>
  );
}

export default FilterButtons;
