import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

type Props = {
  name: string;
  acountName?: string;
  profileImage: any;
  posts: number | string;
  followers: number | string;
  following: number | string;
};

const ProfileBody = (props: Props) => {
  const {name, profileImage, posts, followers, following, acountName} = props;
  return (
    <React.Fragment>
      {acountName && (
        <View style={styles.headerView}>
          <View style={styles.headerLogo}>
            <Text style={styles.nameText}>{acountName}</Text>
            <Feather name="chevron-down" style={styles.chevronIcon} />
          </View>
          <View style={styles.headerContainer}>
            <Feather name="plus-square" style={styles.icon} />
            <Feather name="menu" style={styles.icon} />
          </View>
        </View>
      )}
      <View />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={profileImage} style={styles.image} />
          <Text style={styles.headerText}>{name}</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerContents}>{posts}</Text>
          <Text>게시물</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerContents}>{followers}</Text>
          <Text>팔로워</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerContents}>{following}</Text>
          <Text>팔로잉</Text>
        </View>
      </View>
    </React.Fragment>
  );
};

export default ProfileBody;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  headerText: {
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  headerRight: {
    alignItems: 'center',
  },
  headerContents: {
    fontWeight: 'bold',
  },
  chevronIcon: {
    fontSize: 20,
    color: 'black',
    paddingHorizontal: 5,
    opacity: 0.5,
  },
  icon: {
    fontSize: 25,
    color: 'black',
    paddingHorizontal: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
