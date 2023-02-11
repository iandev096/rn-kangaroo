import React from "react";
import { StyleSheet, View } from "react-native";
import ChevronRight from "src/components/SvgComponents/ChevronRight";
import SettingsLogoutIcon from "src/components/SvgComponents/SettingsLogoutIcon";
import SettingsNotificationIcon from "src/components/SvgComponents/SettingsNotificationIcon";
import SettingsPayoutIcon from "src/components/SvgComponents/SettingsPayoutIcon";
import SettingsProfileIcon from "src/components/SvgComponents/SettingsProfileIcon";
import SettingsSecurityIcon from "src/components/SvgComponents/SettingsSecurityIcon";
import { isLastItem } from "src/utils/array";
import SettingsListItem, { SettingsListItemProps } from "../SettingsListItem";

type Props = {};

function SettingsList({}: Props) {
  const settingsItems: SettingsListItemProps[] = [
    {
      title: "Profile",
      icon: <SettingsProfileIcon />,
      right: <ChevronRight />,
    },
    {
      title: "Payouts",
      icon: <SettingsPayoutIcon />,
      right: <ChevronRight />,
    },
    {
      title: "Notification",
      icon: <SettingsNotificationIcon />,
      right: <ChevronRight />,
    },
    {
      title: "Security",
      icon: <SettingsSecurityIcon />,
      right: <ChevronRight />,
    },
    {
      title: "Logout",
      titleColor: "#EE4B4B",
      icon: <SettingsLogoutIcon />,
    },
  ];

  return (
    <View style={styles.screenPadding}>
      {settingsItems.map((item, idx, arr) => (
        <View
          style={[!isLastItem(idx, arr) ? styles.listItemGap : {}]}
          key={item.title}
        >
          <SettingsListItem {...item} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screenPadding: { paddingHorizontal: 24, paddingTop: 32 },
  listItemGap: {
    paddingBottom: 20,
  },
});

export default SettingsList;
