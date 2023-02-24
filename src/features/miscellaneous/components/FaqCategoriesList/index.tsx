import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import COLOR from "src/constants/COLOR";
import useScrollEnabled from "src/hooks/useScrollEnabled";
import FaqCategoriesItem from "../FaqCategoriesItem";

type Props = {};

const LIST = [
  { label: "About Kangaroo", value: "About Kangaroo" },
  { label: "Using Kangaroo", value: "Using Kangaroo" },
  { label: "Earnings and Settlement", value: "Earnings and Settlement" },
];

function FaqCategoriesList({}: Props) {
  const { onLayout, scrollEnabled } = useScrollEnabled();
  return (
    <ScrollView style={styles.screenPadding} scrollEnabled={scrollEnabled}>
      <View onLayout={onLayout}>
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
});

export default FaqCategoriesList;
