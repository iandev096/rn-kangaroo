import React, { useEffect, useMemo, useRef } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import RNMapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import IMAGES from "src/constants/IMAGES";

import useCurrentPosition from "src/hooks/useCurrentPosition";
import { styles } from "./styles";

export type MapProps = { showCurLoc?: boolean } & RNMapView["props"];

function MapView({ style, showCurLoc, ...props }: MapProps) {
  const { location } = useCurrentPosition();

  const mapRef = useRef<RNMapView>(null);

  const initialRegion = useMemo<Region | undefined>(() => {
    const [latitude, longitude] = [
      location?.coords.latitude,
      location?.coords.longitude,
    ];

    if (!latitude || !longitude) {
      return {
        latitude: 46.98624673373905,
        latitudeDelta: 45.600105789507005,
        longitude: 0.072,
        longitudeDelta: 0.063,
      };
    }

    return {
      latitude,
      longitude,
      latitudeDelta: 0.072,
      longitudeDelta: 0.063,
    };
  }, [location]);

  useEffect(
    function moveToInitialRegion() {
      if (initialRegion) {
        mapRef.current?.animateToRegion(initialRegion);
      }
    },
    [initialRegion]
  );

  return (
    <View style={styles.container}>
      <RNMapView
        ref={mapRef}
        // initialRegion={initialRegion}
        onRegionChangeComplete={console.log}
        {...props}
        provider={PROVIDER_GOOGLE}
        style={[styles.map, style]}
      />
      {showCurLoc ? (
        <TouchableOpacity activeOpacity={0.8} style={styles.curLocButton}>
          <Image
            source={IMAGES.CUR_LOC}
            style={styles.curLocButtonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

export default MapView;
