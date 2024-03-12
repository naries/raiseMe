import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackList = AuthStackList & AppStackList;

export type AuthStackList = {
  'sign-in': undefined;
};

export type AppStackList = {
  home: undefined;
  help: undefined;
  profile: undefined;
  'contact-us': undefined;
  wallet: undefined;
  faq: undefined;
  'personal-information': undefined;
  'start-a-campaign': undefined;
  details: undefined;
};

export type AppNavigationProps<Screen extends keyof AppStackList> =
  NativeStackScreenProps<AppStackList, Screen>;

export type AuthNavigationProps<Screen extends keyof AuthStackList> =
  NativeStackScreenProps<AuthStackList, Screen>;
