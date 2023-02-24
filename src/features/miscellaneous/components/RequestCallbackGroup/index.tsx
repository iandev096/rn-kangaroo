import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "src/components/Button";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

type Props = {};

function RequestCallbackGroup({}: Props) {
  return (
    <View>
      <Text style={styles.title}>Get called instead</Text>
      <Text style={styles.detail} numberOfLines={2}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus vitae
        nisi, consectetur tempora tenetur obcaecati fugiat reprehenderit
        perspiciatis sint rerum explicabo, voluptatem expedita labore
        distinctio! Consequatur nihil cum at doloremque.
      </Text>
      <Button
        title="Request callback"
        variant="alternate"
        left={
          <FontAwesome5
            name="phone"
            size={16}
            color={COLOR.PRIMARY_A}
            style={styles.buttonIcon}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { ...genFontStyles(24, 32), marginBottom: 14 },
  detail: {
    ...genFontStyles(14, 20),
    marginBottom: 32,
    color: COLOR.GRAY_500,
  },
  buttonIcon: { marginRight: 16, transform: [{ scaleX: -1 }] },
});

export default RequestCallbackGroup;
