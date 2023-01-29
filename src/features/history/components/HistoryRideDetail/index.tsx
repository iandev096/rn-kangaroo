import React from "react";
import { Image, Text, View } from "react-native";
import DropoffIcon from "src/components/SvgComponents/DropoffIcon";
import VerticalStepper from "src/components/VerticalStepper";
import IMAGES from "src/constants/IMAGES";
import { styles } from "./styles";

type Props = {};

function PickupIcon() {
  return <View style={styles.pickupIcon} />;
}

function HistoryRideDetail({}: Props) {
  return (
    <View style={styles.historyRideDetail}>
      <Image source={IMAGES.HISTORY_DETAIL_MAP} style={styles.mapImage} />
      <View style={styles.stepperContainer}>
        <VerticalStepper>
          <VerticalStepper.Step icon={<PickupIcon />}>
            <Text style={styles.locationTitle}>
              Senchi street, Airport Residential
            </Text>
            <Text style={styles.locationTime}>Pickup: 11:35 AM</Text>
          </VerticalStepper.Step>
          <VerticalStepper.Step icon={<DropoffIcon />}>
            <Text style={styles.locationTitle}>Dzrasee Street, Adenta</Text>
            <Text style={styles.locationTime}>Drop-off: 12:20 PM</Text>
          </VerticalStepper.Step>
        </VerticalStepper>
      </View>
    </View>
  );
}

export default HistoryRideDetail;
