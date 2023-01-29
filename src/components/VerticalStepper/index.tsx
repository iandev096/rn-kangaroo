import React, { Children, cloneElement } from "react";
import { View } from "react-native";
import Step from "./Step";
import { StepProps, VerticalStepperProps } from "./types";

function VerticalStepper({ children }: VerticalStepperProps) {
  const renderedSteps = Children.map(children, (child, idx) => {
    const lastIdx = Children.toArray(children).length - 1;
    return cloneElement(
      <Step {...child.props} showStepLine={idx !== lastIdx} />
    );
  });
  return <View>{renderedSteps}</View>;
}

VerticalStepper.Step = (props: StepProps) => {
  return <Step {...props} />;
};

export default VerticalStepper;
