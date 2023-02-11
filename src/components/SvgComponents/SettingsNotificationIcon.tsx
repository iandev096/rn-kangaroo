import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function SettingsNotificationIcon(props: SvgProps) {
  return (
    <Svg width={16} height={18} viewBox="0 0 16 18" fill="none" {...props}>
      <Path
        d="M7.875 0a6.75 6.75 0 00-6.75 6.75v4.034l-.796.796a1.125 1.125 0 00.796 1.92h13.5a1.125 1.125 0 00.795-1.92l-.795-.796V6.75A6.75 6.75 0 007.875 0zm0 18A3.375 3.375 0 014.5 14.625h6.75A3.375 3.375 0 017.875 18z"
        fill="#161925"
      />
    </Svg>
  );
}

export default SettingsNotificationIcon;
