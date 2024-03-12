import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Headers from '../../components/header/Headers';
import {Colors} from '../../misc/colors';
import AppText from '../../components/Text/AppText';

const faqList = [
  {
    title: 'How does the app work?',
    text: 'The app serves as a platform where individuals can create campaigns for specific needs, such as medical expenses, school fees, or basic necessities. Donors can browse these campaigns and contribute funds directly through the app.',
  },
  {
    title: 'How can I create a campaign?',
    text: 'To create a campaign, simply sign up or log in to your account, then follow the steps to create a new campaign. You will need to provide details about the individual in need, the purpose of the fundraiser, and a target goal.',
  },
  {
    title: 'Is there a fee for using the app?',
    text: 'We strive to keep fees as low as possible to maximize the impact of your donations. A small percentage of each donation may go towards covering operational costs, but the majority of funds will go directly to the individuals in need.',
  },
  {
    title: 'How do I know my donation is reaching the right person?',
    text: 'We verify the authenticity of each campaign before it goes live on the app. Additionally, we provide regular updates on the progress of each campaign, so donors can see how their contributions are making a difference.',
  },
  {
    title: 'Can I donate anonymously?',
    text: 'Yes, you have the option to donate anonymously if you prefer. Your privacy is important to us, and we respect your decision to contribute without revealing your identity.',
  },
  {
    title: "What happens if a campaign doesn't reach its goal?",
    text: "If a campaign falls short of its goal, the funds raised will still be provided to the individual in need. However, reaching the goal can significantly impact the individual's situation, so we encourage donors to spread the word and help campaigns reach their targets.",
  },
  {
    title: 'How can I trust that my donation will be used appropriately?',
    text: 'We prioritize transparency and accountability. We work closely with campaign creators to ensure that funds are used for their intended purpose. Additionally, we may follow up with recipients to provide updates on how the funds have been utilized.',
  },
  {
    title: 'Can I start a campaign for someone else?',
    text: "Yes, you can create a campaign on behalf of someone else, such as a friend or family member in need. Just make sure to provide accurate information and obtain consent from the individual you're raising funds for.",
  },
];

const FAQ = () => {
  return (
    <View style={[styles.sorround, styles.main]}>
      <Headers title="FAQ" />
      <ScrollView
        contentContainerStyle={{rowGap: 20}}
        showsVerticalScrollIndicator={false}>
        {faqList.map(({title, text}) => (
          <View style={{rowGap: 10}}>
            <View
              style={{
                padding: 10,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#aaa',
                borderRadius: 4,
              }}>
              <AppText style={{fontSize: 14, fontWeight: 500}}>{title}</AppText>
            </View>
            <AppText>{text}</AppText>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sorround: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  main: {
    padding: 40,
    paddingVertical: 20,
    rowGap: 20,
  },
  topic: {
    fontSize: 16,
    fontWeight: '700',
  },
  linkBar: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 10,
    borderRadius: 8,
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

export default FAQ;
