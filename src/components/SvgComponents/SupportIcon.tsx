import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function SupportIcon(props: SvgProps) {
  return (
    <Svg width={18} height={18} viewBox="0 0 19 19" fill="none" {...props}>
      <Path
        d="M2.636 15.364A8.972 8.972 0 010 9a9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9H0l2.636-2.636zM5.4 9.9a3.6 3.6 0 007.2 0H5.4z"
        fill="#000"
      />
    </Svg>
  );
}

export default SupportIcon;
