import { StackScreenProps } from "@react-navigation/stack";

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AuthStackProps = StackScreenProps<AuthStackParamList>;
