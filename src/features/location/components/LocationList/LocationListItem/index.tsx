import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {
  title: string;
  description: string;
  onPress?: TouchableOpacity["props"]["onPress"];
};

function LocationListItem({ title, description, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.thumb}>
        <Ionicons name="location-sharp" size={20} color={COLOR.GRAY_400} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginTop: 16,
  },
  thumb: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    marginLeft: 16,
    borderBottomColor: COLOR.GRAY_200,
    borderBottomWidth: 1,
    flex: 1,
    paddingBottom: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    lineHeight: 20,
    color: COLOR.PRIMARY_A,
  },
  description: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
    lineHeight: 20,
    color: "#6B6B6B",
  },
});

export default LocationListItem;
