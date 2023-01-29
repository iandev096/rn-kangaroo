import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function ContactTelephoneIcon(props: SvgProps) {
  return (
    <Svg width={13} height={12} viewBox="0 0 13 12" fill="none" {...props}>
      <Path
        d="M12.07 8.947v2.357a.666.666 0 01-.62.665c-.292.02-.53.031-.714.031C4.846 12 .07 7.225.07 1.333.07 1.15.08.911.101.62A.667.667 0 01.766 0h2.357a.333.333 0 01.332.3 9.268 9.268 0 00.848 3.035.304.304 0 01-.098.378L2.767 4.741a8.698 8.698 0 004.562 4.563l1.027-1.436a.308.308 0 01.382-.1 9.266 9.266 0 003.033.847.333.333 0 01.3.332h-.001z"
        fill="#6B6B6B"
      />
    </Svg>
  );
}

export default ContactTelephoneIcon;
