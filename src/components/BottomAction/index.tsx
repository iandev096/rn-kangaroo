import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {};

function BottomAction({}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="map-sharp" size={17} color="#AEAEAE" />
        <Text style={styles.text}>Choose location on map</Text>
      </View>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: 47,
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  text: {
    marginLeft: 16,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    lineHeight: 20,
    fontSize: 16,
  },
});

export default BottomAction;
