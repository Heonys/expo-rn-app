import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ProfileData} from '../../Mock/friendsProfileData';
import {useNavigation} from '@react-navigation/core';
import {RootStackParamList} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  data: ProfileData[];
};

const ActivityThisWeek = ({data}: Props) => {
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
      <Text style={styles.header}>이번주</Text>
      <View style={styles.headerContainer}>
        {data.map((profile, key) => {
          return (
            <TouchableOpacity key={key} onPress={() => handlePress(profile)}>
              <Text>{profile.name} </Text>
            </TouchableOpacity>
          );
        })}
        <Text>님이 팔로우 하기 시작했습니다</Text>
      </View>
    </View>
  );
};

export default ActivityThisWeek;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
  },
  headerText: {},
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
