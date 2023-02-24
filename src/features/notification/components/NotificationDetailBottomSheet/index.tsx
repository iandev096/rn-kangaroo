import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import BottomSheet from "src/components/BottomSheet";
import Button from "src/components/Button";
import IMAGES from "src/constants/IMAGES";
import BottomSheetHeader from "./BottomSheetHeader";
import DriverAvatar from "./DriverAvatar";
import { styles } from "./styles";

type Props = {
  show: boolean;
  onClose: () => any;
};

function NotificationDetailBottomSheet({ show, onClose }: Props) {
  const title = "Payout for this week has been successfully made";
  const timeStr = "11:35am";
  const description =
    "A payout amount of GHS 218 has successfully been made to your mobile money account 0271614162 for the period of 12/09/2022 to 17/09/2022.";
  const buttonText = "See Details";
  return (
    <BottomSheet show={show} onClose={onClose} gestureEnabled={false}>
      <View style={styles.container}>
        <BottomSheetHeader title={title} timeStr={timeStr} />
        <View style={[styles.infoGroup, styles.screenPadding]}>
          <Text style={[styles.description]}>{description}</Text>
          <DriverAvatar
            source={IMAGES.PROFILE_PIC}
            containerStyle={styles.avatar}
            icon={<FontAwesome5 name="check" size={9} color="white" />}
          />
        </View>
        <Button
          title={buttonText}
          containerStyle={styles.screenPadding}
          variant="alternate"
        />
      </View>
    </BottomSheet>
  );
}

export default NotificationDetailBottomSheet;
