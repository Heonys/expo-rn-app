/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

type Props = {
  image: any;
};

const SearchModal = ({image}: Props) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#525252" barStyle="dark-content" />
      <View
        style={[
          styles.modalContainer,
          {top: windowHeight / 6, left: windowWidth / 18},
        ]}>
        <View style={styles.modalHeader}>
          <Image source={image} style={styles.headImage} />
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>친구 아이디</Text>
          </View>
        </View>
        <Image source={image} style={styles.image} />
        <View style={styles.iconsContainer}>
          <Ionic name="heart-outline" style={{fontSize: 26}} />
          <Ionic name="person-circle-outline" style={{fontSize: 26}} />
          <Feather name="navigation" style={{fontSize: 26}} />
        </View>
      </View>
    </View>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52,52, 52,0.8)',
  },
  modalContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '90%',
    height: 465,
    borderRadius: 15,
    zIndex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  image: {
    width: '100%',
    height: '80%',
  },
  headerContainer: {
    paddingLeft: 8,
  },
  headerText: {
    fontSize: 12,
    fontWeight: '600',
  },
  iconsContainer: {
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
});
