import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Back from '../back/Back';
import AppText from '../Text/AppText';

const Headers = ({title, noBack}: {title: string; noBack?: boolean}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerView}>
        <AppText style={styles.topic}>{title}</AppText>
      </View>
      {!noBack && (
        <View style={styles.backView}>
          <AppText style={{fontWeight: '500', color: '#824'}}>&larr;</AppText>
          <Back />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    rowGap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerView: {maxWidth: '70%'},
  topic: {
    fontSize: 16,
    fontWeight: '700',
  },
  backView: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 4,
  },
});

export default Headers;
