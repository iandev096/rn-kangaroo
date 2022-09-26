import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function SettingsIcon(props: SvgProps) {
  return (
    <Svg width={18} height={18} viewBox="0 0 19 19" fill="none" {...props}>
      <Path
        d="M6.264 2.394L8.416.242a.826.826 0 011.168 0l2.152 2.152h3.044a.826.826 0 01.826.826v3.044l2.152 2.152a.826.826 0 010 1.168l-2.152 2.152v3.044a.826.826 0 01-.826.826h-3.044l-2.152 2.152a.826.826 0 01-1.168 0l-2.152-2.152H3.22a.826.826 0 01-.826-.826v-3.044L.242 9.584a.826.826 0 010-1.168l2.152-2.152V3.22a.826.826 0 01.826-.826h3.044zM9 11.477a2.477 2.477 0 100-4.955 2.477 2.477 0 000 4.955z"
        fill="#000"
      />
    </Svg>
  );
}

export default SettingsIcon;
