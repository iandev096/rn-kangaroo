import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function ArrowRightIcon({ width = 16, height = 17, ...props }: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${height} ${width}`}
      fill="none"
      {...props}
    >
      <Path
        d="M12.524 9.029H.004V6.97h12.52L7.007 1.454 8.46 0l8 8-8 8-1.454-1.454 5.517-5.517z"
        fill="#161925"
      />
    </Svg>
  );
}

export default ArrowRightIcon;
