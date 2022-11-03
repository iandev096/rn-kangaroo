import { LinearGradient } from "expo-linear-gradient";
import React from "react";

function FakeShadowDown() {
  return (
    <LinearGradient
      colors={[
        "rgba(0,0,0,0.2)",
        "rgba(0,0,0,0.08)",
        "rgba(0,0,0,0.06)",
        "rgba(0,0,0,0.02)",
        "rgba(0,0,0,0.01)",
        "rgba(0,0,0,0.0)",
        "transparent",
      ]}
      style={{
        height: 20,
        marginBottom: -20,
      }}
    />
  );
}

export default FakeShadowDown;
