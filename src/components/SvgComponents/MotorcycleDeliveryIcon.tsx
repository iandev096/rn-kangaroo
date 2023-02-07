import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

function MotorcycleDeliveryIcon(props: SvgProps) {
  return (
    <Svg width={37} height={37} viewBox="0 0 37 37" fill="none" {...props}>
      <Circle cx={18.5} cy={18.5} r={18} fill="#161925" stroke="#161925" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.368 18.105v.992a3.552 3.552 0 104.71 2.908l2.309-.84-.002-.005h.002l1.249-4.634h.748l.975 2.68a3.553 3.553 0 101.568-.31l-1.15-3.16H25v-2.368h-3.085L21.053 11h-3.158v1.579h2.053l.86 2.368h-2.755l-2.238 1.58h-.289v-3.948H10v5.527h2.368zm3.055 1.322a3.552 3.552 0 00-1.476-.51v-.812h2.369l2.255-1.579h.431l-.92 3.432-1.544.563a3.554 3.554 0 00-1.115-1.094zm-.475 4.416a1.974 1.974 0 11-2.79-2.792 1.974 1.974 0 012.79 2.792zm10.264 0a1.974 1.974 0 11-2.792-2.792 1.974 1.974 0 012.792 2.792z"
        fill="#fff"
      />
    </Svg>
  );
}

export default MotorcycleDeliveryIcon;
