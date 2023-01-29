import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CaretRightIcon from "src/components/SvgComponents/CaretRightIcon";
import { styles } from "./styles";

type Props = {
  icon?: React.ReactNode;
  title: string;
  onPress?: TouchableOpacity["props"]["onPress"];
  showBorder?: boolean;
};

function IssueListItem({ icon, title, onPress, showBorder }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.issueListItem]}>
        {icon ? (
          <View style={styles.issuesListIconContainer}>{icon}</View>
        ) : null}
        <View
          style={[
            styles.issuesListItemTitleContainer,
            showBorder ? styles.issuesListItemBorderBottom : null,
          ]}
        >
          <Text numberOfLines={1} style={styles.issuesListItemTitle}>
            {title}
          </Text>
          <CaretRightIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default IssueListItem;
