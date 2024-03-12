import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import {Colors} from '../../misc/colors';
import Headers from '../../components/header/Headers';
import Input from '../../components/inputs/Input';
import AppText from '../../components/Text/AppText';
import DateInput from '../../components/inputs/Date';
import Select from '../../components/inputs/Select';
import Main from '../../components/Buttons/Main';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import {Formik} from 'formik';
import Error from '../../components/formik/Error';
import * as yup from 'yup';
import {store} from '../../store';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackList} from '../../navigation/types';

const StartCampaign = () => {
  const {dispatch} = store;
  const navigation =
    useNavigation<
      NativeStackNavigationProp<AppStackList, 'start-a-campaign'>
    >();

  const pickDocument = async (s, i, v) => {
    try {
      const result = await DocumentPicker.pick({
        type: [
          DocumentPicker.types.doc,
          DocumentPicker.types.pdf,
          DocumentPicker.types.images,
          DocumentPicker.types.video,
        ],
        allowMultiSelection: false,
        presentationStyle: 'fullScreen',
      });
      // Check if the selected file is within the 5 MB limit
      const fileSize = await RNFS.stat(result[0].uri);
      const maxSize = 5 * 1024 * 1024; // 5 MB in bytes
      if (fileSize.size > maxSize) {
        Alert.alert(
          'File Size Limit Exceeded',
          'Please select a file up to 5 MB.',
        );
      } else {
        s(
          'docs',
          [
            ...v.docs.map((d, ind) => {
              if (ind === i) {
                return result[0];
              }
              return d;
            }),
          ],
          true,
        );
        // return result[0];
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the document picker
      } else {
        throw err;
      }
    }
  };

  return (
    <Formik
      initialValues={{
        campaignTitle: '',
        information: '',
        targetGoal: '0.00',
        endDate: new Date(),
        situationUpdate: '',
        docs: [],
      }}
      validationSchema={yup.object().shape({
        campaignTitle: yup
          .string()
          .min(3, 'Title too short')
          .required('Title is required'),
        information: yup
          .string()
          .min(5, 'Information too short')
          .required('Information is required'),
        situationUpdate: yup
          .string()
          .oneOf(['1', '3', '7', '14', '21', '30'])
          .required('Must choose a situation update frequency'),
        docs: yup.array().min(1, 'Upload at least one document'),
        endDate: yup
          .date()
          .min(new Date(), 'Date cannot be today or before')
          .required('Must enter end date'),
        targetGoal: yup
          .string()
          .required('Target Goal is required')
          .test('is-too-high', 'Target goal is too high', function (value) {
            if (Number(value) > 10000000) {
              return false;
            }
            return true;
          })
          .test('is-too-low', 'Minimum target goal is ₦1000', function (value) {
            if (Number(value) < 1000) {
              return false;
            }
            return true;
          }),
      })}
      onSubmit={(values, {setSubmitting}) => {
        try {
          setSubmitting(true);
          dispatch({
            type: 'app/successModal',
            payload: {
              message:
                "Your campaign has now started. Don't forget to let people know the progress of the situation.",
              navigationTarget: 'help',
            },
          });
          setTimeout(() => {
            dispatch({
              type: 'app/resetModal',
            });
          }, 5000);
          setTimeout(() => {
            navigation.replace('help');
          }, 5500);
        } catch (e) {
        } finally {
          setSubmitting(false);
        }
      }}>
      {({
        setFieldValue,
        values,
        touched,
        errors,
        handleSubmit,
        isSubmitting,
      }) => (
        <View style={[styles.sorround, styles.main]}>
          <View style={{rowGap: 4}}>
            <Headers title="Start A Campaign" />
            <AppText style={{fontSize: 12, color: '#333'}}>
              Please take out time to fill out this form
            </AppText>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{rowGap: 10}}>
              <View style={{rowGap: 5}}>
                <Input
                  title="Campaign Title"
                  value={values.campaignTitle}
                  onChangeText={text => {
                    setFieldValue('campaignTitle', text, true);
                  }}
                />
                <Error
                  touched={touched.campaignTitle ?? false}
                  error={errors.campaignTitle ?? ''}
                />
              </View>
              <View style={{rowGap: 5}}>
                <Input
                  multiline
                  placeholder="Let people know what your campaign is about"
                  value={values.information}
                  onChangeText={text => {
                    setFieldValue('information', text, true);
                  }}
                  title="Campaign Information"
                />
                <Error
                  touched={touched.information ?? false}
                  error={errors.information ?? ''}
                />
              </View>

              <View style={{rowGap: 5}}>
                <Input
                  title="Target Goal (NGN)"
                  type="amount"
                  value={values.targetGoal}
                  onChangeText={text => setFieldValue('targetGoal', text, true)}
                />
                <Error
                  touched={touched.targetGoal ?? false}
                  error={errors.targetGoal ?? ''}
                />
              </View>

              <View style={{rowGap: 5}}>
                <DateInput
                  title="End Date"
                  value={values.endDate}
                  onChangeText={text => setFieldValue('endDate', text, true)}
                />
                <Error
                  touched={touched.endDate ?? false}
                  error={errors.endDate ?? ''}
                />
              </View>

              <View style={{rowGap: 5}}>
                <Select
                  title="Situation update every"
                  value={values.situationUpdate}
                  list={[
                    {value: '3', label: '3 days'},
                    {value: '7', label: 'Week'},
                    {value: '14', label: 'Fortnight'},
                    {value: '21', label: '3 Weeks'},
                    {value: '30', label: 'Month'},
                    {value: '1', label: 'Just Once'},
                  ]}
                  onChangeText={text =>
                    setFieldValue('situationUpdate', text, true)
                  }
                />
                <Error
                  touched={touched.situationUpdate ?? false}
                  error={errors.situationUpdate ?? ''}
                />
              </View>

              <View style={{rowGap: 4}}>
                <Headers title="Documents" noBack />
                <AppText style={{fontSize: 12, color: '#888'}}>
                  Max 2MB each
                </AppText>
              </View>

              <View style={{rowGap: 10}}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    if (values.docs.length >= 9) {
                      return;
                    }
                    setFieldValue('docs', [...values.docs, {}], true);
                  }}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      padding: 8,
                      borderWidth: 1,
                      borderColor: '#aaa',
                      alignSelf: 'baseline',
                      borderRadius: 8,
                    }}>
                    <Text style={{lineHeight: 18}}>
                      <AppText style={{fontSize: 22}}>+</AppText> Add New
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                {values.docs.map((d, index) => (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableWithoutFeedback
                      key={`document-${index}`}
                      onPress={() => {
                        pickDocument(setFieldValue, index, values);
                      }}>
                      <View style={{flex: 8}}>
                        <Input
                          type="document-picker"
                          title={`Document ${index + 1}`}
                          value={values.docs[index]?.name}
                        />
                      </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        setFieldValue(
                          'docs',
                          values.docs.filter((_, ind) => ind !== index),
                          true,
                        );
                      }}>
                      <View style={{flex: 1}}>
                        <AppText style={{fontSize: 22}}>&times;</AppText>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                ))}
                <Error
                  touched={touched.docs ?? false}
                  error={errors.docs ?? ''}
                />
              </View>

              <Main
                title={isSubmitting ? 'Creating Campaign...' : 'Start'}
                isLoading={isSubmitting}
                onPress={handleSubmit as () => void}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default StartCampaign;

const styles = StyleSheet.create({
  sorround: {
    flex: 1,
    rowGap: 20,
    backgroundColor: Colors.appBackground,
  },
  linkBar: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 10,
    borderRadius: 8,
  },
  imageBox: {
    backgroundColor: '#aaa',
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  subImageBox: {
    backgroundColor: '#aaa',
    height: 70,
    borderRadius: 8,
    width: (Dimensions.get('window').width - 100) / 2,
  },
  main: {
    padding: 40,
    paddingVertical: 20,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
  },
  topic: {
    fontSize: 18,
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
});
