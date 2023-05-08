import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, View } from "react-native";
import KangarooIcon from "src/components/SvgComponents/KangorooIcon";
import RegIcon from "src/components/SvgComponents/RegIcon";
import IMAGES from "src/constants/IMAGES";
import { styles } from "./styles";

type Props = {};

function AuthHeader({}: Props) {
  return (
    <View style={styles.authHeader}>
      <Image style={styles.background} source={IMAGES.AUTH_HEADER_BANNER} />
      <View style={styles.overlay} />
      <View style={styles.logoContainer}>
        <KangarooIcon width={72} height={36} />
        <View style={styles.regIconContainer}>
          <RegIcon />
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

export default AuthHeader;
