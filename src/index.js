import React from 'react';
import { View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

class AirProgressBar extends React.Component {
  static propTypes = {
    progress: PropTypes.number,
    additionalStyles: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number
    ])
  }

  render() {
    const { progress, additionalStyles } = this.props;
    const { width, height } = Dimensions.get('window');

    const barMargin = 30;
    const ratio = (width - (barMargin * 2)) / 11;
    const activeSegmentWidth = ratio * progress;
    const nonActiveLeft = activeSegmentWidth + barMargin;
    const nonActiveWidth = width - nonActiveLeft - (barMargin * 2);

    return (
      <View style={[styles.bar, {
        marginLeft: barMargin,
        marginRight: barMargin,
        width: width
      }, additionalStyles]}>

        <View style={[styles.lineActive, {
          width: activeSegmentWidth
        }]}></View>

        <Icon name='ios-plane-outline' size={35} color="#dbdbdb" style={{
          position: 'absolute',
          left: activeSegmentWidth,
          top: 0
        }} />

        <View style={[styles.line, {
          left: nonActiveLeft,
          width: nonActiveWidth
        }]}></View>

      </View>
    );
  }
}

export default AirProgressBar;
