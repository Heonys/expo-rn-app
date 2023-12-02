import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/core';
import {RootStackParamList} from '../../App';

const storyInfo = [
  {
    id: 1,
    name: '나의 스토리',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 2,
    name: 'john',
    image: require('../../assets/images/profile1.jpeg'),
  },
  {
    id: 3,
    name: 'tonny',
    image: require('../../assets/images/profile2.jpeg'),
  },
  {
    id: 4,
    name: 'daniel',
    image: require('../../assets/images/profile3.jpeg'),
  },
  {
    id: 5,
    name: 'sojeong',
    image: require('../../assets/images/profile4.jpeg'),
  },
  {
    id: 6,
    name: 'jaeho',
    image: require('../../assets/images/profile5.jpeg'),
  },
  {
    id: 7,
    name: 'jaeho',
    image: require('../../assets/images/profile1.jpeg'),
  },
  {
    id: 8,
    name: 'jaeho',
    image: require('../../assets/images/profile2.jpeg'),
  },
];

const Stories = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView horizontal={true} style={styles.scrollViewContainer}>
      {storyInfo.map((story, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate('Status', {
                name: story.name,
                image: story.image,
              })
            }>
            <View style={styles.storiesContainer}>
              {story.id === 1 ? (
                <View style={styles.story}>
                  <Entypo name="circle-with-plus" style={styles.entypo} />
                </View>
              ) : null}
              <View style={styles.imageContainer}>
                <Image source={story.image} style={styles.image} />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
      {/* <Entypo name="circle-with-plus" style={styles.entypo} /> */}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingVertical: 20,
  },
  storiesContainer: {
    flexDirection: 'column',
    paddingHorizontal: 8,
    position: 'relative',
  },
  story: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    zIndex: 1,
  },
  entypo: {
    fontSize: 20,
    color: '#405de6',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: '93%',
    height: '93%',
    borderRadius: 100,
    backgroundColor: 'orange',
  },
});
