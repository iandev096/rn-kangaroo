import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import IMAGES from "src/constants/IMAGES";
import {
  Institution,
  PaymentInstitutionsList,
  SelectBankHeader,
} from "src/features/settings";

type Props = {};

const PAYMENT_INST: Institution[] = [
  {
    name: "Vodafone Cash",
    logo: IMAGES.VODA_CASH,
  },
  {
    name: "MTN Mobil Money",
    logo: IMAGES.MTN_MOMO,
  },
  {
    name: "AirtelTigo Money",
    logo: IMAGES.AIRTEL_MONEY,
  },
];

function SelectBankScreen({}: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SelectBankHeader />
      <PaymentInstitutionsList list={PAYMENT_INST} />
    </SafeAreaView>
  );
}

export default SelectBankScreen;
