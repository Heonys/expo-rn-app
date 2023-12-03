import {StyleSheet, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: 40,
    color: 'black',
  },
  anotherCircle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'black',
    opacity: 0.1,
    marginHorizontal: 5,
  },
});

let circles: JSX.Element[] = [];
let numberOfCircles = 10;

for (let index = 0; index < numberOfCircles; index++) {
  circles.push(
    <View key={index}>
      {index === 0 ? (
        <View style={styles.container}>
          <Entypo name="plus" style={styles.plusIcon} />
        </View>
      ) : (
        <View style={styles.anotherCircle} />
      )}
    </View>,
  );
}

export {circles};
