import { BezierParams } from "src/types/easing";

const easeOutSine: BezierParams = [0.61, 1, 0.88, 1];
const easeInCubic: BezierParams = [0.32, 0, 0.67, 0];
const easeOutExpo: BezierParams = [0.16, 1, 0.3, 1];
const easeInOutExpo: BezierParams = [0.87, 0, 0.13, 1];

export default {
  easeOutSine,
  easeInCubic,
  easeOutExpo,
  easeInOutExpo,
};
