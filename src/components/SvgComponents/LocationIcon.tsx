import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function LocationIcon(props: SvgProps) {
  return (
    <Svg width={16} height={20} viewBox="0 0 16 20" fill="none" {...props}>
      <Path
        d="M13.459 14.142L7.89 20l-5.569-5.858A8.426 8.426 0 01.167 9.9a8.685 8.685 0 01.448-4.786 8.209 8.209 0 012.9-3.718A7.6 7.6 0 017.891 0a7.6 7.6 0 014.374 1.396 8.208 8.208 0 012.9 3.718 8.685 8.685 0 01.45 4.786 8.427 8.427 0 01-2.156 4.242zM7.89 11.966c.928 0 1.818-.388 2.474-1.078a3.781 3.781 0 001.025-2.604c0-.976-.368-1.913-1.025-2.603a3.414 3.414 0 00-2.474-1.079c-.929 0-1.819.388-2.475 1.079A3.781 3.781 0 004.39 8.284c0 .977.368 1.913 1.025 2.604a3.414 3.414 0 002.474 1.078zm0-1.84c-.465 0-.91-.195-1.238-.54a1.89 1.89 0 01-.512-1.302c0-.488.184-.956.512-1.302.328-.345.773-.539 1.238-.539.464 0 .909.194 1.237.54.328.345.512.813.512 1.301s-.184.957-.512 1.302c-.328.345-.773.54-1.237.54z"
        fill="#545454"
      />
    </Svg>
  );
}

export default LocationIcon;