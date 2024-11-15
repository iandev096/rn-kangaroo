import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function ChevronRight({ width = 8, height = 14, ...props }: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 8 14"
      fill="none"
      {...props}
    >
      <Path
        d="M1.64 1l5.455 6-5.454 6"
        stroke="#AFAFAF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ChevronRight;
