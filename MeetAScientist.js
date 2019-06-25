import React from 'react'
import {Image,StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import SeeMore from './SeeMore';

const MeetAScientist = ({height, width}) => {
  return (
    <View style={{...styles.container, height, width}}>
      <Image style={styles.star} source={require('./images/star-two.png')}/>
      <Image style={styles.spiral} source={require('./images/spiral-two.png')}/>
      <View style={styles.scientist}>
        <Image style={styles.image} source={require('./images/simmons.png')}/>
      </View>
      <View style={styles.content}>
        <Text style={styles.header}>MEET A SCIENTIST</Text>
        <Text style={styles.name}>Brooke Simmons</Text>
        <Text style={{...styles.bio, width: width/3}}>
          As an astrophysicist at Lancaster University, Brooke uses data
          from Galaxy Zoo in her research into why and how galaxies grow,
          especially in tandem with their central supermassive black holes.
        </Text>
      </View>
      <SeeMore style={{position: 'absolute', bottom: 0}} />
    </View>
  );
}

MeetAScientist.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}

const styles = StyleSheet.create({
  bio: {
    color: 'white',
    fontFamily: 'IBMPlexSerif'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 175,
    resizeMode: 'contain'
  },
  scientist: {
    flex: 1,
    margin: 25,
    alignItems: 'flex-end',
  },
  header: {
    color: '#A3DDEE',
    fontFamily: 'Poppins',
    fontSize: 20
  },
  name: {
    color: '#E5FF4D',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  content: {
    flex: 1,
    margin: 25
  },
  spiral: {
    height: 250,
    width: 165,
    bottom: 0,
    left: 0,
    position: 'absolute',
    resizeMode: 'contain'
  },
  star: {
    height: 175,
    width: 225,
    right: 0,
    position: 'absolute',
    top: 0,
    resizeMode: 'contain'
  }
});

export default MeetAScientist;
