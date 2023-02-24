import React from "react";
import { Image, ImageSourcePropType } from "react-native";

type Props = { logo: ImageSourcePropType };

function InstitutionLogo({ logo }: Props) {
  return (
    <Image source={logo} style={{ resizeMode: "contain", width: "100%" }} />
  );
}

export default InstitutionLogo;
