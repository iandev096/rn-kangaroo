import React from "react";
import { View } from "react-native";
import BottomSheet from "src/components/BottomSheet";
import IMAGES from "src/constants/IMAGES";
import ContactItem from "./ContactItem";
import { styles } from "./styles";

type Props = {
  show: boolean;
  onClose: () => any;
};

function HistoryRecipientContactBottomSheet({ show, onClose }: Props) {
  return (
    <BottomSheet show={show} onClose={onClose} gestureEnabled={false}>
      <View>
        <View style={styles.topBar} />
        <View style={styles.contactItemContainer}>
          <ContactItem
            name="Thomas Jefferson Krystal"
            contactNo="0258090550"
            profileImg={IMAGES.PROFILE_PIC}
          />
        </View>
      </View>
    </BottomSheet>
  );
}

export default HistoryRecipientContactBottomSheet;
