import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {Colors} from '../../misc/colors';
import AppText from '../../components/Text/AppText';
import Headers from '../../components/header/Headers';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackList} from '../../navigation/types';

export const truncateText = (text: string, n = 20) => {
  if (!text) {
    return '';
  }
  const splitText = text.split(' ');
  let newText = '';
  splitText.map((d: string, index: number) => {
    if (index < n - 1) {
      newText += `${d} `;
    }
    return 0;
  });
  if (splitText.length > n) {
    newText += '...';
  }
  return newText;
};

const data = [
  {
    id: 'apoiw0283s-asapwoe023kk',
    title: "Help Emily's Cancer Treatment Fund and get full treatment",
    information:
      'Emily is a single mother of two young children who has been diagnosed with stage 3 breast cancer. She requires immediate chemotherapy and surgery, but lacks the necessary funds to cover the medical expenses.',
    targetGoal: '₦224,000',
    amountLeft: '₦24,000',
    endDate: '2/8/2024',
  },
  {
    id: 'apoiw0283s-asa112oe023kk',
    title: "Support Ahmed's Education Fund",
    information:
      'Ahmed is a bright and ambitious student from a low-income family in a rural village. Despite facing financial hardships, he has excelled academically and dreams of pursuing higher education to become a computer engineer. However, his family cannot afford the tuition fees and other educational expenses required to attend university.',
    targetGoal: '₦190,000',
    amountLeft: '₦10,000',
    endDate: '2/8/2024',
  },
  {
    id: 'apoiw0283s-asa112oe023kk22',
    title: 'Help Maria Rebuild After Natural Disaster',
    information:
      'Maria is a resilient homeowner who recently lost her house and belongings due to a devastating natural disaster, such as a hurricane or wildfire. She is currently displaced and in urgent need of financial assistance to rebuild her home and start afresh.',
    targetGoal: '₦100,000',
    amountLeft: '₦50,000',
    endDate: '2/8/2024',
  },
];

const Help = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackList, 'help'>>();

  //   const {dispatch} = store;
  return (
    <View style={[styles.sorround, styles.main]}>
      <View style={{paddingHorizontal: 40}}>
        <Headers title="Help Someone" />
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{
          rowGap: 10,
        }}
        keyExtractor={item => item.id}
        renderItem={({
          item: {title, information, targetGoal, amountLeft, endDate},
        }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('details')}>
            <View
              style={{
                rowGap: 10,
                paddingVertical: 10,
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderBottomColor: '#ccc',
                borderTopColor: '#ccc',
                padding: 40,
                backgroundColor: '#fff',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'center',
                  alignItems: 'center',
                  columnGap: 10,
                }}>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    backgroundColor: '#888',
                    borderRadius: 20,
                  }}
                />
                <AppText style={{fontSize: 15, fontWeight: '500'}}>
                  {title}
                </AppText>
              </View>
              <View style={{rowGap: 2.5}}>
                <View style={styles.imageBox}>
                  <Image
                    source={require('../../../assets/logo_list.png')}
                    style={{height: 70, width: '100%'}}
                  />
                </View>
                <View style={styles.imageBox}>
                  <Image
                    source={require('../../../assets/image_1.png')}
                    style={{height: 70, width: '100%'}}
                  />
                </View>
              </View>
              <AppText>{truncateText(information, 30)}</AppText>
              <AppText>
                <Text style={{fontWeight: '600'}}>{amountLeft}</Text> until
                target goal of{' '}
                <Text style={{fontWeight: '600'}}>{targetGoal}</Text> is
                reached.
              </AppText>
              <AppText>Ends {endDate}</AppText>
              <AppText style={{fontSize: 12, color: '#888'}}>
                Click to view more
              </AppText>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sorround: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  main: {paddingVertical: 20, rowGap: 20},
  topic: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primary,
  },
  sub: {
    fontSize: 14,
    fontWeight: '400',
  },
  topMargin: {
    marginTop: 10,
  },
  rememberMe: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  imageBox: {
    backgroundColor: 'white',
    width: '100%',
    height: 70,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default Help;
