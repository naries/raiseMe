import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../../components/inputs/Input';
import Main from '../../components/Buttons/Main';
import {Colors} from '../../misc/colors';
import AppText from '../../components/Text/AppText';
import {Formik} from 'formik';
import {store} from '../../store';

const SignIn = () => {
  const {dispatch} = store;
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={() => {
        dispatch({type: 'app/authenticateUser'});
        console.log('got here');
      }}>
      {({handleChange, values, handleSubmit}) => (
        <View style={[styles.sorround, styles.main]}>
          <View>
            <AppText style={[styles.topic]}>Raise 4 Me</AppText>
          </View>
          <View>
            <AppText style={[styles.sub]}>Please sign in to continue</AppText>
          </View>
          <View style={styles.topMargin}>
            <Input
              title="Username"
              value={values.username}
              onChangeText={handleChange('username')}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.topMargin}>
            <Input
              title="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              type="password"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.rememberMe}>
            <View>
              <AppText>Remember me</AppText>
            </View>
            <View>
              <AppText>Forgot Password</AppText>
            </View>
          </View>
          <View style={styles.topMargin}>
            <Main title="Sign in" onPress={handleSubmit as () => {}} />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  sorround: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  main: {
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topic: {
    fontSize: 20,
    fontWeight: '700',
    color: '#824',
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

export default SignIn;
