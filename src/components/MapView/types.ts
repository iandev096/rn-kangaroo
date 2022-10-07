import RNMapView from "react-native-maps";

export type MapProps = { showCurLoc?: boolean } & RNMapView["props"];
export type MapViewRefProps = {
  takeSnapshot: () => Promise<string> | undefined;
};
