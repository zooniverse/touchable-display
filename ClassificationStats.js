import React from 'react'
import {Image,StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import SeeMore from './SeeMore';

const ClassificationStats = ({ classificationCount, height, width }) => {
  return (
    <View style={{...styles.container, height, width, paddingTop: height / 3.5}}>
      <Image style={{...styles.star}} source={require('./images/star.png')}/>
      <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <Image source={require('./images/spiral.png')}/>
      </View>
      <View>
        <Text style={[styles.header, { fontSize: height/30 }]}>ALL-TIME U!SCIENTIST CLASSIFICATIONS</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[styles.classificationCount, { lineHeight: height/2.4,fontSize: height/3 }]}>{classificationCount.toLocaleString()}</Text>
      </View>
      <View style={{ marginBottom: 50 }}>
        <SeeMore height={height/5} width={width} />
      </View>
    </View>
  );
}

ClassificationStats.propTypes = {
  classificationCount: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number
}

const styles = StyleSheet.create({
  header: {
    color: '#A3DDEE',
    fontFamily: 'Poppins',
    textAlign: 'center'
  },
  classificationCount: {
    color: '#E5FF4D',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  star: {
    left: 0,
    position: 'absolute',
    top: 0,
  }
});

export default ClassificationStats;
