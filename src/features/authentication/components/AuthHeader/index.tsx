import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FONT_FAMILY } from "src/constants/FONT";
import IMAGES from "src/constants/IMAGES";
import THEME from "src/constants/THEME";

type Props = {};

function AuthHeader({}: Props) {
  return (
    <View style={styles.authHeader}>
      <Image style={styles.background} source={IMAGES.AUTH_HEADER_BANNER} />
      <View style={styles.content}>
        <Image
          resizeMode="contain"
          style={styles.kangarooLogo}
          source={IMAGES.KANGAROO_LOGO}
        />
        <Text style={styles.text}>Find the perfect way to move anything.</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  authHeader: {
    height: 284,
    width: "100%",
    position: "relative",
    backgroundColor: THEME.PRIMARY_B,
    justifyContent: "center",
  },
  content: {
    padding: 32,
  },
  kangarooLogo: {
    width: 183,
    height: 28,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.BR_FIRMA_LIGHT,
    color: THEME.PRIMARY_B,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default AuthHeader;
