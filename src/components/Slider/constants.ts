import { Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;
const LAYOUT_PADDING = 16;
const TRACK_PADDING = 4;
const MOVER_WIDTH = 48;
export const SLIDER_TRACK_WIDTH =
  WIDTH - (2 * LAYOUT_PADDING + 2 * TRACK_PADDING + MOVER_WIDTH);

export const COMPLETE_THRESH_RATIO = 0.55;
