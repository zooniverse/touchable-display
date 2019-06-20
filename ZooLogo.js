import React from 'react'
import {Image,StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const ZooLogo = () => {
  return (
    <View>
      <Image style={styles.zooStyle} source={require('./images/zooniverse.png')}/>
      <Text style={styles.presents}>PRESENTS</Text>
      <Image style={styles.uScientistStyle} source={require('./images/uscientist.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  presents: {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontSize: 5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  uScientistStyle: {
    height: 50,
    width: 125,
    resizeMode: 'contain'
  },
  zooStyle: {
    height: 15,
    width: 75,
    marginLeft: 'auto',
    marginRight: 'auto',
    resizeMode: 'contain'
  }
});

export default ZooLogo;
