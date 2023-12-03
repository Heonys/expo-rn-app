/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

type Props = {
  type: 'another' | 'me';
  name?: string;
  acountName?: string;
  profileImage?: any;
};

const ProfileButton = ({type, name, acountName, profileImage}: Props) => {
  const [follow, setFollow] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    if (name && acountName) {
      navigation.navigate('EditProfile', {
        name,
        acountName,
        profileImage,
      });
    }
  };

  return (
    <React.Fragment>
      {type === 'me' ? (
        <View style={myPfofile.container}>
          <TouchableOpacity
            onPress={() => handlePress()}
            style={myPfofile.touchable}>
            <View style={myPfofile.textContainer}>
              <Text style={myPfofile.text}>프로필 수정</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => setFollow(prev => !prev)}
            style={styles.touchable}>
            <View
              style={[
                styles.followButton,
                {
                  borderWidth: follow ? 1 : 0,
                  backgroundColor: follow ? '' : '#3493D9',
                  borderColor: follow ? '#DEDEDE' : '',
                },
              ]}>
              <Text style={{color: follow ? 'black' : 'white'}}>
                {follow ? 'Following' : 'Follow'}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.messageContainer}>
            <Text>메시지</Text>
          </View>
          <View style={styles.iconView}>
            <Feather name="chevron-down" style={styles.chevronIcon} />
          </View>
        </View>
      )}
    </React.Fragment>
  );
};

export default ProfileButton;

const myPfofile = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  touchable: {
    width: '100%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
    opacity: 0.8,
  },
  textContainer: {
    width: '100%',
    height: 35,
    borderColor: '#EDEDED',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  followButton: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    width: '42%',
  },
  messageContainer: {
    width: '42%',
    height: 35,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  chevronIcon: {
    fontSize: 20,
    color: 'black',
  },
  iconView: {
    width: '10%',
    height: 35,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
