import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function BottomSheetHeaderClose(props: SvgProps) {
  return (
    <Svg width={13} height={13} viewBox="0 0 13 13" fill="none" {...props}>
      <Path
        d="M6.364 5.087l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95L0 11.45 4.95 6.5 0 1.55 1.414.137l4.95 4.95z"
        fill="#161925"
      />
    </Svg>
  );
}

export default BottomSheetHeaderClose;
