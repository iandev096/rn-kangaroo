import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function EarningsIcon(props: SvgProps) {
  return (
    <Svg width={17} height={15} viewBox="0 0 18 16" fill="none" {...props}>
      <Path
        d="M0 5h16.15c.225 0 .442.088.601.244.16.156.249.368.249.59v8.333c0 .22-.09.433-.249.589a.859.859 0 01-.601.244H.85a.859.859 0 01-.601-.244.825.825 0 01-.249-.59V5zm.85-5H13.6v3.333H0v-2.5C0 .613.09.4.249.244A.859.859 0 01.85 0zm10.2 9.167v1.666h2.55V9.167h-2.55z"
        fill="#000"
      />
    </Svg>
  );
}

export default EarningsIcon;
