import * as React from "react";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";

function CircularCheckSolidIcon(props: SvgProps) {
  return (
    <Svg width={57} height={56} viewBox="0 0 57 56" fill="none" {...props}>
      <Rect x={0.25} width={56} height={56} rx={28} fill="#161925" />
      <Path
        d="M25.432 32.401l12.744-12.745 1.962 1.96-14.706 14.706L16.61 27.5l1.96-1.96 6.863 6.862z"
        fill="#fff"
      />
    </Svg>
  );
}

export default CircularCheckSolidIcon;
