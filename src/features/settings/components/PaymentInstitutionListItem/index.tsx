import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Slot from "src/components/Slot";
import ChevronRightXs from "src/components/SvgComponents/ChevronRightXs";
import { styles } from "./styles";

type Props = {
  logo: React.ReactNode;
  title: string;
  showSeparator?: boolean;
  onPress?: TouchableOpacity["props"]["onPress"];
  containerStyle?: ViewStyle;
};

function PaymentInstitutionListItem({
  logo,
  title,
  showSeparator,
  onPress,
  containerStyle,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.listItem, containerStyle]}>
        <Slot child={logo} style={styles.logoContainer} />
        <View style={[styles.info, showSeparator && styles.separator]}>
          <Text style={styles.titleText}>{title}</Text>
          <ChevronRightXs />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default PaymentInstitutionListItem;
