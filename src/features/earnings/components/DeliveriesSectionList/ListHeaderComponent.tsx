import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import AmountCard from "../AmountCard";
import FilterButtons from "../FilterButtons";
import SectionSeparatorComponent from "./SectionSeparatorComponent";
import { styles } from "./styles";

type Props = {};

function ListHeaderComponent({}: Props) {
  const [filter, setFilter] = useState("Today");

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.screenPadding}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <FilterButtons value={filter} onChangeFilter={setFilter} />
      </ScrollView>
      <View style={[styles.screenPadding, styles.amountCard]}>
        <AmountCard
          amount="GHS 85"
          date="September 15"
          deliveries="21 Deliveries"
        />
      </View>
      <SectionSeparatorComponent />
    </View>
  );
}

export default ListHeaderComponent;
