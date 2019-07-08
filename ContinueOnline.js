import React from 'react'
import {Image,StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import SeeMore from './SeeMore';

const ContinueOnline = ({ height, width }) => {
  const headerTextSize = Math.round(height / 32) || 0;
  const linkTextSize = Math.round(height / 7.5) || 0;
  const blurbTextSize = Math.round(height / 40) || 0;

  return (
    <View style={{...styles.container, width: width}}>
      <Image style={styles.star} source={require('./images/star-two.png')}/>
      <Image style={styles.spiral} source={require('./images/spiral-three.png')}/>
      <Text style={{...styles.header, fontSize: headerTextSize}}>KEEP DOING REAL SCIENCE</Text>
      <Text style={{...styles.link, fontSize: linkTextSize}}>uscientist.org</Text>
      <Text style={{...styles.blurb, width: width/1.5, fontSize: blurbTextSize}}>
        See more statistics, meet the research team, and see results and
        discoveries from the first 10 years of this project.
      </Text>
    </View>
  );
}

ContinueOnline.propTypes = {
  height: PropTypes.number,
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
  },
  blurb: {
    color: 'white',
    fontFamily: 'IBMPlexSerif',
    textAlign: 'center',
    lineHeight: 40
  },
  link: {
    color: '#E5FF4D',
    fontFamily: 'Poppins',
    fontWeight: 'bold'
  },
  spiral: {
    right: 200,
    top: 0,
    position: 'absolute',
    resizeMode: 'contain'
  },
  star: {
    left: 150,
    position: 'absolute',
    bottom: 0,
    resizeMode: 'contain'
  }
});

export default ContinueOnline;
