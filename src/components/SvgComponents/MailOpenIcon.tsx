import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function MailOpenIcon({
  width = 20,
  height = 20,
  fill = "#000",
  ...props
}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M.243 5.687L9.49.143a1 1 0 011.029 0l9.238 5.545a.5.5 0 01.243.429v12.715a1 1 0 01-1 1H1a1 1 0 01-1-1V6.117a.5.5 0 01.243-.43zm16.103 1.39l-6.285 5.438-6.414-5.444-1.294 1.524 7.72 6.554 7.581-6.56-1.308-1.512z"
        fill={fill}
      />
    </Svg>
  );
}

export default MailOpenIcon;
