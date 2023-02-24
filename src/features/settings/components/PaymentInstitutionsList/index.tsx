import React from "react";
import { ImageSourcePropType } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PaymentInstitutionListItem from "../PaymentInstitutionListItem";
import InstitutionLogo from "./InstitutionLogo";

export type Institution = {
  name: string;
  logo: ImageSourcePropType;
};
type Props = {
  list: Institution[];
};

function PaymentInstitutionsList({ list }: Props) {
  return (
    <FlatList
      data={list}
      contentContainerStyle={{ paddingHorizontal: 20, marginTop: 20 }}
      renderItem={({ item }) => (
        <PaymentInstitutionListItem
          title={item.name}
          logo={<InstitutionLogo logo={item.logo} />}
          showSeparator
        />
      )}
    />
  );
}

export default PaymentInstitutionsList;
