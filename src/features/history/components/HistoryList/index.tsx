import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import COLOR from "src/constants/COLOR";
import IMAGES from "src/constants/IMAGES";
import { isLastItem } from "src/utils/array";
import HistoryListItem from "../HistoryListItem";

type Props = {};

const DATA = [
  {
    title: "Okanttey Street, Adenta",
    desc: "21 May 2022, 11:35 AM",
    driverImg: IMAGES.PROFILE_PIC,
    vehicleImg: IMAGES.AVATAR_TRUCK,
    statusImg: IMAGES.AVATAR_CHECK,
    price: "GHS 140",
    mapThumb: IMAGES.MAP_THUMB,
  },
  {
    title: "Senchi street, Airport Residential Area",
    desc: "21 May 2022, 11:35 AM",
    driverImg: IMAGES.PROFILE_PIC,
    vehicleImg: IMAGES.AVATAR_SEDAN,
    statusImg: IMAGES.AVATAR_CHECK,
    price: "GHS 140",
    mapThumb: IMAGES.MAP_THUMB,
  },
  {
    title: "Dzrasee Street, Adenta",
    desc: "21 May 2022, 11:35 AM",
    driverImg: IMAGES.PROFILE_PIC,
    vehicleImg: IMAGES.AVATAR_TRUCK,
    statusImg: IMAGES.AVATAR_ACTIVE,
    price: "GHS 140",
    mapThumb: IMAGES.MAP_THUMB,
  },
  {
    title: "Lagos Avenue, East Legon",
    desc: "21 May 2022, 11:35 AM",
    driverImg: IMAGES.PROFILE_PIC,
    vehicleImg: IMAGES.AVATAR_SEDAN,
    statusImg: IMAGES.AVATAR_CLOSE,
    price: "GHS 140",
    mapThumb: IMAGES.MAP_THUMB,
  },
  {
    title: "Senchi street, Airport Residential Area",
    desc: "21 May 2022, 11:35 AM",
    driverImg: IMAGES.PROFILE_PIC,
    vehicleImg: IMAGES.AVATAR_TRUCK,
    statusImg: IMAGES.AVATAR_CHECK,
    price: "GHS 140",
    mapThumb: IMAGES.MAP_THUMB,
  },
  {
    title: "Okanttey Street, Adenta",
    desc: "21 May 2022, 11:35 AM",
    driverImg: IMAGES.PROFILE_PIC,
    vehicleImg: IMAGES.AVATAR_TRUCK,
    statusImg: IMAGES.AVATAR_CHECK,
    price: "GHS 140",
    mapThumb: IMAGES.MAP_THUMB,
  },
  {
    title: "Senchi street, Airport Residential Area",
    desc: "21 May 2022, 11:35 AM",
    driverImg: IMAGES.PROFILE_PIC,
    vehicleImg: IMAGES.AVATAR_SEDAN,
    statusImg: IMAGES.AVATAR_CHECK,
    price: "GHS 140",
    mapThumb: IMAGES.MAP_THUMB,
  },
  {
    title: "Dzrasee Street, Adenta",
    desc: "21 May 2022, 11:35 AM",
    driverImg: IMAGES.PROFILE_PIC,
    vehicleImg: IMAGES.AVATAR_TRUCK,
    statusImg: IMAGES.AVATAR_ACTIVE,
    price: "GHS 140",
    mapThumb: IMAGES.MAP_THUMB,
  },
  {
    title: "Lagos Avenue, East Legon",
    desc: "21 May 2022, 11:35 AM",
    driverImg: IMAGES.PROFILE_PIC,
    vehicleImg: IMAGES.AVATAR_SEDAN,
    statusImg: IMAGES.AVATAR_CLOSE,
    price: "GHS 140",
    mapThumb: IMAGES.MAP_THUMB,
  },
  {
    title: "Senchi street, Airport Residential Area",
    desc: "21 May 2022, 11:35 AM",
    driverImg: IMAGES.PROFILE_PIC,
    vehicleImg: IMAGES.AVATAR_TRUCK,
    statusImg: IMAGES.AVATAR_CHECK,
    price: "GHS 140",
    mapThumb: IMAGES.MAP_THUMB,
  },
];

function HistoryList({}: Props) {
  return (
    <FlatList
      data={DATA}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      renderItem={({ item, index }) => (
        <View
          key={index}
          style={!isLastItem(index, DATA) ? styles.borderBottom : null}
        >
          <HistoryListItem
            title={item.title}
            desc={item.desc}
            driverImg={item.driverImg}
            mapThumb={item.mapThumb}
            price={item.price}
            statusImg={item.statusImg}
            vehicleImg={item.vehicleImg}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.GRAY_200,
    borderStyle: "solid",
  },
});

export default HistoryList;
