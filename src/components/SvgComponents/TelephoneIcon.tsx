import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function TelephoneIcon({
  width = 18,
  height = 18,
  fill = "#161925",
  ...props
}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <Path
        d="M17.625 13.598v3.34a.945.945 0 01-.878.942c-.413.029-.75.044-1.01.044C7.39 17.924.624 11.159.624 2.813c0-.261.014-.598.043-1.01a.944.944 0 01.943-.88h3.34a.472.472 0 01.47.426c.022.217.041.39.06.521.188 1.31.573 2.584 1.141 3.779a.43.43 0 01-.139.535L4.445 7.641a12.322 12.322 0 006.464 6.463l1.454-2.034a.436.436 0 01.542-.14c1.194.567 2.468.95 3.777 1.138.132.018.305.04.52.06a.472.472 0 01.423.47z"
        fill={fill}
      />
    </Svg>
  );
}

export default TelephoneIcon;
