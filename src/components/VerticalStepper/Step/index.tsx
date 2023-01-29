import React, { useState } from "react";
import { LayoutChangeEvent, View } from "react-native";
import { FullStepProps } from "../types";
import {
  DEFAULT_ICON_CONTAINER_HEIGHT,
  DEFAULT_ICON_CONTAINER_WIDTH,
  STEPLINE_OFFSET,
} from "./constants";
import StepLine from "./StepLine";
import { getStyles } from "./styles";

function Step({
  icon,
  children,
  showStepLine,
  ICON_CONTAINER_HEIGHT = DEFAULT_ICON_CONTAINER_HEIGHT,
  ICON_CONTAINER_WIDTH = DEFAULT_ICON_CONTAINER_WIDTH,
}: FullStepProps) {
  const [layoutHeight, setLayoutHeight] = useState<number>(0);
  const [iconHeight, setIconHeight] = useState<number>(0);

  const styles = getStyles({
    iconHeight,
    showStepLine,
    ICON_CONTAINER_HEIGHT,
    ICON_CONTAINER_WIDTH,
  });

  const handleLayout = (ev: LayoutChangeEvent) => {
    setLayoutHeight(
      Math.max(ev.nativeEvent.layout.height, ICON_CONTAINER_HEIGHT)
    );
  };
  const handleIconHeight = (ev: LayoutChangeEvent) => {
    setIconHeight(ev.nativeEvent.layout.height);
  };

  const stepLineHeight = layoutHeight - iconHeight / 2 - STEPLINE_OFFSET;

  return (
    <View style={styles.step}>
      <View style={styles.iconContainer}>
        <View onLayout={handleIconHeight}>{icon}</View>
      </View>
      <View style={styles.content} onLayout={handleLayout}>
        {children}
      </View>
      {showStepLine ? (
        <View style={styles.stepLineContainer}>
          <StepLine height={stepLineHeight} />
        </View>
      ) : null}
    </View>
  );
}

export default Step;
