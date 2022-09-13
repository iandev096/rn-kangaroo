import React from "react";
import { Animated, FlatList, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BottomAction from "src/components/BottomAction";
import LocationListItem from "./LocationListItem";
import LocationListSkeleton from "./LocationListSkeleton";
import { getAnimStyle, styles } from "./styles";

type Props = {
  pageRevealValue: Animated.Value;
};

const DATA = [...new Array(8)].map(() => ({
  title: "Label",
  description: "Paragraph",
}));

function LocationList({ pageRevealValue }: Props) {
  const animStyle = getAnimStyle(pageRevealValue);
  const loading = false;

  return (
    <Animated.View style={[styles.cardContainer, animStyle]}>
      {loading ? (
        <LocationListSkeleton />
      ) : (
        <FlatList
          contentContainerStyle={styles.listContentContainer}
          data={DATA}
          renderItem={({ item, index }) => (
            <LocationListItem
              title={item.title}
              description={item.description}
              onPress={() => console.log("pressed item")}
            />
          )}
        />
      )}
      <View>
        <LinearGradient
          colors={[
            "transparent",
            "rgba(0,0,0,0.0)",
            "rgba(0,0,0,0.01)",
            "rgba(0,0,0,0.02)",
            "rgba(0,0,0,0.06)",
            "rgba(0,0,0,0.08)",
            "rgba(0,0,0,0.1)",
          ]}
          style={{
            height: 30,
            marginTop: -30,
          }}
        />
        <BottomAction />
      </View>
    </Animated.View>
  );
}

export default LocationList;
