import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import {circles} from '../components/Circle';

const Profile = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ProfileBody
          name="izreal"
          acountName="izreal"
          profileImage={require('../../assets/images/userProfile.jpeg')}
          followers="300"
          following="35"
          posts="458"
        />
        <ProfileButton
          type="me"
          name="izreal"
          acountName="izreal"
          profileImage={require('../../assets/images/userProfile.jpeg')}
        />
      </View>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.Scroll}>
          {circles}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    width: '100%',
  },
  container: {
    width: '100%',
    padding: 10,
  },
  Scroll: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
