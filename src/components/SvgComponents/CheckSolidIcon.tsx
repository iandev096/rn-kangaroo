import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function CheckSolidIcon(props: SvgProps) {
  return (
    <Svg width={25} height={18} viewBox="0 0 25 18" fill="none" {...props}>
      <Path
        d="M9.636 13.413L22.379.668l1.962 1.96L9.636 17.334.813 8.51l1.96-1.96 6.863 6.862z"
        fill="#161925"
      />
    </Svg>
  );
}

export default CheckSolidIcon;
