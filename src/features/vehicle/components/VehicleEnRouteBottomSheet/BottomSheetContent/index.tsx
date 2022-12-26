import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Avatar from "src/components/Avatar";
import ArrowRightIcon from "src/components/SvgComponents/ArrowRightIcon";
import LocationIcon from "src/components/SvgComponents/LocationIcon";
import PriceIcon from "src/components/SvgComponents/PriceIcon";
import TruckIcon from "src/components/SvgComponents/TruckIcon";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import IMAGES from "src/constants/IMAGES";
import BottomSheetItem from "./BottomSheetItem";
import CancelConfirm from "./CancelConfirm";
import PriceDetails from "./PriceDetails";
import Telephone from "./Telephone";
import UserDetails from "./UserDetails";
import VehicleDetails from "./VehicleDetails";

type Props = {};

function BottomSheetContent({}: Props) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <BottomSheetItem
          containerStyle={styles.strokeEffect}
          left={<Avatar source={IMAGES.PROFILE_PIC} />}
          center={
            <UserDetails name="Richard Boateng" rating={4.9} trips={29} />
          }
          right={<Telephone />}
        />

        <BottomSheetItem
          containerStyle={styles.strokeEffect}
          left={
            <View style={styles.leftIconContainer}>
              <TruckIcon />
            </View>
          }
          center={<VehicleDetails name="White Kia Bongo 3" regNo="GC 738-20" />}
          right={<Avatar size={48} source={IMAGES.VEHICLE_PIC} />}
        />
        <BottomSheetItem
          containerStyle={styles.strokeEffect}
          left={
            <View style={styles.leftIconContainer}>
              <LocationIcon />
            </View>
          }
          center={
            <Text style={styles.locationText}>Okanttey Street, Adenta</Text>
          }
          right={<ArrowRightIcon />}
        />
        <BottomSheetItem
          left={
            <View style={styles.leftIconContainer}>
              <PriceIcon />
            </View>
          }
          center={<PriceDetails amount={140} type="Cash" />}
        />
      </ScrollView>
      <View style={styles.cancelConfirmGroup}>
        <CancelConfirm
          onCancel={() => console.log("onCanceled")}
          onConfirm={() => console.log("onConfirmed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopStartRadius: 3,
    borderTopEndRadius: 3,
    overflow: "hidden",
    height: "100%",
  },
  scrollView: { maxHeight: 370 },
  leftIconContainer: {
    width: 32,
  },
  strokeEffect: { marginBottom: 1 },
  strokeEffectBg: { marginBottom: 8 },
  locationText: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    color: COLOR.PRIMARY_A,
  },
  cancelConfirmGroup: {
    flexGrow: 1,
    marginTop: 8,
    backgroundColor: COLOR.PRIMARY_B,
    width: "100%",
    minHeight: 180,
    paddingTop: 24,
    paddingHorizontal: 16,
  },
});

export default BottomSheetContent;
