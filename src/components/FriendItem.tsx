/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {ProfileData} from '../../Mock/friendsProfileData';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  name: string;
  data: ProfileData;
};

const FriendItem = ({name, data}: Props) => {
  const [follow, setFollow] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <View>
      {data.name === name || close ? null : (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => setClose(true)}
            style={styles.touchable}>
            <AntDesign name="close" style={styles.closeIcon} />
          </TouchableOpacity>
          <Image source={data.profileImage} style={styles.image} />
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.acountName}>{data.accountName}</Text>
          <TouchableOpacity
            onPress={() => setFollow(prev => !prev)}
            style={{width: '80%', paddingVertical: 10}}>
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
      )}
    </View>
  );
};

export default FriendItem;

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 200,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#EDEDED',
    borderRadius: 2,
    position: 'relative',
  },
  closeIcon: {
    fontSize: 20,
    color: 'black',
    opacity: 0.5,
  },
  touchable: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    margin: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  acountName: {
    fontSize: 12,
  },
  followButton: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
