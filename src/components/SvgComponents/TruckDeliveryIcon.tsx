import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

function TruckDeliveryIcon(props: SvgProps) {
  return (
    <Svg width={37} height={37} viewBox="0 0 37 37" fill="none" {...props}>
      <Circle cx={18.5} cy={18.5} r={18} fill="#161925" stroke="#161925" />
      <Path
        d="M15.24 21.226a3.243 3.243 0 01-1.064 1.984c-.579.51-1.319.79-2.085.79s-1.507-.28-2.085-.79a3.243 3.243 0 01-1.065-1.984H8v-4.713a.93.93 0 01.266-.652.902.902 0 01.643-.27h11.818V12h1.819v3.69V12h2.727L28 15.742v5.484h-1.85a3.243 3.243 0 01-1.065 1.984c-.579.51-1.319.79-2.085.79s-1.506-.28-2.085-.79a3.243 3.243 0 01-1.065-1.984h-4.61zm7.306-4.613h3.636v-.263l-1.826-2.505h-1.81v2.768zM23 22.15c.362 0 .709-.146.965-.405a1.395 1.395 0 000-1.958 1.354 1.354 0 00-1.93 0 1.395 1.395 0 000 1.957c.256.26.603.406.965.406zm-9.546-1.384a1.4 1.4 0 00-.399-.979 1.363 1.363 0 00-.964-.405 1.347 1.347 0 00-.964.405 1.384 1.384 0 00-.4.979c0 .367.144.72.4.979a1.353 1.353 0 001.928 0c.256-.26.4-.612.4-.979z"
        fill="#fff"
      />
    </Svg>
  );
}

export default TruckDeliveryIcon;
