import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Dimensions, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width: WIDTH } = Dimensions.get('window');

const ProgressBar = ({
  barWidth = '100%',
  barHeight = 5,
  progress,
  initialProgress = 0,
  activeBarColor = '#9ed3c7',
  inactiveBarColor = '#eeeeee',
  activeBarStyle,
  inactiveBarStyle,
  iconName,
  iconSize = 35,
  iconColor = '#dbdbdb',
  hideIcon = false,
}) => {
  const activeSegmentAnim = useRef(new Animated.Value(initialProgress)).current;
  const planeAnim = useRef(new Animated.Value(initialProgress)).current;

  useEffect(() => {
    animate(progress);
  }, [progress, barWidth]);

  const animate = (progress) => {
    const convertedWidth = WIDTH * (parseFloat(barWidth) / 100);
    const activeSegmentWidth = convertedWidth * (progress / 100);

    Animated.parallel([
      Animated.timing(activeSegmentAnim, {
        toValue: activeSegmentWidth,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(planeAnim, {
        toValue: activeSegmentWidth,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const lineActive = {
    width: progress,
    height: barHeight,
    borderWidth: 1,
    borderColor: activeBarColor,
    backgroundColor: activeBarColor,
    alignSelf: 'flex-start',
    ...activeBarStyle,
  };

  const lineInactive = {
    height: barHeight,
    width: barWidth,
    borderWidth: 1,
    borderColor: inactiveBarColor,
    backgroundColor: inactiveBarColor,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    ...inactiveBarStyle,
  };

  const planeStyles = { position: 'absolute' };

  return (
    <View style={lineInactive} >
      <Animated.View style={[styles.bar, lineActive, { width: activeSegmentAnim }]} />
      {!hideIcon && (
        <Animated.View style={[styles.iconContainer, planeStyles, { left: planeAnim }]}>
          {iconName ?? <Ionicons name={'airplane'} size={iconSize} color={iconColor} />}
        </Animated.View>
      )}
    </View>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number,
  initialProgress: PropTypes.number,
  barWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  barHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  activeBarColor: PropTypes.string,
  inactiveBarColor: PropTypes.string,
  activeBarStyle: ViewPropTypes.style,
  inactiveBarStyle: ViewPropTypes.style,
  iconName: PropTypes.element,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  hideIcon: PropTypes.bool,
};
export default ProgressBar;

const styles = StyleSheet.create({
  bar: { height: '100%', width: '100%' },
});