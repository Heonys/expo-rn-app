import {View} from 'react-native';
import React from 'react';
import PostItem from './PostItem';
import {postInfo} from '../../Mock/postData';

const Posts = () => {
  return (
    <View>
      {postInfo.map((post, index) => {
        return <PostItem key={index} data={post} />;
      })}
    </View>
  );
};

export default Posts;
