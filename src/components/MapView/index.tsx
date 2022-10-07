import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Image, TouchableOpacity, View } from "react-native";
import RNMapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import IMAGES from "src/constants/IMAGES";

import useCurrentPosition from "src/hooks/useCurrentPosition";
import { styles } from "./styles";

export type MapProps = { showCurLoc?: boolean } & RNMapView["props"];
type ImperativeHandleRef = { takeSnapshot: () => any };

function MapView({ style, showCurLoc, ...props }: MapProps, ref: any) {
  const [layoutDim, setLayoutDim] = useState<{
    height: number;
    width: number;
  }>();
  const { location } = useCurrentPosition();

  const mapRef = useRef<RNMapView>(null);
  useImperativeHandle(
    ref,
    () => ({
      takeSnapshot: () =>
        mapRef.current?.takeSnapshot({
          width: layoutDim?.width,
          height: layoutDim?.height,
        }),
    }),
    [layoutDim]
  );

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
    <View
      style={styles.container}
      onLayout={(ev) =>
        setLayoutDim({
          height: ev.nativeEvent.layout.height,
          width: ev.nativeEvent.layout.width,
        })
      }
    >
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

export default forwardRef(MapView);
