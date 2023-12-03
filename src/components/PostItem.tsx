/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import {Post} from '../../Mock/postData';

type Props = {
  data: Post;
};

const PostItem = ({
  data: {postTitle, postImage, postPersonImage, isLiked, likes},
}: Props) => {
  const [like, setLike] = useState(isLiked);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.postContainer}>
          <Image source={postPersonImage} style={styles.personImage} />
          <View style={styles.postHeader}>
            <Text style={styles.postTitle}>{postTitle}</Text>
          </View>
        </View>
        <Feather name="more-vertical" style={styles.moreIcon} />
      </View>
      <View style={styles.postImageContainer}>
        <Image source={postImage} style={styles.postImage} />
      </View>
      <View style={styles.postAction}>
        <View style={styles.IconsContainer}>
          <TouchableOpacity onPress={() => setLike(prev => !prev)}>
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              style={[styles.heartIcon, {color: like ? 'red' : 'black'}]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionic name="chatbubbles-outline" style={styles.chatbubblesIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="navigation" style={styles.navigationIcon} />
          </TouchableOpacity>
        </View>
        <Feather name="bookmark" style={styles.bookmarkIcon} />
      </View>
      <View style={styles.postCommentContainer}>
        <Text>좋아요 {like ? likes + 1 : likes}개</Text>
        <Text style={styles.postComment}>게시글 설명글 입니다.</Text>
        <Text style={styles.postAllMessage}>댓글 모두보기</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.commentCotainer}>
            <Image source={postPersonImage} style={styles.commentImage} />
            <TextInput placeholder="댓글달기" style={styles.commentInput} />
          </View>
          <View>
            <Text style={{color: '#0095F6'}}>게시</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.2,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreIcon: {
    fontSize: 20,
  },
  personImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  postHeader: {
    paddingLeft: 5,
  },
  postTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  postImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  postAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  bookmarkIcon: {
    fontSize: 20,
  },
  IconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIcon: {
    paddingRight: 10,
    fontSize: 20,
  },
  chatbubblesIcon: {
    fontSize: 20,
    paddingRight: 10,
  },
  navigationIcon: {
    fontSize: 20,
  },
  postCommentContainer: {
    paddingHorizontal: 15,
  },
  postComment: {
    fontWeight: '700',
    fontSize: 14,
    paddingVertical: 2,
  },
  postAllMessage: {
    opacity: 0.4,
    paddingVertical: 2,
    marginTop: 5,
    marginBottom: 5,
  },
  commentImage: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: 'orange',
    marginRight: 10,
  },
  commentInput: {
    opacity: 0.5,
  },
  commentCotainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
