import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function PhoneIconXs(props: SvgProps) {
  return (
    <Svg width={11} height={16} viewBox="0 0 11 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.23.084a1.98 1.98 0 00-1.98 1.98v11.874a1.979 1.979 0 001.98 1.98h5.937a1.98 1.98 0 001.979-1.98V2.063A1.98 1.98 0 008.166.084H2.23zm2.968 13.854a.99.99 0 100-1.979.99.99 0 000 1.98z"
        fill="#333"
      />
    </Svg>
  );
}

export default PhoneIconXs;
