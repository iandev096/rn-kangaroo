import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

export function genFontStyles(
  fontSize: number,
  lineHeight: number,
  color: string = COLOR.PRIMARY_A,
  fontFamily: string = FONT_FAMILY.BR_FIRMA_MEDIUM
) {
  return { fontFamily, fontSize, lineHeight, color };
}
