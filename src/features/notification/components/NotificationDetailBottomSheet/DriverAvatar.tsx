import React from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import Avatar from "src/components/Avatar";
import Slot from "src/components/Slot";
import COLOR from "src/constants/COLOR";

type Props = {
  source: ImageSourcePropType;
  icon: React.ReactNode;
  containerStyle?: View["props"]["style"];
};

function DriverAvatar({ source, icon, containerStyle }: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Avatar source={source} size={48} />
      <Slot child={icon} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    alignSelf: "flex-end",
    marginLeft: -12,
    height: 20,
    width: 20,
    backgroundColor: COLOR.PRIMARY_A,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLOR.PRIMARY_B,
    borderWidth: 1.5,
  },
});

export default DriverAvatar;
