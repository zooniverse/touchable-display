/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ClassificationStats from './ClassificationStats';
import ZooLogo from './ZooLogo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FontAwesomeIcon style={styles.arrowLeft} icon={ faChevronLeft } color={ '#E5FF4D' } size={50} />
        <View style={styles.content}>
          <ZooLogo />
          <ClassificationStats />
        </View>
        <FontAwesomeIcon style={styles.arrowRight} icon={ faChevronRight } color={ '#E5FF4D' } size={50} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  arrowLeft: {
    flex: 1
  },
  arrowRight: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001133',
  },
  content: {
    flex: 2,
    flexDirection: 'column'
  }
});
