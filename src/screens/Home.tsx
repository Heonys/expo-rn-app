import {Text} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native';
import Stories from '../components/Stories';
import Posts from '../components/Posts';
import PushNotification from 'react-native-push-notification';

const Home = () => {
  useEffect(() => {
    createChannel();
  }, []);

  const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'channel-id',
        channelName: 'My channel',
      },
      created => console.log(`createChannel returned '${created}'`),
    );
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.logo}>instagram</Text>
        </View>
        <View style={styles.headerButtons}>
          <FontAwesome
            name="plus-square-o"
            style={styles.plusIcon}
            color="black"
          />
          <Feather
            name="navigation"
            style={styles.navigationIcon}
            color="black"
          />
        </View>
      </View>
      <ScrollView>
        <Stories />
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  logo: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  headerButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: 24,
    paddingHorizontal: 15,
  },
  navigationIcon: {
    fontSize: 24,
  },
});
