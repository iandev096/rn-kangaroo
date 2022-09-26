import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function AboutIcon(props: SvgProps) {
  return (
    <Svg width={18} height={18} viewBox="0 0 19 19" fill="none" {...props}>
      <Path
        d="M9 18a9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9zm-.9-9.9v5.4h1.8V8.1H8.1zm0-3.6v1.8h1.8V4.5H8.1z"
        fill="#000"
      />
    </Svg>
  );
}

export default AboutIcon;
