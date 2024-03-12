import {Text, TextProps} from 'react-native';
import React from 'react';

type AppTextPropType = {
  children: string;
  style?: TextProps['style'];
} & TextProps;

const AppText = ({children, style = {}, ...rest}: AppTextPropType) => {
  return (
    <Text style={style} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;
