import React, { useRef } from "react";
import { Text, View } from "react-native";
import OTPInput from "src/components/OTPInput";
import { styles } from "./styles";

type Props = {};

function VerifyPhoneOTP({}: Props) {
  const otpInputRef = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>
        Enter the code we sent to your number.
      </Text>

      <OTPInput
        ref={otpInputRef}
        onChangeText={console.log}
        onComplete={(text) => console.log("completed::" + text)}
      />

      <Text style={styles.infoText}>
        Not received?{" "}
        <Text style={styles.resendText} onPress={() => console.log("pressed")}>
          Resend
        </Text>
      </Text>
    </View>
  );
}

export default VerifyPhoneOTP;
