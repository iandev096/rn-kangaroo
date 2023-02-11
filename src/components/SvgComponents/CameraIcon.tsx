import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function CameraIcon(props: SvgProps) {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.75 2.625A1.75 1.75 0 000 4.375v7a1.75 1.75 0 001.75 1.75h10.5a1.75 1.75 0 001.75-1.75v-7a1.75 1.75 0 00-1.75-1.75h-1.388a.875.875 0 01-.618-.256l-.981-.981A1.75 1.75 0 008.025.875h-2.05c-.465 0-.91.185-1.238.513l-.98.98a.875.875 0 01-.62.257H1.75zM7 10.5a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25z"
        fill="#000"
      />
    </Svg>
  );
}

export default CameraIcon;
