import { Dimensions } from "react-native";

export const HEIGHT = Dimensions.get("window").height;
export const CONTAINER_HEIGHT = HEIGHT * 0.37;
export const BOTTOMSHEET_HEIGHT = HEIGHT * 0.8;
export const MOVABLE_HEIGHT = BOTTOMSHEET_HEIGHT - CONTAINER_HEIGHT;
export const MAP_HEIGHT = HEIGHT - CONTAINER_HEIGHT;
