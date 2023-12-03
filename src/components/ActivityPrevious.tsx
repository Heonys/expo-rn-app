/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {ProfileData} from '../../Mock/friendsProfileData';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {useNavigation} from '@react-navigation/core';

type Props = {
  data: ProfileData;
};

const ActivityPrevious = ({data}: Props) => {
  const [follow, setFollow] = useState(data.follow);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = (profileData: ProfileData) => {
    navigation.navigate('FriendProfile', {
      name: profileData.name,
      profileImage: profileData.profileImage,
      follow: profileData.follow,
      posts: profileData.posts,
      followers: profileData.followers,
      following: profileData.following,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <TouchableOpacity
          onPress={() => handlePress(data)}
          style={styles.TouchableContainer}>
          <Image source={data.profileImage} style={styles.image} />
          <Text style={{fontSize: 15}}>
            <Text style={{fontWeight: 'bold'}}>{data.name}</Text>의 사진 및
            동영상을 보려면 팔로우하세요
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFollow(prev => !prev)}
          style={{width: follow ? 72 : 68}}>
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
      </View>
    </View>
  );
};

export default ActivityPrevious;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  contents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
  },
  TouchableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '64%',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 10,
  },
  followButton: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {},
});
