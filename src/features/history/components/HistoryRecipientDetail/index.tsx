import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Avatar from "src/components/Avatar";
import IMAGES from "src/constants/IMAGES";
import { styles } from "./styles";

type Props = { onPress: TouchableOpacity["props"]["onPress"] };

function HistoryRecipientDetail({ onPress }: Props) {
  return (
    <View style={styles.historyRecipientDetail}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.recipientItem}>
          <Avatar source={IMAGES.RECIPIENT_AVATAR} size={48} />
          <View style={styles.recipientItemInfo}>
            <Text style={styles.recipientItemLabel} numberOfLines={1}>
              Recipient
            </Text>
            <Text style={styles.recipientItemValue} numberOfLines={1}>
              Thomas Jefferson Crystal
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default HistoryRecipientDetail;
