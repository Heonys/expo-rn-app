import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';

type ScreenRouteProp = RouteProp<RootStackParamList, 'Status'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'Status'>;

type Props = {
  route: ScreenRouteProp;
  navigation: NavigationProp;
};

const Status = ({route, navigation}: Props) => {
  const {name, image} = route.params;

  const progress = useRef(new Animated.Value(0)).current;

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  useEffect(() => {
    let timmer = setTimeout(() => {
      navigation.goBack();
    }, 5000);
    return () => clearTimeout(timmer);
  });

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle={'light-content'} />
      <View style={styles.line}>
        <Animated.View style={[styles.progress, {width: progressAnimation}]} />
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.headerImageContainer}>
          <Image source={image} style={styles.headerImage} />
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerName}>{name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="close" color="white" style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={image} style={styles.mainImage} />
    </SafeAreaView>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    justifyContent: 'center',
  },
  line: {
    height: 3,
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 18,
  },
  headerContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 0,
    width: '90%',
  },
  headerImageContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    borderRadius: 100,
    backgroundColor: 'orange',
    width: '92%',
    height: '92%',
    resizeMode: 'cover',
  },
  headerRight: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  headerName: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 10,
  },
  closeIcon: {
    color: 'white',
    opacity: 0.6,
    fontSize: 15,
  },
  mainImage: {
    position: 'absolute',
    width: '100%',
    height: 600,
  },
  progress: {
    height: '100%',
    backgroundColor: 'white',
  },
});
