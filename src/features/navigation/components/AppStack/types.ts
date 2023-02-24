import { StackScreenProps } from "@react-navigation/stack";

export type AppStackParamList = {
  Home: undefined;
  EnterLocation: undefined;
  ConfirmLocation: undefined;
  Recipient: undefined;
  ChooseVehicle: undefined;
  SearchingVehicleScreen: undefined;
  CancelReasonsScreen: undefined;
  VehicleEnRouteScreen: undefined;
  HistoryListScreen: undefined;
  HistoryDetailScreen: undefined;
  ReportProblemScreen: undefined;
  EarningsScreen: undefined;
  SettingsScreen: undefined;
  ProfileScreen: undefined;
  VerifyPhoneNumberScreen: undefined;
  ChangePasswordScreen: undefined;
  PayoutScreen: undefined;
  SelectBankScreen: undefined;
  SelectNetworkScreen: undefined;
  SecurityScreen: undefined;
  SettingsNotificationScreen: undefined;
  NotificationsScreen: undefined;
  FaqCategoriesScreen: undefined;
  FaqQuestionsScreen: undefined;
  FaqAnswersScreen: undefined;
  ContactUsScreen: undefined;
  AboutScreen: undefined;
};

export type AppStackProps = StackScreenProps<AppStackParamList>;
