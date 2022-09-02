export enum FONT_FAMILY {
  BR_FIRMA_BOLD_ITALIC = "BR_FIRMA_BOLD_ITALIC",
  BR_FIRMA_BOLD = "BR_FIRMA_BOLD",
  BR_FIRMA_LIGHT_ITALIC = "BR_FIRMA_LIGHT_ITALIC",
  BR_FIRMA_LIGHT = "BR_FIRMA_LIGHT",
  BR_FIRMA_MEDIUM_ITALIC = "BR_FIRMA_MEDIUM_ITALIC",
  BR_FIRMA_MEDIUM = "BR_FIRMA_MEDIUM",
  BR_FIRMA_REGULAR_ITALIC = "BR_FIRMA_REGULAR_ITALIC",
  BR_FIRMA_REGULAR = "BR_FIRMA_REGULAR",
  BR_FIRMA_SEMIBOLD_ITALIC = "BR_FIRMA_SEMIBOLD_ITALIC",
  BR_FIRMA_SEMIBOLD = "BR_FIRMA_SEMIBOLD",
}

const FONT: Record<FONT_FAMILY, any> = {
  [FONT_FAMILY.BR_FIRMA_BOLD_ITALIC]: require("../../assets/fonts/BR-Firma-Bold-Italic.otf"),
  [FONT_FAMILY.BR_FIRMA_BOLD]: require("../../assets/fonts/BR-Firma-Bold.otf"),
  [FONT_FAMILY.BR_FIRMA_LIGHT_ITALIC]: require("../../assets/fonts/BR-Firma-Light-Italic.otf"),
  [FONT_FAMILY.BR_FIRMA_LIGHT]: require("../../assets/fonts/BR-Firma-Light.otf"),
  [FONT_FAMILY.BR_FIRMA_MEDIUM_ITALIC]: require("../../assets/fonts/BR-Firma-Medium-Italic.otf"),
  [FONT_FAMILY.BR_FIRMA_MEDIUM]: require("../../assets/fonts/BR-Firma-Medium.otf"),
  [FONT_FAMILY.BR_FIRMA_REGULAR_ITALIC]: require("../../assets/fonts/BR-Firma-Regular-Italic.otf"),
  [FONT_FAMILY.BR_FIRMA_REGULAR]: require("../../assets/fonts/BR-Firma-Regular.otf"),
  [FONT_FAMILY.BR_FIRMA_SEMIBOLD_ITALIC]: require("../../assets/fonts/BR-Firma-SemiBold-Italic.otf"),
  [FONT_FAMILY.BR_FIRMA_SEMIBOLD]: require("../../assets/fonts/BR-Firma-SemiBold.otf"),
};

export default FONT;
