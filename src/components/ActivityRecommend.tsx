/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {ProfileData} from '../../Mock/friendsProfileData';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {useNavigation} from '@react-navigation/core';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  data: ProfileData;
};

const ActivityRecommend = ({data}: Props) => {
  const [follow, setFollow] = useState(data.follow);
  const [close, setClose] = useState(false);
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
    <View>
      {close ? null : (
        <View style={styles.contents}>
          <TouchableOpacity
            onPress={() => handlePress(data)}
            style={styles.TouchableContainer}>
            <Image source={data.profileImage} style={styles.profileImage} />
            <View style={styles.recomandContinaer}>
              <Text style={styles.recomandName}>{data.name}</Text>
              <Text style={styles.recomandText}>{data.accountName}</Text>
              <Text style={styles.recomandText}>회원님을 위한 추천</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.container}>
            {close ? (
              <TouchableOpacity
                onPress={() => setFollow(prev => !prev)}
                style={{width: follow ? 90 : 68}}>
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
            ) : (
              <React.Fragment>
                <TouchableOpacity
                  onPress={() => setFollow(prev => !prev)}
                  style={{width: follow ? 90 : 68}}>
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
                <TouchableOpacity
                  onPress={() => setClose(true)}
                  style={styles.closeContainer}>
                  <AntDesign name="close" style={styles.closeIcon} />
                </TouchableOpacity>
              </React.Fragment>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default ActivityRecommend;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contents: {
    paddicer: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  TouchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '64%',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 10,
  },
  recomandName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  recomandContinaer: {
    width: '100%',
  },
  recomandText: {
    fontSize: 14,
    opacity: 0.5,
  },
  followButton: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeContainer: {
    paddingHorizontal: 10,
  },
  closeIcon: {
    fontSize: 14,
    color: 'black',
    opacity: 0.8,
  },
});
