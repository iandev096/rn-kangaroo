import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  LocationHeader,
  LocationList,
  usePageRevealValue,
} from "src/features/location";
import { AppStackProps } from "src/features/navigation";

type Props = {} & AppStackProps;

function EnterLocationScreen({ navigation }: Props) {
  const progress = usePageRevealValue();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LocationHeader
        pageRevealValue={progress}
        onPressBack={() => navigation.goBack()}
      />
      <LocationList pageRevealValue={progress} />
    </SafeAreaView>
  );
}

export default EnterLocationScreen;
