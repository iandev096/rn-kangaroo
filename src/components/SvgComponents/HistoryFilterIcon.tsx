import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function HistoryFilterIcon(props: SvgProps) {
  return (
    <Svg width={45} height={44} viewBox="0 0 45 44" fill="none" {...props}>
      <Path
        d="M22.07 16v-2m0 2a2 2 0 000 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 010-4m0 4v2m0-6V14m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 010-4m0 4v2m0-6V14"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HistoryFilterIcon;
