import React from "react";
import { Text, View } from "react-native";
import Avatar from "src/components/Avatar";
import RoundedButton from "src/components/RoundedButton";
import CameraIcon from "src/components/SvgComponents/CameraIcon";
import IMAGES from "src/constants/IMAGES";
import { styles } from "./styles";

type Props = {};

function UserInfo({}: Props) {
  return (
    <View style={styles.userInfo}>
      <Avatar source={IMAGES.PROFILE_PIC} size={100} />
      <Text style={styles.fullName}>Melcom Nanakrom</Text>
      <RoundedButton
        title="Change Photo"
        size="small"
        left={<CameraIcon />}
        variant="alternate"
      />
    </View>
  );
}

export default UserInfo;
