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
  PanResponder,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import statsClient from "panoptes-client/lib/stats-client";
import ClassificationStats from './ClassificationStats';
import MeetAScientist from './MeetAScientist';
import ContinueOnline from './ContinueOnline';
import ZooLogo from './ZooLogo';
import { config } from './config.js';

type Props = {};
const TOTAL_SLIDES = 3;

export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      classificationCount: 0,
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      position: 0
    };
  }

  componentWillMount() {
    let release = (e, gestureState) => {
      const width = this.state.width;
      const relativeDistance = gestureState.dx / width;
      const vx = gestureState.vx;
      let change = 0;

      if (relativeDistance < -0.5 || (relativeDistance < 0 && vx <= 0.5)) {
        change = 1;
      } else if (relativeDistance > 0.5 || (relativeDistance > 0 && vx >= 0.5)) {
        change = -1;
      }
      const position = this.getPosition();
      if (position === 0 && change === -1) {
        change = 0;
      } else if (position + change >= TOTAL_SLIDES) {
        change = -position;
      }
      this.move(position + change);
      return true;
    };

    this._panResponder = PanResponder.create({
      onPanResponderRelease: release
    });
  }

  componentDidMount() {
    const query = { workflowID: config.tableWorkflowID, period: "year", type: "classification"};
    statsClient.query(query)
      .then((data) => {
        let classificationCount = 0;
        data.map(year => classificationCount += year.doc_count);
          this.setState({ classificationCount });
        })
  }

  getPosition() {
    if (typeof this.props.position === 'number') {
      return this.props.position;
    }
    return this.state.position;
  }

  previous() {
    const position = this.state.position === 0 ? TOTAL_SLIDES-1 : this.state.position - 1;
    this.move(position);
    this.setState({position});
  }

  next() {
    const position = this.state.position === TOTAL_SLIDES-1 ? 0 : this.state.position + 1;
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

        <ZooLogo
          height={this.state.height}
          width={this.state.width}/>

        <ScrollView
          ref={ref => this.scroller = ref}
          horizontal
          style={[styles.scroller, {height: this.state.height, width: this.state.width}]}
          {...this._panResponder.panHandlers}>
          <ClassificationStats
            classificationCount={this.state.classificationCount}
            height={this.state.height}
            width={this.state.width} />
          <MeetAScientist height={this.state.height} width={this.state.width} />
          <ContinueOnline height={this.state.height} width={this.state.width} />
        </ScrollView>

        <TouchableOpacity
          style={[layoutArrow(this.state.height, 100), { left: 10 }]}
          onPress={() => this.previous()}>
          <FontAwesomeIcon icon={ faChevronLeft } color={ '#E5FF4D' } size={100} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[layoutArrow(this.state.height, 100), { right: 10 }]}
          onPress={() => this.next()}>
          <FontAwesomeIcon icon={ faChevronRight } color={ '#E5FF4D' } size={100} />
        </TouchableOpacity>
      </View>
    );
  }
}

App.propTypes = {
  position: PropTypes.number
}

const layoutArrow = function (imageHeight, iconHeight) {
  return {
    top: (imageHeight-iconHeight)/2,
    bottom: (imageHeight-iconHeight)/2,
    color: '#E5FF4D',
    position: 'absolute',
  };
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
