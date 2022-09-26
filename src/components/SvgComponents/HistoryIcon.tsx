import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function HistoryIcon(props: SvgProps) {
  return (
    <Svg width={17} height={17} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M8.5 17A8.5 8.5 0 1117 8.5 8.5 8.5 0 018.5 17zm.85-8.5V4.25h-1.7v5.95h5.1V8.5h-3.4z"
        fill="#000"
      />
    </Svg>
  );
}

export default HistoryIcon;
