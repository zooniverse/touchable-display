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
import MeetAScientist from './MeetAScientist';
import ZooLogo from './ZooLogo';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      position: 0
    };
  }

  previous() {
    const position = this.state.position === 0 ? 2-1 : this.state.position - 1;
    this.move(position);
    this.setState({position});
  }

  next() {
    const position = this.state.position === 2-1 ? 0 : this.state.position + 1;
    this.move(position);
    this.setState({position});
  }

  move(index) {
    const isUpdating = index !== this.state.position;
    const x = this.state.width * index;
    this.scroller.scrollTo({x: this.state.width * index, y: 0, animated: true});
    this.setState({position: index});
    if (isUpdating && this.props.onPositionChanged) {
      this.props.onPositionChanged(index);
    }
  }

  render() {
    return (
      <View style={[styles.container, {height: this.state.height}]}>

        <ZooLogo style={styles.logo} />

        <ScrollView ref={ref => this.scroller = ref} horizontal style={[styles.scroller, {height: this.state.height, width: this.state.width}]}>
          <ClassificationStats width={this.state.width} />
          <MeetAScientist width={this.state.width} />
        </ScrollView>

        <TouchableOpacity style={{...styles.arrowLeft, top: this.state.height/2.5}} onPress={() => this.previous()}>
          <FontAwesomeIcon icon={ faChevronLeft } color={ '#E5FF4D' } size={60} />
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.arrowRight, top: this.state.height/2.5}} onPress={() => this.next()}>
          <FontAwesomeIcon icon={ faChevronRight } color={ '#E5FF4D' } size={60} />
        </TouchableOpacity>
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
