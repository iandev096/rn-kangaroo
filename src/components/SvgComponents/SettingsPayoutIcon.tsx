import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function SettingsPayoutIcon(props: SvgProps) {
  return (
    <Svg width={18} height={14} viewBox="0 0 18 14" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 0A2.25 2.25 0 000 2.25v4.5A2.25 2.25 0 002.25 9V2.25H13.5A2.25 2.25 0 0011.25 0h-9zM4.5 6.75A2.25 2.25 0 016.75 4.5h9A2.25 2.25 0 0118 6.75v4.5a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-4.5zm6.75 4.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
        fill="#161925"
      />
    </Svg>
  );
}

export default SettingsPayoutIcon;
