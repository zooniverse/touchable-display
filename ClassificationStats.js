import React from 'react'
import {Image,StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const ClassificationStats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.blueText}>All-Time U!Scientist Classifications</Text>
      <Text>12,254</Text>
      <View>
        <Text>See More At</Text>
        <Text>uscientist.org</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blueText: {
    fontSize: 24,
    color: '#A3DDEE'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly'
  }
});

export default ClassificationStats;
