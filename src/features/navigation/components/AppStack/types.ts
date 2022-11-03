import { StackScreenProps } from "@react-navigation/stack";

export type AppStackParamList = {
  Home: undefined;
  EnterLocation: undefined;
  ConfirmLocation: undefined;
  Recipient: undefined;
  ChooseVehicle: undefined;
  SearchingVehicleScreen: undefined;
};

export type AppStackProps = StackScreenProps<AppStackParamList>;
