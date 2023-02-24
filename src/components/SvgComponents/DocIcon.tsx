import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function DocIcon(props: SvgProps) {
  return (
    <Svg width={18} height={20} viewBox="0 0 18 20" fill="none" {...props}>
      <Path
        d="M17 20H1a1 1 0 01-1-1V6h18v13a1 1 0 01-1 1zm1-16H0V1a1 1 0 011-1h16a1 1 0 011 1v3zM4 9v4h4V9H4zm0 6v2h10v-2H4zm6-5v2h4v-2h-4z"
        fill="#000"
      />
    </Svg>
  );
}

export default DocIcon;
