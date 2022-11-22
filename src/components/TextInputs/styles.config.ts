import COLOR from "src/constants/COLOR";
import { Size, Status } from "./types";

export const fontSize: Record<Size, number> = {
  medium: 16,
  small: 14,
};

export const textFieldheight: Record<Size, number> = {
  medium: 48,
  small: 36,
};

export const borderColor: Record<Status | "active", string> = {
  active: COLOR.PRIMARY_A,
  error: "#F1998E",
  success: "#66D19E",
  normal: "transparent",
};

export const backgroundColor: Record<Status | "disabled", string> = {
  success: "#E6F2ED",
  disabled: COLOR.GRAY_50,
  error: "#FFEFED",
  normal: COLOR.GRAY_100,
};

export const color: Record<Status | "disabled", string> = {
  success: COLOR.PRIMARY_A,
  disabled: COLOR.GRAY_400,
  error: COLOR.PRIMARY_A,
  normal: COLOR.PRIMARY_A,
};
