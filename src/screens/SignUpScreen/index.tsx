import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

type Props = {};

function SignUpScreen({}: Props) {
  const navigation = useNavigation();

  return (
    <View>
      <Text>SignUpScreen</Text>
      <Button title="to app" onPress={() => navigation.navigate("App")} />
    </View>
  );
}

export default SignUpScreen;
