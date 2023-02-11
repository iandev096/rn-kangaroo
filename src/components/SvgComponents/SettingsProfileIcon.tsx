import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function SettingsProfileIcon(props: SvgProps) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M17.1 8.681V17.1a.9.9 0 01-.9.9H1.8a.9.9 0 01-.9-.9V8.681A3.587 3.587 0 010 6.3V.9A.9.9 0 01.9 0h16.2a.9.9 0 01.9.9v5.4a3.59 3.59 0 01-.9 2.381zM10.8 6.3a.9.9 0 111.8 0 1.8 1.8 0 103.6 0V1.8H1.8v4.5a1.8 1.8 0 003.6 0 .9.9 0 111.8 0 1.8 1.8 0 003.6 0z"
        fill="#161925"
      />
    </Svg>
  );
}

export default SettingsProfileIcon;
