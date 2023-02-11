import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function ChevronDownXs(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M15 6.666v3.167l-5 3.833-5-3.833V6.666l5 3.833 5-3.833z"
        fill="#6B6B6B"
      />
    </Svg>
  );
}

export default ChevronDownXs;
