import React from "react";
import { LinearGradient } from "expo-linear-gradient";

function FakeShadowUp() {
  return (
    <LinearGradient
      colors={[
        "transparent",
        "rgba(0,0,0,0.0)",
        "rgba(0,0,0,0.01)",
        "rgba(0,0,0,0.02)",
        "rgba(0,0,0,0.06)",
        "rgba(0,0,0,0.08)",
        "rgba(0,0,0,0.2)",
      ]}
      style={{
        height: 20,
        marginTop: -20,
      }}
    />
  );
}

export default FakeShadowUp;
