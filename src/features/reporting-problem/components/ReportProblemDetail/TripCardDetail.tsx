import React from "react";
import { ImageSourcePropType, Text, View } from "react-native";
import Avatar from "src/components/Avatar";
import DropoffIconSm from "src/components/SvgComponents/DropoffIconSm";
import VerticalStepper from "src/components/VerticalStepper";
import { styles } from "./styles";

type Props = {
  tripTitle: string;
  time: string;
  driverImage: ImageSourcePropType;
  pickupPoint: string;
  dropoffPoint: string;
};

function PickupIcon() {
  return <View style={styles.pickupIcon} />;
}

function TripCardDetail({
  tripTitle,
  time,
  driverImage,
  pickupPoint,
  dropoffPoint,
}: Props) {
  return (
    <View style={styles.tripCardDetail}>
      <View style={styles.tripCardRow}>
        <View>
          <Text style={styles.tripTitle}>{tripTitle}</Text>
          <Text style={styles.tripTime}>{time}</Text>
        </View>
        <Avatar source={driverImage} size={48} />
      </View>
      <VerticalStepper>
        <VerticalStepper.Step
          ICON_CONTAINER_HEIGHT={24}
          ICON_CONTAINER_WIDTH={16}
          icon={<PickupIcon />}
        >
          <Text style={styles.stepText}>{pickupPoint}</Text>
        </VerticalStepper.Step>
        <VerticalStepper.Step
          ICON_CONTAINER_HEIGHT={24}
          ICON_CONTAINER_WIDTH={16}
          icon={<DropoffIconSm />}
        >
          <Text style={styles.stepText}>{dropoffPoint}</Text>
        </VerticalStepper.Step>
      </VerticalStepper>
    </View>
  );
}

export default TripCardDetail;
