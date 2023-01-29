import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ImageSourcePropType, Text, View } from "react-native";
import Avatar from "src/components/Avatar";
import COLOR from "src/constants/COLOR";
import { styles } from "./styles";

type Props = {
  source: ImageSourcePropType;
};

function DriverAvatar({ source }: Props) {
  return (
    <View style={styles.avatarContainer}>
      <Avatar size={96} source={source} />
      <View style={styles.ratingContainer}>
        <MaterialCommunityIcons name="star" size={12} color={COLOR.PRIMARY_B} />
        <Text style={styles.ratingValue}>5.0</Text>
      </View>
    </View>
  );
}

export default DriverAvatar;
