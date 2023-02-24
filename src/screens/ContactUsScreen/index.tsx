import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ContactUsDetail, ContactUsHeader } from "src/features/miscellaneous";

type Props = {};

function ContactUsScreen({}: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ContactUsHeader />
      <ContactUsDetail />
    </SafeAreaView>
  );
}

export default ContactUsScreen;
