import {
  GestureStateChangeEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { MOVABLE_HEIGHT } from "./constants";

export function getBottomSheetPosition(
  ev: GestureStateChangeEvent<PanGestureHandlerEventPayload>
) {
  "worklet";
  const DISTANCE_LIM = 2.6;
  const VELOCITY_LIM = 800;
  const movingUp = ev.translationY < 0;
  const movingDown = ev.translationY > 0;

  let shouldMoveUp =
    ev.translationY <= -MOVABLE_HEIGHT / DISTANCE_LIM ||
    ev.velocityY <= -VELOCITY_LIM;

  if (movingUp && shouldMoveUp) {
    return -MOVABLE_HEIGHT;
  }

  shouldMoveUp =
    ev.translationY < MOVABLE_HEIGHT / DISTANCE_LIM &&
    ev.velocityY < VELOCITY_LIM;

  if (movingDown && shouldMoveUp) {
    return -MOVABLE_HEIGHT;
  }

  return 0;
}
