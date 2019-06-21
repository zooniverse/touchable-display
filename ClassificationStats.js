import React from 'react'
import {Image,StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const ClassificationStats = (width) => {
  return (
    <View style={[styles.container, width: width]}>
      <View>
        <Text style={styles.header}>ALL-TIME U!SCIENTIST CLASSIFICATIONS</Text>
        <Text style={styles.classificationCount}>12,254</Text>
      </View>
      <View style={styles.linkDiv}>
        <Text style={styles.seeMore}>SEE MORE AT</Text>
        <Text style={styles.link}>uscientist.org</Text>
      </View>
    </View>
  );
}

ClassificationStats.propTypes = {
  width: PropTypes.number
}

const styles = StyleSheet.create({
  header: {
    color: '#A3DDEE',
    fontFamily: 'Poppins',
    fontSize: 20
  },
  classificationCount: {
    color: '#E5FF4D',
    fontFamily: 'Poppins',
    fontSize: 120,
    textAlign: 'center'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 50
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
  }
});

export default ClassificationStats;
