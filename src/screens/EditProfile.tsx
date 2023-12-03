import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';

type ScreenRouteProp = RouteProp<RootStackParamList, 'EditProfile'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'EditProfile'>;

type Props = {
  route: ScreenRouteProp;
  navigation: NavigationProp;
};

const EditProfile = ({route, navigation}: Props) => {
  const {name, acountName, profileImage} = route.params;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>취소</Text>
        </TouchableOpacity>
        <Text style={styles.modify}>프로필 수정</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.success}>완료</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Image source={profileImage} style={styles.image} />
        <Text style={styles.profileText}>프로필 사진 바꾸기</Text>
      </View>
      <View style={styles.profileContents}>
        <View style={styles.form}>
          <Text style={styles.text}>이름</Text>
          <TextInput
            placeholder="이름"
            defaultValue={name}
            style={styles.textInput}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.text}>사용자 이름</Text>
          <TextInput
            placeholder="사용자 이름"
            defaultValue={acountName}
            style={styles.textInput}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.text}>웹사이트</Text>
          <TextInput placeholder="웹사이트" style={styles.textInput} />
        </View>
        <View style={styles.form}>
          <Text style={styles.text}>소개</Text>
          <TextInput placeholder="소개" style={styles.textInput} />
        </View>
      </View>
      <View>
        <Text style={styles.footerText}>프로페셔널 계정으로 전환</Text>
        <Text style={styles.footerText}>개인정보 설정</Text>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  success: {
    color: '#3493D9',
  },
  modify: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileContainer: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  profileText: {
    color: '#3493D9',
    marginTop: 10,
  },
  profileContents: {
    padding: 10,
  },
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#CDCDCD',
  },
  text: {
    opacity: 0.5,
  },
  form: {
    paddingVertical: 10,
  },
  footerText: {
    marginVertical: 5,
    padding: 10,
    color: '#3493D9',
  },
});
