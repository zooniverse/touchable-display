import React from 'react'
import {Image,StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import SeeMore from './SeeMore';

const ContinueOnline = ({width}) => {
  return (
    <View style={{...styles.container, width: width}}>
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
});

export default ContinueOnline;
