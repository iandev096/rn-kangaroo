import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function InfoIcon(props: SvgProps) {
  return (
    <Svg width={18} height={18} viewBox="0 0 19 19" fill="none" {...props}>
      <Path
        d="M9 18a9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9zm-.9-6.3v1.8h1.8v-1.8H8.1zm1.8-1.48A3.152 3.152 0 009 4.05a3.15 3.15 0 00-3.09 2.532l1.766.353A1.35 1.35 0 119 8.55a.9.9 0 00-.9.9v1.35h1.8v-.58z"
        fill="#000"
      />
    </Svg>
  );
}

export default InfoIcon;
