import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function TruckIcon(props: SvgProps) {
  return (
    <Svg width={23} height={17} viewBox="0 0 23 17" fill="none" {...props}>
      <Path
        d="M16.625 3h3l3 4.056V13H20.59a3.5 3.5 0 01-6.93 0H8.59a3.5 3.5 0 01-6.93 0H.625V1a1 1 0 011-1h14a1 1 0 011 1v2zm0 2v3h4v-.285L18.617 5h-1.992z"
        fill="#545454"
      />
    </Svg>
  );
}

export default TruckIcon;
