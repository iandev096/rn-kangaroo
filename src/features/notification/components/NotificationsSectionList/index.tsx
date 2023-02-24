import React from "react";
import { SectionList, View } from "react-native";
import Avatar from "src/components/Avatar";
import IMAGES from "src/constants/IMAGES";
import NotificationItem from "../NotificationItem";

import { NOTIFICATION_SECTIONS } from "./data";
import SectionHeader from "./SectionHeader";
import SectionSeparatorComponent from "./SectionSeparatorComponent";
import { styles } from "./styles";

type Props = {};

function NotificationSectionList({}: Props) {
  return (
    <SectionList
      sections={NOTIFICATION_SECTIONS}
      style={{ marginTop: 21 }}
      contentContainerStyle={{ paddingBottom: 100 }}
      keyExtractor={(item) => item.title + item.timeStr}
      renderSectionHeader={({ section }) => (
        <View style={styles.screenPadding}>
          <SectionHeader title={section.title} />
        </View>
      )}
      SectionSeparatorComponent={SectionSeparatorComponent}
      renderItem={({ item }) => (
        <View style={styles.screenPadding}>
          <NotificationItem
            thumbnail={<Avatar size={38} source={IMAGES.PROFILE_PIC} />}
            title={item.title}
            desc={item.timeStr}
            isNew={item.isNew}
          />
        </View>
      )}
    />
  );
}

export default NotificationSectionList;
