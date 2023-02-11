import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function SettingsSecurityIcon(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 5.994a6 6 0 01-7.743 5.743L8 11.994l-1 1-1 1H4v2H0v-4l4.257-4.257A6 6 0 1116 5.994zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 002 0 4 4 0 00-4-4z"
        fill="#000"
      />
    </Svg>
  );
}

export default SettingsSecurityIcon;
