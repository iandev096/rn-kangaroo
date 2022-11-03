import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle
} from "react-native-reanimated";
import InvertedButton from "src/components/InvertedButton";
import AboutIcon from "src/components/SvgComponents/AboutIcon";
import EarningsIcon from "src/components/SvgComponents/EarningsIcon";
import HistoryIcon from "src/components/SvgComponents/HistoryIcon";
import InfoIcon from "src/components/SvgComponents/InfoIcon";
import SettingsIcon from "src/components/SvgComponents/SettingsIcon";
import SupportIcon from "src/components/SvgComponents/SupportIcon";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import IMAGES from "src/constants/IMAGES";
import { AppStackProps } from "src/features/navigation";
import { DRAWER_WIDTH, HEIGHT } from "./constants";
import DrawerItem from "./DrawerItem";

type Props = { translateX: SharedValue<number> };

function DrawerContent({ translateX }: Props) {
  const navigation = useNavigation<AppStackProps["navigation"]>();
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <View style={styles.padded}>
        <Image source={IMAGES.SHOP_PLACEHOLDER_LOGO} style={styles.shopLogo} />
        <Text style={styles.shopName}>Melcom Nanakrom</Text>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonContainer}>
            <InvertedButton left={<EarningsIcon />} title="Earnings" />
          </View>
          <View style={styles.buttonContainer}>
            <InvertedButton left={<HistoryIcon />} title="History" />
          </View>
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.padded}>
        <View style={styles.drawerItem}>
          <DrawerItem left={<SettingsIcon />} title="Settings" />
        </View>
        <View style={styles.drawerItem}>
          <DrawerItem left={<InfoIcon />} title="F.A.Q" />
        </View>
        <View style={styles.drawerItem}>
          <DrawerItem left={<SupportIcon />} title="Support" />
        </View>
        <View style={styles.drawerItem}>
          <DrawerItem left={<AboutIcon />} title="About" />
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.PRIMARY_B,
    width: DRAWER_WIDTH,
    height: HEIGHT,
    position: "absolute",
    left: -DRAWER_WIDTH,
  },
  padded: {
    padding: 16,
  },
  shopLogo: {
    width: 64,
    height: 64,
    marginTop: HEIGHT * 0.11,
    marginBottom: 12,
  },
  shopName: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 32,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 0.48,
  },
  hr: {
    height: 1,
    width: "100%",
    backgroundColor: COLOR.GRAY_100,
    marginTop: 35,
    marginBottom: 24,
  },
  drawerItem: {
    marginBottom: 8,
  },
});

export default DrawerContent;
