import React from 'react'
import {Image,StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import SeeMore from './SeeMore';

const ClassificationStats = ({classificationCount, width}) => {
  return (
    <View style={{...styles.container, width}}>
      <Image style={styles.star} source={require('./images/star.png')}/>
      <Image style={styles.spiral} source={require('./images/spiral.png')}/>
      <View>
        <Text style={styles.header}>ALL-TIME U!SCIENTIST CLASSIFICATIONS</Text>
        <Text style={styles.classificationCount}>{classificationCount.toLocaleString()}</Text>
      </View>
      <SeeMore />
    </View>
  );
}

ClassificationStats.propTypes = {
  classificationCount: PropTypes.number,
  width: PropTypes.number
}

const styles = StyleSheet.create({
  header: {
    color: '#A3DDEE',
    fontFamily: 'Poppins',
    fontSize: 20,
    textAlign: 'center'
  },
  classificationCount: {
    color: '#E5FF4D',
    fontFamily: 'Poppins',
    fontSize: 120,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  link: {
    color: '#E5FF4D',
    fontFamily: 'Poppins',
    fontSize: 35,
    fontWeight: 'bold'
  },
  linkDiv: {
    alignItems: 'center',
  },
  seeMore: {
    color: '#A3DDEE',
    fontFamily: 'Poppins',
    fontSize: 15
  },
  spiral: {
    height: 250,
    width: 250,
    bottom: 0,
    right: 0,
    position: 'absolute',
    resizeMode: 'contain'
  },
  star: {
    height: 175,
    width: 140,
    left: 0,
    position: 'absolute',
    top: 0,
    resizeMode: 'contain'
  }
});

export default ClassificationStats;
