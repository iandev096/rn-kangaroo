import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DocIcon from "src/components/SvgComponents/DocIcon";
import COLOR from "src/constants/COLOR";
import useScrollEnabled from "src/hooks/useScrollEnabled";
import AboutListItem from "../AboutListItem";

type Props = {};

const LIST = [
  {
    label: "Rate the app",
    value: "Rate the app",
    icon: <MaterialIcons name="star-rate" size={22} color={COLOR.PRIMARY_A} />,
  },
  {
    label: "Privacy",
    value: "Privacy",
    icon: <DocIcon />,
  },
  {
    label: "Terms of Use",
    value: "Terms of Use",
    icon: <DocIcon />,
  },
];

function AboutList({}: Props) {
  const { onLayout, scrollEnabled } = useScrollEnabled();
  return (
    <ScrollView scrollEnabled={scrollEnabled}>
      <View onLayout={onLayout} style={{ paddingHorizontal: 24 }}>
        {LIST.map((item) => (
          <AboutListItem
            key={item.label}
            title={item.label}
            icon={item.icon}
            onPress={() => console.log(item.value)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default AboutList;
