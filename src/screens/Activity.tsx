import {Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {friendsProfileData} from '../../Mock/friendsProfileData';
import {SafeAreaView} from 'react-native-safe-area-context';
import ActivityThisWeek from '../components/ActivityThisWeek';
import ActivityPrevious from '../components/ActivityPrevious';
import ActivityRecommend from '../components/ActivityRecommend';

const Activity = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>활동</Text>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <ActivityThisWeek data={friendsProfileData.slice(0, 3)} />
        <Text style={styles.scrollContainerText}>이전 활동</Text>
        {friendsProfileData.slice(3, 6).map((data, key) => {
          return <ActivityPrevious data={data} key={key} />;
        })}
        <Text style={styles.scrollContainerText}>회원님을 위한 추천</Text>
        {friendsProfileData.slice(6, 12).map((data, key) => {
          return <ActivityRecommend data={data} key={key} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
    borderBottomColor: '#DEDEDE',
    padding: 10,
  },
  scrollContainer: {
    margin: 10,
  },
  scrollContainerText: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
