import React from "react";
import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import IMAGES from "src/constants/IMAGES";

type Props = {
  onMenuPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

function DrawerScreenHeader({ onMenuPress }: Props) {
  return (
    <View style={styles.header}>
      <Pressable
        onPress={onMenuPress}
        style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
      >
        <Image source={IMAGES.MENU_ICON} style={styles.menuIcon} />
      </Pressable>
      <Image source={IMAGES.KANGAROO_ICON} style={styles.kangarooIcon} />
    </View>
  );
}

const MENU_ICON_SHADOW = 36;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIcon: {
    height: 44 + MENU_ICON_SHADOW,
    width: 44 + MENU_ICON_SHADOW,
    resizeMode: "contain",
    marginLeft: -20,
  },
  kangarooIcon: {
    width: 56,
    height: 28,
  },
});

export default DrawerScreenHeader;
