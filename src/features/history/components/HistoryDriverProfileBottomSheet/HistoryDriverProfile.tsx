import React from "react";
import { Text, View } from "react-native";
import VehicleIcon from "src/components/SvgComponents/VehicleIcon";
import IMAGES from "src/constants/IMAGES";
import DriverAvatar from "./DriverAvatar";
import StatItem from "./StatItem";
import { styles } from "./styles";

type Props = {};

function HistoryDriverProfile({}: Props) {
  return (
    <View style={styles.historyDriverProfile}>
      <DriverAvatar source={IMAGES.PROFILE_PIC} />
      <View style={styles.textGroup}>
        <Text style={styles.driverNameText}>Mustapha</Text>
        <Text style={styles.driverVehicleText}>Toyota Vitz</Text>
      </View>
      <View style={styles.statItemContainer}>
        <StatItem
          top={<VehicleIcon />}
          bottom={<Text style={styles.regNoText}>GS 329-22</Text>}
        />
        <StatItem
          style={{ marginHorizontal: 12 }}
          top={<Text style={styles.statItemLabel}>78</Text>}
          bottom={<Text style={styles.statItemValue}>Trips</Text>}
        />
        <StatItem
          top={<Text style={styles.statItemLabel}>5</Text>}
          bottom={<Text style={styles.statItemValue}>Months</Text>}
        />
      </View>
    </View>
  );
}

export default HistoryDriverProfile;
