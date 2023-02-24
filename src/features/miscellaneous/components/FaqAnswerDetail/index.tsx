import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "src/components/Button";
import COLOR from "src/constants/COLOR";
import useScrollEnabled from "src/hooks/useScrollEnabled";
import { styles } from "./styles";

type Props = {};

const ANSWER = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
];
function FaqAnswerDetail({}: Props) {
  const { onLayout, scrollEnabled } = useScrollEnabled();
  return (
    <ScrollView scrollEnabled={scrollEnabled}>
      <View style={styles.container} onLayout={onLayout}>
        <View style={[styles.paragraphs, styles.screenPadding]}>
          {ANSWER.map((item) => (
            <Text style={styles.paragraph} key={item}>
              {item}
            </Text>
          ))}
        </View>
        <View style={styles.screenPadding}>
          <Text style={styles.query}>Was this information helpful</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Button
                title="Yes"
                variant="alternate"
                left={
                  <MaterialIcons
                    style={{ marginRight: 8 }}
                    name="thumb-up"
                    size={18}
                    color={COLOR.PRIMARY_A}
                  />
                }
              />
            </View>
            <View style={{ flex: 1, marginLeft: 16 }}>
              <Button
                title="No"
                variant="alternate"
                left={
                  <MaterialIcons
                    style={{ marginRight: 8 }}
                    name="thumb-down"
                    size={18}
                    color={COLOR.PRIMARY_A}
                  />
                }
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default FaqAnswerDetail;
