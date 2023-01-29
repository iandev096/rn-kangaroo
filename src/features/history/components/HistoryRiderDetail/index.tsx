import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Avatar from "src/components/Avatar";
import IMAGES from "src/constants/IMAGES";
import { styles } from "./styles";

type Props = {
  onPress?: TouchableOpacity["props"]["onPress"];
};

function HistoryRiderDetail({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.historyRiderDetail}>
        <View style={styles.riderItem}>
          <Avatar source={IMAGES.PROFILE_PIC} size={56} />
          <View style={styles.riderItemInfo}>
            <Text style={styles.riderItemLabel}>Rider</Text>
            <Text style={styles.riderItemValue}>Mustapha Nioris</Text>
          </View>
          <Image
            style={styles.riderItemVehicleImg}
            source={IMAGES.VEHICLE_TRICYCLE}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default HistoryRiderDetail;
