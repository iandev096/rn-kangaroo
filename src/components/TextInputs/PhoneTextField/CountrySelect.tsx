import React from "react";
import { Image, StyleSheet } from "react-native";
import ChevronDownXs from "src/components/SvgComponents/ChevronDownXs";
import IMAGES from "src/constants/IMAGES";
import TextFieldContainer from "../shared/TextFieldContainer";

type Props = {};

function CountrySelect({}: Props) {
  return (
    <TextFieldContainer style={styles.countrySelect}>
      <Image
        source={IMAGES.GHANA_FLAG}
        resizeMode="contain"
        style={{ width: 29 }}
      />
      <ChevronDownXs />
    </TextFieldContainer>
  );
}

const styles = StyleSheet.create({
  countrySelect: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 104,
    marginRight: 8,
  },
});
export default CountrySelect;
