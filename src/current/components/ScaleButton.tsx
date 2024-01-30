import { isFunction } from 'lodash';
import React, { useCallback } from 'react';
import type {
  GestureResponderEvent,
  TouchableOpacityProps,
} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  type AnimatedProps,
} from 'react-native-reanimated';
import { ReTouchableOpacity, ReView } from '../styles/dynamic';

export interface IScaleButton extends AnimatedProps<TouchableOpacityProps> {
  duration?: number;
  toScale?: number;
}
let RV = ReView as any;
let RT = ReTouchableOpacity as any;
let fnFire = (fn?: any, data?: any) => {
  if (isFunction(fn)) fn(data);
};
export function ScaleButton({
  toScale = 0.96,
  duration = 200,
  onPressIn: OI,
  onPressOut: OO,
  activeOpacity,
  ...rest
}: IScaleButton) {
  let scale = useSharedValue(1);
  let onPressIn = useCallback(
    (event: GestureResponderEvent) => {
      scale.value = toScale;
      fnFire(OI, event);
    },
    [OI, toScale]
  );
  let onPressOut = useCallback(
    (event: GestureResponderEvent) => {
      scale.value = 1;
      fnFire(OO, event);
    },
    [OO]
  );
  let scaleAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withTiming(scale.value, { duration }),
      },
    ],
  }));
  return (
    <RV style={[scaleAnimation]}>
      <RT
        {...{
          activeOpacity: activeOpacity ?? 0.69,
          onPressIn,
          onPressOut,
          ...rest,
        }}
      />
    </RV>
  );
}
