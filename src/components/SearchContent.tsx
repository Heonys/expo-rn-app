/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {searchData} from '../../Mock/searchData';

type Props = {
  onChangeImage: (img: any) => void;
};

const SearchContent = ({onChangeImage}: Props) => {
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index} style={styles.gridContainer}>
            {data.id === 0
              ? data.images.map((imageData, imageIndex) => {
                  return (
                    <TouchableOpacity
                      onPressIn={() => onChangeImage(imageData)}
                      onPressOut={() => onChangeImage(null)}
                      key={imageIndex}
                      style={styles.imageContainer}>
                      <Image source={imageData} style={styles.image} />
                    </TouchableOpacity>
                  );
                })
              : null}
            {data.id === 1 ? (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '66.5%',
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 4).map((image, imageIndex) => {
                    return (
                      <TouchableOpacity
                        onPressIn={() => onChangeImage(image)}
                        onPressOut={() => onChangeImage(null)}
                        key={imageIndex}
                        style={{paddingBottom: 2, width: '49.5%'}}>
                        <Image
                          source={image}
                          style={{width: '100%', height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  style={{marginLeft: 2, width: '33%'}}
                  onPressIn={() => onChangeImage(data.images[4])}
                  onPressOut={() => onChangeImage(null)}>
                  <Image
                    source={data.images[4]}
                    style={{width: '100%', height: 300}}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                  style={{paddingRight: 2, width: '66.5%'}}
                  onPressIn={() => onChangeImage(data.images[2])}
                  onPressOut={() => onChangeImage(null)}>
                  <Image
                    source={data.images[2]}
                    style={{width: '100%', height: 300}}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '33.3%',
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 2).map((image, imageIndex) => {
                    return (
                      <TouchableOpacity
                        onPressIn={() => onChangeImage(image)}
                        onPressOut={() => onChangeImage(null)}
                        key={imageIndex}
                        style={{paddingBottom: 2, width: '100%'}}>
                        <Image
                          source={image}
                          style={{width: '100%', height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
  imageContainer: {
    paddingBottom: 2,
    width: '33%',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
});
