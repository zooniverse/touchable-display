import React from 'react';
import {Image,StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const ZooLogo = ({ height, width }) => {

  return (
    <View style={[styles.container, { height: height/10, width: width/8 }]}>
      <Image style={styles.zooStyle} source={require('./images/zooniverse.png')}/>
      <Text style={styles.presents}>PRESENTS</Text>
      <Image style={[styles.uScientistStyle, { width: width/8 }]} source={require('./images/uscientist.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50
  },
  presents: {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10
  },
  uScientistStyle: {
    flex: 6,
    resizeMode: 'contain'
  },
  zooStyle: {
    flex: 1,
    resizeMode: 'contain'
  }
});

export default ZooLogo;
