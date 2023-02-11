import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function SettingsLogoutIcon(props: SvgProps) {
  return (
    <Svg width={20} height={18} viewBox="0 0 20 18" fill="none" {...props}>
      <Path
        d="M15 13l4-4m0 0l-4-4m4 4H5m6 4v1a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3h4a3 3 0 013 3v1"
        stroke="#EE4B4B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SettingsLogoutIcon;
