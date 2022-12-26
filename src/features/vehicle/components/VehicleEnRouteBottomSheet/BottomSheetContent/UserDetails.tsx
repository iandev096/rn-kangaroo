import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {
  name: string;
  trips: number | string;
  rating: number | string;
};

function UserDetails({ name, trips, rating }: Props) {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.bottomGroup}>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={14} />
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <Text style={styles.trips}>{trips} trips</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    lineHeight: 18,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    color: COLOR.PRIMARY_A,
  },
  bottomGroup: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR.GRAY_100,
    padding: 8,
    borderRadius: 3,
  },
  rating: {
    fontSize: 14,
    lineHeight: 14,
    marginBottom: -2,
    marginLeft: 4,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    color: COLOR.PRIMARY_A,
  },
  trips: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
    color: COLOR.GRAY_500,
    marginLeft: 10,
  },
});

export default UserDetails;
