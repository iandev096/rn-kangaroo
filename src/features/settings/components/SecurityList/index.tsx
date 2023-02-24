import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ChevronRightXs from "src/components/SvgComponents/ChevronRightXs";
import Switch from "src/components/Switch";
import COLOR from "src/constants/COLOR";
import useScrollEnabled from "src/hooks/useScrollEnabled";
import SecurityListItem from "../SecurityListItem";

type Props = {};

function SecurityList({}: Props) {
  const { onLayout, scrollEnabled } = useScrollEnabled();
  const [earningsPageLock, setEarningsPageLock] = useState(false);
  const toggleEarningsPageLock = () => setEarningsPageLock((cur) => !cur);

  return (
    <ScrollView scrollEnabled={scrollEnabled}>
      <View onLayout={onLayout} style={styles.screenPadding}>
        <SecurityListItem
          style={styles.separator}
          title="Change Password"
          right={<ChevronRightXs />}
        />
        <SecurityListItem
          onPress={toggleEarningsPageLock}
          style={styles.separator}
          title="Earnings Page Lock"
          desc="Require authentication when opening the earnings page"
          right={
            <Switch
              value={earningsPageLock}
              containerStyle={{ marginLeft: 12 }}
              onPress={toggleEarningsPageLock}
            />
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenPadding: { paddingHorizontal: 24, marginTop: 16 },
  separator: {
    borderBottomWidth: 1,
    borderColor: COLOR.GRAY_100,
  },
});

export default SecurityList;
