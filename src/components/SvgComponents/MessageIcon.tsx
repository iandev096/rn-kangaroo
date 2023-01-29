import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function MessageIcon(props: SvgProps) {
  return (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.21 2.266v9a2.25 2.25 0 01-2.25 2.25h-5.624l-5.625 4.5v-4.5H2.46a2.25 2.25 0 01-2.25-2.25v-9A2.25 2.25 0 012.46.016h13.5a2.25 2.25 0 012.25 2.25zM5.837 5.64h-2.25v2.25h2.25V5.64zm2.25 0h2.25v2.25h-2.25V5.64zm6.75 0h-2.25v2.25h2.25V5.64z"
        fill="#161925"
      />
    </Svg>
  );
}

export default MessageIcon;
