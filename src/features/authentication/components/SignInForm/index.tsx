import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import Button from "src/components/Button";
import PhoneTextField from "src/components/TextInputs/PhoneTextField";
import TextField from "src/components/TextInputs/TextField";
import { FONT_FAMILY } from "src/constants/FONT";
import NavPills from "./NavPills";
import schema, { SignInSchemaData } from "./schema";
import { Selected } from "./types";

type Props = {
  onSubmit?: (data: SignInSchemaData) => any;
  isLoading?: boolean;
};

function SignInForm({ onSubmit, isLoading }: Props) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInSchemaData>({
    resolver: yupResolver(schema),
  });
  const [selected, setSelected] = useState<Selected>();

  const isPhoneSelected = selected === "Phone";
  const isEmailSelected = selected === "Email";

  const onSubmitFn = (data: SignInSchemaData) => {
    console.group("SIGNIN FORM");
    console.log(data);
    console.groupEnd();
    onSubmit?.(data);
  };

  return (
    <View>
      <Text style={styles.title}>Sign in</Text>
      <NavPills onSelect={setSelected} />
      <View style={styles.textFieldGroup}>
        <Animated.View style={styles.textFieldContainer}>
          {isPhoneSelected ? (
            <Animated.View
              entering={FadeIn.duration(250)}
              exiting={FadeOut.duration(250)}
            >
              <PhoneTextField.Control
                name="phone"
                control={control}
                label="Phone number"
                status={errors.phone ? "error" : "normal"}
                placeholder="+2332080300"
              />
            </Animated.View>
          ) : null}
          {isEmailSelected ? (
            <Animated.View
              entering={FadeIn.duration(250)}
              exiting={FadeOut.duration(250)}
            >
              <TextField.Control
                name="email"
                control={control}
                status={errors.email ? "error" : "normal"}
                label="Email address"
                placeholder="eg. someone@email.com"
                keyboardType="email-address"
              />
            </Animated.View>
          ) : null}
        </Animated.View>
        <View style={styles.textFieldContainer}>
          <TextField.Control
            label="Password"
            name="password"
            status={errors.password ? "error" : "normal"}
            control={control}
            placeholder="Enter password"
            keyboardType="default"
            secureTextEntry
          />
        </View>
      </View>
      <Button
        title="Sign In"
        onPress={handleSubmit(onSubmitFn)}
        disabled={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 48,
    lineHeight: 58,
  },
  textFieldContainer: {
    marginBottom: 20,
    width: "100%",
    height: 74,
  },
  textFieldGroup: {
    marginTop: 32,
    marginBottom: 48,
  },
});

export default SignInForm;
