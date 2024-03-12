import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {Colors} from '../../misc/colors';
import AppText from '../../components/Text/AppText';
import {useNavigation} from '@react-navigation/native';
import {AppStackList} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Footer from '../../components/Footer/Footer';
import CurrencyInput from 'react-native-currency-input';
import Main from '../../components/Buttons/Main';
import {Formik} from 'formik';
import Headers from '../../components/header/Headers';
import * as yup from 'yup';
import {ConvertMoneyToNumber} from '../../misc/money';
import {useSelector} from 'react-redux';
import {RootState, store} from '../../store';
import Error from '../../components/formik/Error';

const Wallet = () => {
  const [translateY] = useState(new Animated.Value(-100));

  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackList, 'contact-us'>>();

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500, // Adjust duration for desired speed
      useNativeDriver: true, // Use native driver for performance
    }).start();
  }, []);

  const animatedStyle = {
    transform: [{translateY}],
  };

  const {amount} = useSelector((state: RootState) => state.app.wallet);

  const {dispatch} = store;

  return (
    <Formik
      initialValues={{
        amount: '0.00',
        status: 'idle', // is-withdrawing | isAdding | idle
      }}
      validationSchema={yup.object().shape({
        status: yup.string().oneOf(['is-withdrawing', 'is-adding', 'idle']),
        amount: yup
          .string()
          .required('Enter an amount')
          .test(
            'is-more',
            'Withdrawal amount is more than available amount',
            function (value) {
              const {status} = this.parent;
              if (
                status === 'is-withdrawing' &&
                Number(value) > Number(amount)
              ) {
                return false;
              }
              return true;
            },
          )
          .test(
            'is-too-much',
            'Maximum amount you can is ₦500k',
            function (value) {
              const {status} = this.parent;
              if (status === 'is-adding' && Number(value) > 500000) {
                return false;
              }
              return true;
            },
          )
          .test(
            'is-nothing',
            'Amount you can add or withdraw must be ₦500 or more',
            function (value) {
              if (Number(value) < 500) {
                return false;
              }
              return true;
            },
          ),
      })}
      onSubmit={(values, {setSubmitting, setFieldValue}) => {
        try {
          setSubmitting(true);
          if (values.status === 'is-adding') {
            dispatch({
              type: 'app/increaseWalletAmount',
              payload: values.amount,
            });
          }
          if (values.status === 'is-withdrawing') {
            dispatch({
              type: 'app/decreaseWalletAmount',
              payload: values.amount,
            });
          }
        } catch (e) {
        } finally {
          setSubmitting(false);
          setFieldValue('amount', '0.00', true);
          setFieldValue('status', 'idle', true);
        }
      }}>
      {({
        values,
        handleChange,
        setFieldValue,
        handleSubmit,
        isSubmitting,
        touched,
        errors,
      }) => (
        <View style={[styles.sorround, styles.main]}>
          <Headers title="Wallet" />
          <View style={{rowGap: 10}}>
            <View style={styles.imageBox}>
              <View>
                <AppText style={{fontSize: 12}}>82123448576690</AppText>
                <View>
                  <AppText style={{fontSize: 24, fontWeight: 500}}>
                    ₦{amount}
                  </AppText>
                </View>
                <AppText style={{fontSize: 12}}>Amount in wallet</AppText>
              </View>
              {!isSubmitting && (
                <View
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    columnGap: 10,
                  }}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      if (values.status === 'is-adding') {
                        setFieldValue('status', 'idle', true);
                        return;
                      }
                      setFieldValue('status', 'is-adding', true);
                    }}>
                    <View
                      style={{
                        borderWidth: 1,
                        padding: 4,
                        paddingHorizontal: 12,
                        borderRadius: 30,
                        backgroundColor:
                          values.status === 'is-adding' ? 'white' : 'black',
                      }}>
                      <AppText
                        style={{
                          fontSize: 28,
                          color:
                            values.status === 'is-adding' ? 'black' : 'white',
                        }}>
                        {values.status === 'is-adding' ? <>&times;</> : '+'}
                      </AppText>
                    </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback
                    onPress={() => {
                      if (values.status === 'is-withdrawing') {
                        setFieldValue('status', 'idle', true);
                        return;
                      }
                      setFieldValue('status', 'is-withdrawing', true);
                    }}>
                    <View
                      style={{
                        borderWidth: 1,
                        padding: 4,
                        paddingHorizontal: 12,
                        borderRadius: 30,
                        backgroundColor:
                          values.status === 'is-withdrawing'
                            ? 'white'
                            : 'black',
                      }}>
                      <AppText
                        style={{
                          fontSize: 28,
                          color:
                            values.status === 'is-withdrawing'
                              ? 'black'
                              : 'white',
                        }}>
                        {values.status === 'is-withdrawing' ? (
                          <>&times;</>
                        ) : (
                          <>&darr;</>
                        )}
                      </AppText>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              )}
            </View>
            {(values.status === 'is-adding' ||
              values.status === 'is-withdrawing') && (
              <Animated.View style={[animatedStyle, {rowGap: 8}]}>
                <View>
                  <Text>
                    {values.status === 'is-adding'
                      ? 'How much would you like to add?'
                      : 'How much would you like to withdraw?'}
                  </Text>
                </View>
                <View style={styles.viewBox}>
                  <CurrencyInput
                    delimiter=","
                    onChangeValue={text => {
                      setFieldValue('amount', text, true);
                    }}
                    precision={2}
                    separator="."
                    style={{
                      fontSize: 14,
                      color: 'black',
                    }}
                    value={values.amount}
                    //   {...inputProps}
                  />
                </View>
                <Error
                  touched={touched.amount || false}
                  error={errors.amount || ''}
                />
                <Main
                  title={values.status === 'is-adding' ? 'Add' : 'Withdraw'}
                  onPress={handleSubmit as () => void}
                />
              </Animated.View>
            )}
          </View>

          <Footer />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  sorround: {
    flex: 1,
    rowGap: 20,
    backgroundColor: Colors.appBackground,
  },
  viewBox: {
    borderWidth: 1,
    borderColor: Colors.textInput.border,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    width: Dimensions.get('window').width - 80,
    rowGap: 4,
  },
  linkBar: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 10,
    borderRadius: 8,
  },
  imageBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#aaa',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    height: 100,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: 16,
    fontWeight: '700',
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

export default Wallet;
