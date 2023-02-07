import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import RoundedButton from "src/components/RoundedButton";
import BottomSheetHeaderClose from "src/components/SvgComponents/BottomSheetHeaderClose";
import CircularCheckSolidIcon from "src/components/SvgComponents/CircularCheckSolidIcon";
import BottomFixedHeader from "./BottomFixedHeader";

type Props = {
  onCancelRequest: () => any;
  onVehicleFound: (data: any) => any;
  onVehicleNotFound: () => any;
};

enum SEARCH_STATUS {
  SEARCHING,
  FOUND,
}

function SearchingVehicleBottomFixed({
  onCancelRequest,
  onVehicleFound,
  onVehicleNotFound,
}: Props) {
  const [searchStatus, setSearchStatus] = useState<SEARCH_STATUS>(
    SEARCH_STATUS.SEARCHING
  );

  useEffect(() => {
    let mounted = true;

    const timeout = setTimeout(() => {
      onVehicleFound("vehicle found");
      // onVehicleNotFound();
      if (mounted) {
        // setSearchStatus(SEARCH_STATUS.FOUND);
      }
    }, 9000);

    return () => {
      mounted = false;
      clearTimeout(timeout);
    };
  }, []);

  const handleCancelRequest = () => {
    // probably unsubscribe from some listeners and so on
    onCancelRequest();
  };

  const title: Record<SEARCH_STATUS, string> = {
    [SEARCH_STATUS.SEARCHING]: "Finding you a vehicle",
    [SEARCH_STATUS.FOUND]: "Vehicle Found!",
  };

  const renderedView = {
    [SEARCH_STATUS.SEARCHING]: (
      <View style={styles.actionContainer}>
        <RoundedButton
          onPress={handleCancelRequest}
          title="Cancel Request"
          left={<BottomSheetHeaderClose />}
          variant="alternate"
        />
      </View>
    ),
    [SEARCH_STATUS.FOUND]: <CircularCheckSolidIcon />,
  };

  return (
    <View style={styles.bottomSheet}>
      <BottomFixedHeader
        loading={searchStatus === SEARCH_STATUS.SEARCHING}
        title={title[searchStatus]}
      />
      <View style={styles.body}>
        <View style={styles.actionContainer}>{renderedView[searchStatus]}</View>
      </View>
    </View>
  );
}

const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  bottomSheet: {
    height: HEIGHT * 0.3,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actionContainer: {
    maxWidth: 192,
  },
});

export default SearchingVehicleBottomFixed;
