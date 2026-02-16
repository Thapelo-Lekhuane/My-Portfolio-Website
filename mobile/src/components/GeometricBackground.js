import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const shapes = [
  { size: 80, left: 0.1, top: 0.15, duration: 8000, delay: 0, type: 'square' },
  { size: 120, left: 0.7, top: 0.2, duration: 10000, delay: 1000, type: 'circle' },
  { size: 60, left: 0.85, top: 0.5, duration: 7000, delay: 500, type: 'square' },
  { size: 100, left: 0.05, top: 0.55, duration: 9000, delay: 1500, type: 'diamond' },
  { size: 70, left: 0.5, top: 0.25, duration: 7500, delay: 2000, type: 'circle' },
  { size: 90, left: 0.3, top: 0.7, duration: 8500, delay: 500, type: 'square' },
  { size: 50, left: 0.75, top: 0.8, duration: 6000, delay: 1200, type: 'diamond' },
  { size: 65, left: 0.2, top: 0.35, duration: 7200, delay: 800, type: 'circle' },
  { size: 85, left: 0.6, top: 0.6, duration: 9200, delay: 300, type: 'square' },
];

function GeometricShape({ size, left, top, duration, delay, type = 'square' }) {
  const rotation = useSharedValue(0);
  const scale = useSharedValue(0.85);
  const opacity = useSharedValue(0.12);

  useEffect(() => {
    rotation.value = withDelay(
      delay,
      withRepeat(
        withTiming(360, { duration, easing: Easing.linear }),
        -1,
        false
      )
    );
    scale.value = withDelay(
      delay,
      withRepeat(
        withTiming(1.15, { duration: duration / 2, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      )
    );
    opacity.value = withDelay(
      delay,
      withRepeat(
        withTiming(0.22, { duration: duration / 2, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      )
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${rotation.value}deg` },
      { scale: scale.value },
    ],
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        styles.shape,
        {
          width: size,
          height: size,
          left: left * width - size / 2,
          top: top * height - size / 2,
        },
        animatedStyle,
      ]}
    >
      {type === 'square' && (
        <View style={[styles.square, { width: size * 0.7, height: size * 0.7 }]} />
      )}
      {type === 'circle' && (
        <View style={[styles.circle, { width: size * 0.6, height: size * 0.6 }]} />
      )}
      {type === 'diamond' && (
        <View style={[styles.diamond, { borderLeftWidth: size * 0.15, borderRightWidth: size * 0.15, borderTopWidth: size * 0.15, borderBottomWidth: size * 0.15 }]} />
      )}
    </Animated.View>
  );
}

export default function GeometricBackground() {
  return (
    <View style={styles.container} pointerEvents="none">
      {shapes.map((shape, i) => (
        <GeometricShape key={i} {...shape} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  shape: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 6,
  },
  circle: {
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.45)',
    borderRadius: 999,
  },
  diamond: {
    width: 0,
    height: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'rgba(255, 255, 255, 0.35)',
    borderBottomColor: 'rgba(255, 255, 255, 0.35)',
    transform: [{ rotate: '45deg' }],
  },
});
