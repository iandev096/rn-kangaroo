import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import Button from "src/components/Button";
import RadioListItem from "src/components/RadioListItem";
import HistoryFilterIcon from "src/components/SvgComponents/HistoryFilterIcon";
import { isLastItem } from "src/utils/array";
import { styles } from "./styles";

type Props = {
  onApply: (filterValue: string) => any;
};

const DATA = ["All", "In Progress", "Completed", "Cancel"];

function HistoryFilterForm({ onApply }: Props) {
  const [selected, setSelected] = useState<string>();

  const handleApply = useCallback(() => {
    if (selected) {
      onApply(selected);
    }
  }, [selected]);

  return (
    <View style={styles.historyFilterForm}>
      <View style={styles.header}>
        <HistoryFilterIcon />
        <Text style={styles.title}>Filter History</Text>
      </View>
      <View style={styles.radioListContainer}>
        {DATA.map((filterVal, idx, arr) => (
          <View
            key={filterVal}
            style={[
              !isLastItem(idx, arr) ? styles.borderBottom : null,
              styles.radioListItem,
            ]}
          >
            <RadioListItem
              checked={selected === filterVal}
              label={filterVal}
              onPress={() => setSelected(filterVal)}
            />
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Apply"
          disabled={selected === undefined}
          onPress={() => handleApply()}
        />
      </View>
    </View>
  );
}

export default HistoryFilterForm;
