import React from 'react'
import {Image,StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const SeeMore = ({ height, width, style }) => {
  const seeMoreSize = Math.round(height / 8) || 0;
  const linkSize = Math.round(height / 3) || 0;

  return (
    <View style={[ style, { height, justifyContent: 'flex-end' }]}>
      <Text style={[styles.seeMore, { fontSize: seeMoreSize }]}>SEE MORE AT</Text>
      <Text style={[styles.link, { fontSize: linkSize }]}>uscientist.org</Text>
    </View>
  );
}

SeeMore.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  style: PropTypes.object
}

const styles = StyleSheet.create({
  link: {
    color: '#E5FF4D',
    fontFamily: 'Poppins',
    fontWeight: 'bold'
  },
  seeMore: {
    color: '#A3DDEE',
    fontFamily: 'Poppins',
    textAlign: 'center'
  }
});

export default SeeMore;
