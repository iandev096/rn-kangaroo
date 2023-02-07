import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { LayoutChangeEvent, Text, View } from "react-native";
import AmountCardIcon from "src/components/SvgComponents/AmountCardIcon";
import { getStyles, staticStyles } from "./styles";

type Props = {
  amount: string;
  date: string;
  deliveries: string;
};

function AmountCard({ amount, date, deliveries }: Props) {
  const [cardDim, setCardDim] = useState<{ height: number; width: number }>({
    height: 0,
    width: 0,
  });

  const handleLayout = (ev: LayoutChangeEvent) => {
    const height = Math.round(ev.nativeEvent.layout.width * 0.476);
    setCardDim({ height, width: ev.nativeEvent.layout.width });
  };

  const styles = getStyles(cardDim.height, cardDim.width);

  return (
    <View>
      <View style={[staticStyles.card, styles.card]} onLayout={handleLayout}>
        {/* card aesthetics */}
        <View style={styles.cardAesthetics}>
          {/* left linear gradient */}
          <View style={[styles.bgSect, styles.leftBgSect]}>
            <LinearGradient
              colors={["#F4F4F4", "#F4F4F4", "#EBEBEB"]}
              style={{ flex: 1 }}
            />
          </View>

          {/* right linear gradient */}
          <View style={[styles.bgSect, styles.rightBgSect]}>
            <LinearGradient
              colors={["#F4F4F4", "#F4F4F4", "#FDFDFD"]}
              style={{ flex: 1 }}
            />
          </View>

          {/* card icon */}
          <View style={styles.cardIconContainer}>
            <AmountCardIcon />
          </View>
        </View>

        {/* card writings */}
        <View style={{ flex: 1 }}>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>{date}</Text>
            <Text style={styles.info}>{deliveries}</Text>
          </View>
        </View>
      </View>
      {/* stacked decoration */}
      <View style={styles.stackedDeco} />
    </View>
  );
}

export default AmountCard;
