import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

function AmountCardIcon(props: SvgProps) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Circle cx={16} cy={16} r={15.5} stroke="#CBCBCB" />
      <Path
        d="M8.828 13.978h13.628c.19 0 .372.07.507.197.134.127.21.298.21.477v6.743c0 .18-.076.35-.21.477a.741.741 0 01-.507.198H9.546a.741.741 0 01-.508-.198.655.655 0 01-.21-.477v-7.417zm.717-4.046h10.759v2.697H8.828v-2.023c0-.179.076-.35.21-.477a.741.741 0 01.507-.197zm8.607 7.417v1.349h2.152v-1.349h-2.152z"
        fill="#CBCBCB"
      />
    </Svg>
  );
}

export default AmountCardIcon;
