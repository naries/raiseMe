import React from 'react';
import {View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import AppText from '../Text/AppText';

function AppActionSheet() {
  return (
    <ActionSheet>
      <View>
        <AppText>Hello World</AppText>
      </View>
    </ActionSheet>
  );
}

export default AppActionSheet;
