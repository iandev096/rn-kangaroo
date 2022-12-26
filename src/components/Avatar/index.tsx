import React from "react";
import { Image, ImageProps } from "react-native";

type Props = { size?: number } & ImageProps;

function Avatar({ size = 70, style, resizeMode = "cover", ...props }: Props) {
  return (
    <Image
      style={[style, { height: size, width: size, borderRadius: size / 2 }]}
      resizeMode={resizeMode}
      {...props}
    />
  );
}

export default Avatar;
