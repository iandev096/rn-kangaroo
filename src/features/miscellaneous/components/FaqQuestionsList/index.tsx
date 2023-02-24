import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import COLOR from "src/constants/COLOR";
import useScrollEnabled from "src/hooks/useScrollEnabled";
import { genFontStyles } from "src/utils/font";
import FaqCategoriesItem from "../FaqCategoriesItem";

type Props = {};

const LIST = [
  {
    label: "This is an example question",
    value: "This is an example question",
  },
  {
    label: "Another placeholder quetion",
    value: "Another placeholder quetion",
  },
  { label: "A follow up question", value: "A follow up question" },
  { label: "About Kangaroo", value: "About Kangaroo" },
];

function FaqQuestionsList({}: Props) {
  const { onLayout, scrollEnabled } = useScrollEnabled();
  return (
    <ScrollView style={styles.screenPadding} scrollEnabled={scrollEnabled}>
      <View onLayout={onLayout}>
        <Text style={styles.subHeading}>About Kangaroo</Text>
        {LIST.map((item) => (
          <View key={item.label} style={styles.faqItemContainer}>
            <FaqCategoriesItem
              title={item.label}
              onPress={() => console.log(item.value)}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  faqItemContainer: {
    borderBottomWidth: 1,
    borderColor: COLOR.GRAY_100,
    paddingBottom: 8,
    marginBottom: 8,
  },
  screenPadding: {
    paddingHorizontal: 24,
    marginTop: 28,
  },
  subHeading: {
    ...genFontStyles(18, 40, COLOR.GRAY_500),
    marginBottom: 12,
  },
});

export default FaqQuestionsList;
