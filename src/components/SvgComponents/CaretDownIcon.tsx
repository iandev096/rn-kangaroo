import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function CaretDownIcon(props: SvgProps) {
  return (
    <Svg width={8} height={6} viewBox="0 0 8 6" fill="none" {...props}>
      <Path
        d="M8 .334v2.533L4 5.934 0 2.867V.334l4 3.067L8 .334z"
        fill="#000"
      />
    </Svg>
  );
}

export default CaretDownIcon;
