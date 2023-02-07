import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import COLOR from "src/constants/COLOR";

type Props = { pathFill?: string } & SvgProps;

function CheckIconXs({ pathFill = COLOR.PRIMARY_A, ...props }: Props) {
  return (
    <Svg width={10} height={10} viewBox="0 0 10 10" fill="none" {...props}>
      <Path
        d="M3.9 9.5c.372 0 .658-.137.856-.41L9.8 1.885c.068-.1.119-.198.151-.293A.837.837 0 0010 1.32a.76.76 0 00-.255-.586A.92.92 0 009.101.5a.923.923 0 00-.45.101c-.119.064-.235.175-.347.334L3.88 7.462 1.625 4.858a.917.917 0 00-.72-.328c-.26 0-.477.079-.65.237A.766.766 0 000 5.36c0 .104.02.206.06.303.04.098.108.2.205.304l2.796 3.16c.224.25.503.374.84.374z"
        fill={pathFill}
      />
    </Svg>
  );
}

export default CheckIconXs;
