import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import COLOR from "src/constants/COLOR";
import ContactUsList from "../ContactUsList";
import RequestCallbackGroup from "../RequestCallbackGroup";

type Props = {};

function ContactUsDetail({}: Props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.screenPadding, styles.contactListContainer]}>
          <ContactUsList />
        </View>
      </ScrollView>
      <View style={[styles.screenPadding, styles.bottomGroup]}>
        <RequestCallbackGroup />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  screenPadding: { paddingHorizontal: 24 },
  contactListContainer: {
    marginTop: 20,
  },
  bottomGroup: {
    paddingVertical: 32,
    borderTopWidth: 8,
    borderTopColor: COLOR.GRAY_100,
  },
});

export default ContactUsDetail;
