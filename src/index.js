import React from 'react';
import { Animated, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import sizes from '../../constants/Sizes';

const barMargin = 30;

class ProgressBar extends React.Component {
  static propTypes = {
    progress: PropTypes.number,
    additionalStyles: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number
    ])
  }

  state = {
    activeSegmentAnim: new Animated.Value(0),
    planeLeftAnim: new Animated.Value(0)
  }

  componentDidMount() {
    this.animate(this.props.progress);
  }

  componentWillReceiveProps(nextProps) {
    this.animate(nextProps.progress);
  }

  animate(progress) {
    const { activeSegmentAnim, planeLeftAnim } = this.state;
    const ratio = (sizes.width - (barMargin * 2)) / 110;
    const activeSegmentWidth = ratio * progress;

    Animated.parallel([
      Animated.timing(activeSegmentAnim, {
        toValue: activeSegmentWidth,
        duration: 1000
      }),
      Animated.timing(planeLeftAnim, {
        toValue: activeSegmentWidth,
        duration: 1000
      })
    ]).start();
  }

  render() {
    const { progress, additionalStyles } = this.props;
    const { activeSegmentAnim, planeLeftAnim } = this.state;

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
        marginLeft: barMargin,
        marginRight: barMargin,
        width: sizes.width
      }, additionalStyles]}>

        <Animated.View style={{
          ...lineActive,
          width: activeSegmentAnim
        }}></Animated.View>

        <Animated.View style={{
          ...planeStyles,
          left: planeLeftAnim
        }}>
          <Icon name='ios-plane-outline' size={35} color="#dbdbdb" />
        </Animated.View>

        <View style={styles.line}></View>

      </View>
    );
  }
}

export default ProgressBar;
