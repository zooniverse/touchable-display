import React from 'react'
import {Image,StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import SeeMore from './SeeMore';

const ContinueOnline = ({width}) => {
  return (
    <View style={{...styles.container, width: width}}>
      <Image style={styles.star} source={require('./images/star-two.png')}/>
      <Image style={styles.spiral} source={require('./images/spiral-three.png')}/>
      <Text style={styles.header}>KEEP DOING REAL SCIENCE</Text>
      <Text style={styles.link}>uscientist.org</Text>
      <Text style={{...styles.bio, width: width/2}}>
        See more statistics, meet the research team, and see results and
        discoveries from the first 10 years of this project.
      </Text>
    </View>
  );
}

ContinueOnline.propTypes = {
  width: PropTypes.number
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color: '#A3DDEE',
    fontFamily: 'Poppins',
    fontSize: 20
  },
  bio: {
    color: 'white',
    fontFamily: 'IBMPlexSerif',
    textAlign: 'center',
    lineHeight: 25
  },
  link: {
    color: '#E5FF4D',
    fontFamily: 'Poppins',
    fontSize: 50,
    fontWeight: 'bold'
  },
  spiral: {
    height: 250,
    width: 165,
    right: 200,
    top: 0,
    position: 'absolute',
    resizeMode: 'contain'
  },
  star: {
    height: 175,
    width: 225,
    left: 150,
    position: 'absolute',
    bottom: 0,
    resizeMode: 'contain'
  }
});

export default ContinueOnline;
