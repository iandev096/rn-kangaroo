import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function CaretRightIcon(props: SvgProps) {
  return (
    <Svg width={8} height={14} viewBox="0 0 8 14" fill="none" {...props}>
      <Path
        d="M.852 1l5.454 6-5.454 6"
        stroke="#AFAFAF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CaretRightIcon;
