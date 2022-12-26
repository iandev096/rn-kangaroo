import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function CloseIcon(props: SvgProps) {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
      <Path
        d="M7.5 5.834L13.334 0 15 1.666 9.166 7.5 15 13.334 13.334 15 7.5 9.166 1.666 15 0 13.334 5.834 7.5 0 1.666 1.666 0 7.5 5.834z"
        fill="#161925"
      />
    </Svg>
  );
}

export default CloseIcon;
