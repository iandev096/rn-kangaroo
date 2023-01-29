import * as React from "react";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";

function CashIcon(props: SvgProps) {
  return (
    <Svg width={21} height={18} viewBox="0 0 21 18" fill="none" {...props}>
      <Rect width={21} height={18} rx={2.5} fill="#47BA90" />
      <Path
        d="M6.438 8.75c-.035 2.429 1.76 4.294 4.236 4.26 1.678 0 3.015-.787 3.684-2.242l-1.478-.774c-.435.927-1.22 1.384-2.171 1.384-1.455 0-2.464-1.114-2.464-2.64 0-1.525 1.009-2.64 2.464-2.64.95 0 1.725.458 2.159 1.385l1.49-.775c-.669-1.455-2.006-2.24-3.684-2.24-2.488-.036-4.271 1.865-4.236 4.282z"
        fill="#fff"
      />
      <Path d="M9.734 3h1.4v11.5h-1.4V3z" fill="#fff" />
    </Svg>
  );
}

export default CashIcon;
