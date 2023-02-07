import React from "react";
import { SectionList, View } from "react-native";
import { isFirstItem } from "src/utils/array";
import DeliveryListItem from "../DeliveryListItem";
import {
  DELIVERIES_SECTIONS,
  deliveryVehicleIcon,
  deliveryVehicleTitle,
} from "./data";
import ItemSeparatorComponent from "./ItemSeparatorComponent";
import ListHeaderComponent from "./ListHeaderComponent";
import SectionHeader from "./SectionHeader";
import SectionSeparatorComponent from "./SectionSeparatorComponent";
import { styles } from "./styles";

type Props = {};

function DeliveriesSectionList({}: Props) {
  return (
    <SectionList
      ListHeaderComponent={ListHeaderComponent}
      sections={DELIVERIES_SECTIONS}
      contentContainerStyle={{ paddingBottom: 100 }}
      keyExtractor={(item) => item.amount + item.time + item.deliveryVehicle}
      renderSectionHeader={({ section }) => (
        <SectionHeader {...section.title} />
      )}
      SectionSeparatorComponent={SectionSeparatorComponent}
      renderItem={({ item, index }) => (
        <View style={styles.screenPadding}>
          {!isFirstItem(index) ? <ItemSeparatorComponent /> : null}
          <DeliveryListItem
            amount={item.amount}
            icon={deliveryVehicleIcon.get(item.deliveryVehicle)}
            time={item.time}
            title={deliveryVehicleTitle.get(item.deliveryVehicle)!}
          />
        </View>
      )}
    />
  );
}

export default DeliveriesSectionList;
