import React, { Component } from 'react';
import { Animated, View, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const { WIDTH, HEIGHT } = Dimensions.get('window');
const BAR_MARGIN = 30;

const styles = StyleSheet.create({
  bar: {
    marginTop: 20,
    height: 35
  },

  lineActive: {
    position: 'absolute',
    top: 17,
    borderWidth: 1,
    borderColor: '#9ed3c7'
  },

  planeStyles: {
    position: 'absolute',
    top: 0
  },

  line: {
    position: 'absolute',
    width: WIDTH - 60,
    top: 17,
    borderWidth: 1,
    borderColor: '#eeeeee'
  }
});

export default class ProgressBar extends Component {
  static propTypes = {
    progress: PropTypes.number,
    additionalStyles: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number
    ])
  }

  state = {
    activeSegmentAnim: new Animated.Value(0),
    planeAnim: new Animated.Value(0)
  }

  componentDidMount() {
    this.animate(this.props.progress);
  }

  componentWillReceiveProps(nextProps) {
    this.animate(nextProps.progress);
  }

  animate(progress) {
    const { activeSegmentAnim, planeAnim } = this.state;
    const ratio = (WIDTH - (BAR_MARGIN * 2)) / 110;
    const activeSegmentWidth = ratio * progress;

    Animated.parallel([
      Animated.timing(activeSegmentAnim, {
        toValue: activeSegmentWidth,
        duration: 1000
      }),
      Animated.timing(planeAnim, {
        toValue: activeSegmentWidth,
        duration: 1000
      })
    ]).start();
  }

  render() {
    const { progress, additionalStyles } = this.props;
    const { activeSegmentAnim, planeAnim } = this.state;

    const lineActive = {
      position: 'absolute',
      top: 17,
      borderWidth: 1,
      borderColor: '#9ed3c7',
      transform: [{'translate':[0,0,1]}]
    };

    const planeStyles = {
      position: 'absolute',
      top: 0,
      transform: [{'translate':[0,0,1]}]
    };

    return (
      <View style={[styles.bar, {
        marginLeft: BAR_MARGIN,
        marginRight: BAR_MARGIN,
        width: WIDTH
      }, additionalStyles]}>

        <Animated.View style={{
          ...lineActive,
          width: activeSegmentAnim
        }}></Animated.View>

        <Animated.View style={{
          ...planeStyles,
          left: planeAnim
        }}>
          <Icon name='ios-plane-outline' size={35} color="#dbdbdb" />
        </Animated.View>

        <View style={styles.line}></View>

      </View>
    );
  }
}
