import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function RegIcon(props: SvgProps) {
  return (
    <Svg width={11} height={12} viewBox="0 0 11 12" fill="none" {...props}>
      <Path
        d="M5.477.729a5.39 5.39 0 110 10.78 5.39 5.39 0 010-10.78zm0 1.078a4.313 4.313 0 100 8.625 4.313 4.313 0 000-8.625zm.27 1.617a1.887 1.887 0 01.98 3.498l1.374 1.892H6.768L5.593 7.197H4.398v1.617H3.32v-5.39h2.426zm0 1.078H4.397v1.617h1.348a.809.809 0 00.805-.73l.004-.078a.809.809 0 00-.809-.809z"
        fill="#fff"
      />
    </Svg>
  );
}

export default RegIcon;
