import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import SearchContent from '../components/SearchContent';
import SearchModal from '../components/SearchModal';

const Search = () => {
  const [image, setImage] = useState(null);
  const onChangeImage = (img: any) => {
    setImage(img);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SearchInput />
        <SearchContent onChangeImage={onChangeImage} />
      </ScrollView>
      {image ? <SearchModal image={image} /> : null}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
});
