import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { Layout } from "react-native-reanimated";
import Slot from "src/components/Slot";
import { styles } from "./styles";

type Props = {
  thumbnail: React.ReactNode;
  title: string;
  desc: string;
  isNew?: boolean;
};

function NotificationItem({ thumbnail, title, desc, isNew = false }: Props) {
  return (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <Slot child={thumbnail} style={styles.thumbnail} />
        <View style={styles.textContent}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.descText}>{desc}</Text>
        </View>
        <Animated.View
          style={[
            styles.isNewIndicator,
            isNew ? styles.isNewActive : styles.isNewInactive,
          ]}
          layout={Layout.springify()}
        />
      </View>
    </TouchableOpacity>
  );
}

export default NotificationItem;
