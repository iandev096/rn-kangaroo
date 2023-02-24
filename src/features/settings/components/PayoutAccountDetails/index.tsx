import React from "react";
import { Image, Text, View } from "react-native";
import TextField from "src/components/TextInputs/TextField";
import IMAGES from "src/constants/IMAGES";
import PaymentInstitutionListItem from "../PaymentInstitutionListItem";
import { styles } from "./styles";

type Props = {};

function PayoutAccountDetails({}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Account Details</Text>

      <Text style={styles.subHeading}>Bank</Text>

      <PaymentInstitutionListItem
        containerStyle={styles.paymentInst}
        logo={
          <Image
            source={IMAGES.SHOP_PLACEHOLDER_LOGO}
            resizeMode="contain"
            style={{ width: "100%", resizeMode: "contain" }}
          />
        }
        title="Select your bank"
        // showSeparator
      />

      <TextField
        labelStyle={styles.textFieldLabel}
        label="Account Number"
        placeholder="90048830039"
        value="90048830039"
        disabled
      />
    </View>
  );
}

export default PayoutAccountDetails;
