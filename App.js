/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ClassificationStats from './ClassificationStats';
import ZooLogo from './ZooLogo';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    };
  }

  previous() {
    const pos = this.state.position === 0 ? this.props.dataSource.length-1 : this.state.position - 1;
    this.move(pos);
    this.setState({position: pos});
  }

  move(index) {
    const isUpdating = index !== this._getPosition();
    const x = this.state.width * index;
    this._ref.scrollTo({x: this.state.width * index, y: 0, animated: true});
    this.setState({position: index});
    if (isUpdating && this.props.onPositionChanged) {
      this.props.onPositionChanged(index);
    }
  }

  render() {
    return (
      <View style={[styles.container, {height: this.state.height}]}>

        <ZooLogo style={styles.logo} />

        <TouchableOpacity style={{...styles.arrowLeft, top: this.state.height/2}} onPress={() => this.previous()}>
          <FontAwesomeIcon icon={ faChevronLeft } color={ '#E5FF4D' } size={60} />
        </TouchableOpacity>

        <ScrollView horizontal style={[styles.scroller, {height: this.state.height, width: this.state.width}]}>
          <ClassificationStats width={this.state.width} />
        </ScrollView>

        <FontAwesomeIcon style={{...styles.arrowRight, top: this.state.height/2}} icon={ faChevronRight } color={ '#E5FF4D' } size={60} />
      </View>
    );
  }
}

App.propTypes = {
  position: PropTypes.number
}

const styles = StyleSheet.create({
  arrowLeft: {
    color: '#E5FF4D',
    position: 'absolute',
    left: 10,
  },
  arrowRight: {
    color: '#E5FF4D',
    position: 'absolute',
    right: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#001133',
  },
  content: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  scroller: {
    position: 'absolute',
    flexDirection: 'row',
  }
});
