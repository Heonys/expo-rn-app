import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {RouteProp} from '@react-navigation/core';
import {RootStackParamList} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import {friendsProfileData} from '../../Mock/friendsProfileData';
import FriendItem from '../components/FriendItem';

type ScreenRouteProp = RouteProp<RootStackParamList, 'FriendProfile'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'FriendProfile'>;

type Props = {
  route: ScreenRouteProp;
  navigation: NavigationProp;
};

const FriendProfile = ({route, navigation}: Props) => {
  const {name, profileImage, posts, followers, following} = route.params;

  return (
    <SafeAreaView style={styles.safecontainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="arrow-back" style={styles.arrowIcon} />
          </TouchableOpacity>
          <View style={styles.headerLayout}>
            <Text style={styles.headerText}>{name}</Text>
            <Feather name="more-vertical" style={styles.moreIcon} />
          </View>
        </View>
        <ProfileBody
          name={name!}
          profileImage={profileImage}
          posts={posts!}
          followers={followers!}
          following={following!}
        />
        <ProfileButton type="another" />
        <Text>회원님을 위한 추천</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          {friendsProfileData
            .filter(data => data.name !== name)
            .map((profile, index) => {
              return <FriendItem key={index} name={name!} data={profile} />;
            })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FriendProfile;

const styles = StyleSheet.create({
  safecontainer: {
    width: '100%',
    backgroundColor: 'white',
  },
  container: {
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  arrowIcon: {
    fontSize: 20,
    color: 'black',
  },
  headerLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
  },
  headerText: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  moreIcon: {
    fontSize: 20,
    color: 'black',
  },
  recomandHeaderText: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  scrollView: {
    paddingTop: 10,
  },
});
