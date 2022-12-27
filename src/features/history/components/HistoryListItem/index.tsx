import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Avatar from "src/components/Avatar";
import { styles } from "./styles";

type Props = {
  mapThumb: ImageSourcePropType;
  title: string;
  desc: string;
  driverImg: ImageSourcePropType;
  vehicleImg: ImageSourcePropType;
  statusImg: ImageSourcePropType;
  price: string;
  onPress?: TouchableOpacity["props"]["onPress"];
};

function HistoryListItem({
  mapThumb,
  title,
  desc,
  driverImg,
  vehicleImg,
  statusImg,
  price,
  onPress,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.listItem}>
        <Image source={mapThumb} style={styles.mapThumb} />
        <View style={styles.infoGroup}>
          <Text numberOfLines={1} style={styles.titleText}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.descText}>
            {desc}
          </Text>
          <View style={styles.bottomGroup}>
            <View style={styles.avatarGroup}>
              <Avatar source={driverImg} size={32} />
              <Avatar source={vehicleImg} size={32} />
              <Avatar source={statusImg} size={32} />
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>{price}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default HistoryListItem;
