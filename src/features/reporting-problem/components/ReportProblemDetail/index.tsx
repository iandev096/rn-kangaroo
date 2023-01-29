import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MessageIcon from "src/components/SvgComponents/MessageIcon";
import SadEmojiIcon from "src/components/SvgComponents/SadEmojiIcon";
import SteeringWheelIcon from "src/components/SvgComponents/SteeringWheelIcon";
import IMAGES from "src/constants/IMAGES";
import IssueListItem from "./IssueListItem";
import IssuesList from "./IssuesList";
import { styles } from "./styles";
import TripCardDetail from "./TripCardDetail";

type Props = {};

function ReportProblemDetail({}: Props) {
  return (
    <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
      <View style={styles.screenPadding}>
        <TripCardDetail
          tripTitle="Taxi Delivery"
          time="21 May 2022 • 11:35 AM"
          driverImage={IMAGES.PROFILE_PIC}
          pickupPoint="Senchi street, Airport Residential"
          dropoffPoint="Dzrasee Street, Adenta"
        />
      </View>
      <IssuesList
        title="Common Issues"
        style={{ ...styles.screenPadding, ...styles.issuesListBorderBottom }}
      >
        <IssueListItem
          title="Unpleasant Experience"
          icon={<SadEmojiIcon />}
          showBorder
        />
        <IssueListItem
          title="Poor or unsafe driving"
          icon={<SteeringWheelIcon />}
          showBorder
        />
        <IssueListItem
          title="Leave a message about trip"
          icon={<MessageIcon />}
        />
      </IssuesList>
      <IssuesList
        title="Find help on other issues"
        style={styles.screenPadding}
      >
        <IssueListItem title="Unpleasant Experience" showBorder />
        <IssueListItem title="Poor or unsafe driving" showBorder />
        <IssueListItem title="Leave a message about trip" />
      </IssuesList>
    </ScrollView>
  );
}

export default ReportProblemDetail;
