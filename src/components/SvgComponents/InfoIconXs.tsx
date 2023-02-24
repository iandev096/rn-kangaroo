import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function InfoIconXs({
  width = 16,
  height = 16,
  pathColor = "#757575",
  ...props
}: SvgProps & { pathColor?: string }) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M8.887 11.205H8.11V8.094h-.777m.777-3.111h.008m6.992 3.11a7 7 0 11-13.998 0 7 7 0 0113.998 0z"
        stroke={pathColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default InfoIconXs;
