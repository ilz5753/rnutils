import React, { useCallback } from 'react';
import type { TouchableOpacityProps } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  type AnimateProps,
} from 'react-native-reanimated';
import { ReTouchableOpacity, ReView } from '../dynamicStyles/reanimated';

export type TScaleButton = AnimateProps<TouchableOpacityProps> & {
  duration?: number;
  toScale?: number;
};
let RV = ReView as any;
let RT = ReTouchableOpacity as any;
export function ScaleButton({
  toScale = 0.96,
  duration = 200,
  onPressIn: OI,
  onPressOut: OO,
  activeOpacity,
  ...rest
}: TScaleButton) {
  let scale = useSharedValue(1);
  let onPressIn = useCallback(() => {
    scale.value = toScale;
  }, []);
  let onPressOut = useCallback(() => {
    scale.value = 1;
  }, []);
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
