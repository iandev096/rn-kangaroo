import React, {
  ForwardedRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { LayoutChangeEvent } from "react-native";
import { MapViewRefProps } from "./types";
import RNMapView from "react-native-maps";

/**
 * this hook sets up the snapshot functionality on the map
 * so that users of this component can use its ref to take snapshot
 * eg.
 * const mapViewRef = useRef(MapView)
 * const fileUri = await mapViewRef.takeSnapshot()
 */
function useSetupTakeSnapshot(
  mapViewRef: ForwardedRef<MapViewRefProps>,
  mapRef: React.RefObject<RNMapView>
) {
  const [layoutDim, setLayoutDim] = useState<{
    height: number;
    width: number;
  }>();

  const setSnapshotDim = useCallback((ev: LayoutChangeEvent) => {
    setLayoutDim({
      height: ev.nativeEvent.layout.height,
      width: ev.nativeEvent.layout.width,
    });
  }, []);

  const takeSnapshot = useCallback(() => {
    if (!layoutDim) {
      return;
    }
    return mapRef.current?.takeSnapshot({
      width: layoutDim?.width,
      height: layoutDim?.height,
      format: "png", // image formats: 'png', 'jpg' (default: 'png')
      quality: 0.8, // image quality: 0..1 (only relevant for jpg, default: 1)
      result: "file", // result types: 'file', 'base64' (default: 'file')
    });
  }, [layoutDim]);

  useImperativeHandle(
    mapViewRef,
    () => ({
      takeSnapshot,
    }),
    [takeSnapshot]
  );

  return { setSnapshotDim };
}

export default useSetupTakeSnapshot;
