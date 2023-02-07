import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

function BicycleDeliveryIcons(props: SvgProps) {
  return (
    <Svg width={37} height={37} viewBox="0 0 37 37" fill="none" {...props}>
      <Circle cx={18.5} cy={18.5} r={18} fill="#161925" stroke="#161925" />
      <Path
        d="M13.273 18.5h-1.091V14.89h-1.455v-1.444h4.364v1.444h-1.455v2.019l7.137-1.9-.422-1.563H18V12h2.893a.73.73 0 01.719.535l1.13 4.186-1.406.374-.186-.69-7.877 2.095zm-.364 5.056a1.46 1.46 0 001.029-.424 1.44 1.44 0 000-2.042 1.46 1.46 0 00-2.057 0 1.44 1.44 0 000 2.043c.272.27.642.423 1.028.423zm0 1.444a2.92 2.92 0 01-2.057-.846 2.879 2.879 0 010-4.086 2.92 2.92 0 014.114 0 2.879 2.879 0 010 4.086A2.92 2.92 0 0112.91 25zm9.455-1.444a2.19 2.19 0 001.542-.635 2.159 2.159 0 000-3.064 2.19 2.19 0 00-3.085 0 2.159 2.159 0 000 3.064c.409.406.964.635 1.543.635zm0 1.444a3.65 3.65 0 01-2.572-1.058 3.598 3.598 0 01-1.065-2.553c0-.958.383-1.876 1.065-2.553a3.65 3.65 0 012.572-1.058c.964 0 1.889.38 2.57 1.058A3.598 3.598 0 0126 21.389c0 .958-.383 1.876-1.065 2.553A3.649 3.649 0 0122.364 25z"
        fill="#fff"
      />
    </Svg>
  );
}

export default BicycleDeliveryIcons;
