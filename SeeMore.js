import React from 'react'
import {Image,StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const SeeMore = ({style}) => {
  return (
    <View style={style}>
      <Text style={styles.seeMore}>SEE MORE AT</Text>
      <Text style={styles.link}>uscientist.org</Text>
    </View>
  );
}

SeeMore.propTypes = {
  style: PropTypes.object
}

const styles = StyleSheet.create({
  link: {
    color: '#E5FF4D',
    fontFamily: 'Poppins',
    fontSize: 35,
    fontWeight: 'bold'
  },
  seeMore: {
    color: '#A3DDEE',
    fontFamily: 'Poppins',
    fontSize: 15,
    textAlign: 'center'
  }
});

export default SeeMore;
