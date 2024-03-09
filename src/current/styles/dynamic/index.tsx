import { isEqual } from 'lodash';
import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  type ColorValue,
  type ViewProps,
} from 'react-native';
import Animated, {
  // FadeIn,
  // FadeOut,
  LinearTransition,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  type AnimatedProps,
  type DerivedValue,
  type SharedValue,
} from 'react-native-reanimated';

/**
 * Represents a dimension value that can be either a number or a percentage string.
 */
export type CustomDimensionValue = number | `${number}%`;
/**
 * Represents a value that can be either a string or a number.
 */
export type StrNum = string | number;
/**
 * Represents a derived color value.
 */
export type DerivedColor = DerivedValue<ColorValue>;
/**
 * Represents a derived number value.
 */
export type DerivedNumber = DerivedValue<number>;
/**
 * Represents a derived dimension value.
 */
export type DerivedDimension = DerivedValue<CustomDimensionValue>;
/**
 * Represents a worklet function with a generic parameter type.
 */
export type TWorkletFn<T> = (...args: T[]) => T;
/**
 * Represents a set of shared values used for caching and sharing values in animations.
 */
export interface CacheShareValue<T> {
  progress: SharedValue<number>;
  inputRange: number[];
  previous: SharedValue<T>;
  current: SharedValue<T>;
}
/**
 * Creates and returns a set of shared values for caching and sharing values in animations.
 * @param value - The initial value.
 * @param progressUpdaterWorklet - A worklet function for updating progress.
 * @param min - The minimum value for progress.
 * @param max - The maximum value for progress.
 * @returns A CacheShareValue object.
 */
export function useCacheShareValue<T>(
  value: T,
  progressUpdaterWorklet?: TWorkletFn<number>,
  min = 0,
  max = 1
): CacheShareValue<T> {
  let previous = useSharedValue(value);
  let current = useSharedValue(value);
  let progress = useSharedValue(min);
  useEffect(() => {
    if (!isEqual(value, current.value)) {
      previous.value = current.value;
      progress.value = min;
      current.value = value;
      progress.value = progressUpdaterWorklet
        ? progressUpdaterWorklet(max)
        : max;
    }
  }, [value, min, max]);
  return {
    progress,
    inputRange: [min, max],
    previous,
    current,
  };
}
/**
 * Represents a set of styles related to color values.
 */
export function useColors(value: DerivedColor) {
  let backgroundColor = useAnimatedStyle(() => ({
    backgroundColor: value.value,
  }));
  let color = useAnimatedStyle(() => ({
    color: value.value,
  }));
  let borderColor = useAnimatedStyle(() => ({
    borderColor: value.value,
  }));
  let borderTopColor = useAnimatedStyle(() => ({
    borderTopColor: value.value,
  }));
  let borderEndColor = useAnimatedStyle(() => ({
    borderEndColor: value.value,
  }));
  let borderStartColor = useAnimatedStyle(() => ({
    borderStartColor: value.value,
  }));
  let borderBottomColor = useAnimatedStyle(() => ({
    borderBottomColor: value.value,
  }));
  let borderLeftColor = useAnimatedStyle(() => ({
    borderLeftColor: value.value,
  }));
  let borderRightColor = useAnimatedStyle(() => ({
    borderRightColor: value.value,
  }));
  let borderHorizontalColor = useAnimatedStyle(() => ({
    borderLeftColor: value.value,
    borderRightColor: value.value,
  }));
  let borderVerticalColor = useAnimatedStyle(() => ({
    borderTopColor: value.value,
    borderBottomColor: value.value,
  }));
  let borderNotTopColor = useAnimatedStyle(() => ({
    borderBottomColor: value.value,
    borderLeftColor: value.value,
    borderRightColor: value.value,
  }));
  let borderNotBottomColor = useAnimatedStyle(() => ({
    borderTopColor: value.value,
    borderLeftColor: value.value,
    borderRightColor: value.value,
  }));
  let borderNotLeftColor = useAnimatedStyle(() => ({
    borderTopColor: value.value,
    borderBottomColor: value.value,
    borderRightColor: value.value,
  }));
  let borderNotRightColor = useAnimatedStyle(() => ({
    borderTopColor: value.value,
    borderBottomColor: value.value,
    borderLeftColor: value.value,
  }));
  let shadowColor = useAnimatedStyle(() => ({
    shadowColor: value.value,
  }));
  let tintColor = useAnimatedStyle(() => ({
    tintColor: value.value,
  }));
  let textDecorationColor = useAnimatedStyle(() => ({
    textDecorationColor: value.value,
  }));
  let textShadowColor = useAnimatedStyle(() => ({
    textShadowColor: value.value,
  }));
  let overlayColor = useAnimatedStyle(() => ({
    overlayColor: value.value,
  }));
  return {
    backgroundColor,
    color,
    borderColor,
    borderStartColor,
    borderEndColor,
    borderTopColor,
    borderBottomColor,
    borderLeftColor,
    borderRightColor,
    borderNotTopColor,
    borderNotBottomColor,
    borderNotLeftColor,
    borderNotRightColor,
    borderVerticalColor,
    borderHorizontalColor,
    shadowColor,
    tintColor,
    textDecorationColor,
    textShadowColor,
    overlayColor,
  };
}
/**
 * Represents a set of styles related to number values.
 */
export function useNumberSizes(value: DerivedNumber) {
  let flex = useAnimatedStyle(() => ({
    flex: value.value,
  }));
  let borderRadius = useAnimatedStyle(() => ({
    borderRadius: value.value,
  }));
  let borderTopLeftRadius = useAnimatedStyle(() => ({
    borderTopLeftRadius: value.value,
  }));
  let borderTopRightRadius = useAnimatedStyle(() => ({
    borderTopRightRadius: value.value,
  }));
  let borderTopStartRadius = useAnimatedStyle(() => ({
    borderTopStartRadius: value.value,
  }));
  let borderTopEndRadius = useAnimatedStyle(() => ({
    borderTopEndRadius: value.value,
  }));
  let borderBottomLeftRadius = useAnimatedStyle(() => ({
    borderBottomLeftRadius: value.value,
  }));
  let borderBottomRightRadius = useAnimatedStyle(() => ({
    borderBottomRightRadius: value.value,
  }));
  let borderBottomStartRadius = useAnimatedStyle(() => ({
    borderBottomStartRadius: value.value,
  }));
  let borderBottomEndRadius = useAnimatedStyle(() => ({
    borderBottomEndRadius: value.value,
  }));
  let borderTopRadius = useAnimatedStyle(() => ({
    borderTopStartRadius: value.value,
    borderTopEndRadius: value.value,
  }));
  let borderBottomRadius = useAnimatedStyle(() => ({
    borderBottomStartRadius: value.value,
    borderBottomEndRadius: value.value,
  }));
  let borderLeftRadius = useAnimatedStyle(() => ({
    borderTopLeftRadius: value.value,
    borderBottomLeftRadius: value.value,
  }));
  let borderRightRadius = useAnimatedStyle(() => ({
    borderTopRightRadius: value.value,
    borderBottomRightRadius: value.value,
  }));
  let borderNotTopLeftRadius = useAnimatedStyle(() => ({
    borderTopRightRadius: value.value,
    borderBottomRightRadius: value.value,
    borderBottomLeftRadius: value.value,
  }));
  let borderNotTopStartRadius = useAnimatedStyle(() => ({
    borderTopEndRadius: value.value,
    borderBottomRightRadius: value.value,
    borderBottomLeftRadius: value.value,
  }));
  let borderNotTopRightRadius = useAnimatedStyle(() => ({
    borderTopLeftRadius: value.value,
    borderBottomRightRadius: value.value,
    borderBottomLeftRadius: value.value,
  }));
  let borderNotTopEndRadius = useAnimatedStyle(() => ({
    borderTopStartRadius: value.value,
    borderBottomRightRadius: value.value,
    borderBottomLeftRadius: value.value,
  }));
  let borderNotBottomLeftRadius = useAnimatedStyle(() => ({
    borderBottomRightRadius: value.value,
    borderTopRightRadius: value.value,
    borderTopLeftRadius: value.value,
  }));
  let borderNotBottomStartRadius = useAnimatedStyle(() => ({
    borderBottomEndRadius: value.value,
    borderTopRightRadius: value.value,
    borderTopLeftRadius: value.value,
  }));
  let borderNotBottomRightRadius = useAnimatedStyle(() => ({
    borderBottomLeftRadius: value.value,
    borderTopRightRadius: value.value,
    borderTopLeftRadius: value.value,
  }));
  let borderNotBottomEndRadius = useAnimatedStyle(() => ({
    borderBottomStartRadius: value.value,
    borderTioRightRadius: value.value,
    borderTioLeftRadius: value.value,
  }));
  let borderWidth = useAnimatedStyle(() => ({
    borderWidth: value.value,
  }));
  let borderTopWidth = useAnimatedStyle(() => ({
    borderTopWidth: value.value,
  }));
  let borderBottomWidth = useAnimatedStyle(() => ({
    borderBottomWidth: value.value,
  }));
  let borderLeftWidth = useAnimatedStyle(() => ({
    borderLeftWidth: value.value,
  }));
  let borderRightWidth = useAnimatedStyle(() => ({
    borderRightWidth: value.value,
  }));
  let borderStartWidth = useAnimatedStyle(() => ({
    borderStartWidth: value.value,
  }));
  let borderEndWidth = useAnimatedStyle(() => ({
    borderEndWidth: value.value,
  }));
  let borderHorizontalWidth = useAnimatedStyle(() => ({
    borderLeftWidth: value.value,
    borderRightWidth: value.value,
  }));
  let borderVerticalWidth = useAnimatedStyle(() => ({
    borderTopWidth: value.value,
    borderBottomWidth: value.value,
  }));
  let borderNotTopWidth = useAnimatedStyle(() => ({
    borderBottomWidth: value.value,
    borderLeftWidth: value.value,
    borderRightWidth: value.value,
  }));
  let borderNotBottomWidth = useAnimatedStyle(() => ({
    borderTopWidth: value.value,
    borderLeftWidth: value.value,
    borderRightWidth: value.value,
  }));
  let borderNotLeftWidth = useAnimatedStyle(() => ({
    borderTopWidth: value.value,
    borderBottomWidth: value.value,
    borderRightWidth: value.value,
  }));
  let borderNotRightWidth = useAnimatedStyle(() => ({
    borderTopWidth: value.value,
    borderBottomWidth: value.value,
    borderLeftWidth: value.value,
  }));
  let borderNotStartWidth = useAnimatedStyle(() => ({
    borderTopWidth: value.value,
    borderBottomWidth: value.value,
    borderEndWidth: value.value,
  }));
  let borderNotEndWidth = useAnimatedStyle(() => ({
    borderTopWidth: value.value,
    borderBottomWidth: value.value,
    borderStartWidth: value.value,
  }));
  let opacity = useAnimatedStyle(() => ({
    opacity: value.value,
  }));
  let columnGap = useAnimatedStyle(() => ({
    columnGap: value.value,
  }));
  let rowGap = useAnimatedStyle(() => ({
    rowGap: value.value,
  }));
  let flexShrink = useAnimatedStyle(() => ({
    flexShrink: value.value,
  }));
  let gap = useAnimatedStyle(() => ({
    gap: value.value,
  }));
  let zIndex = useAnimatedStyle(() => ({
    zIndex: value.value,
  }));
  let shadowOpacity = useAnimatedStyle(() => ({
    shadowOpacity: value.value,
  }));
  let shadowRadius = useAnimatedStyle(() => ({
    shadowRadius: value.value,
  }));
  let textShadowRadius = useAnimatedStyle(() => ({
    textShadowRadius: value.value,
  }));
  let fontSize = useAnimatedStyle(() => ({
    fontSize: value.value,
  }));
  let letterSpacing = useAnimatedStyle(() => ({
    letterSpacing: value.value,
  }));
  let lineHeight = useAnimatedStyle(() => ({
    lineHeight: value.value,
  }));
  let elevation = useAnimatedStyle(() => ({
    elevation: value.value,
  }));
  return {
    flex,
    borderRadius,
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomRadius,
    borderBottomRightRadius,
    borderBottomStartRadius,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopRadius,
    borderTopRightRadius,
    borderTopStartRadius,
    borderLeftRadius,
    borderRightRadius,
    borderNotBottomEndRadius,
    borderNotBottomRightRadius,
    borderNotBottomStartRadius,
    borderNotBottomLeftRadius,
    borderNotTopEndRadius,
    borderNotTopRightRadius,
    borderNotTopStartRadius,
    borderNotTopLeftRadius,
    borderWidth,
    borderTopWidth,
    borderLeftWidth,
    borderBottomWidth,
    borderRightWidth,
    borderHorizontalWidth,
    borderVerticalWidth,
    borderNotTopWidth,
    borderNotLeftWidth,
    borderNotBottomWidth,
    borderNotRightWidth,
    borderStartWidth,
    borderEndWidth,
    borderNotStartWidth,
    borderNotEndWidth,
    opacity,
    rowGap,
    columnGap,
    gap,
    flexShrink,
    zIndex,
    shadowOpacity,
    shadowRadius,
    textShadowRadius,
    fontSize,
    letterSpacing,
    lineHeight,
    elevation,
  };
}
/**
 * Represents a set of styles related to dimension values.
 */
export function useDimensionSizes(value: DerivedDimension) {
  let top = useAnimatedStyle(() => ({
    top: value.value,
  }));
  let bottom = useAnimatedStyle(() => ({
    bottom: value.value,
  }));
  let left = useAnimatedStyle(() => ({
    left: value.value,
  }));
  let right = useAnimatedStyle(() => ({
    right: value.value,
  }));
  let start = useAnimatedStyle(() => ({
    start: value.value,
  }));
  let end = useAnimatedStyle(() => ({
    end: value.value,
  }));
  let flexBasis = useAnimatedStyle(() => ({
    flexBasis: value.value,
  }));
  let height = useAnimatedStyle(() => ({
    height: value.value,
  }));
  let maxHeight = useAnimatedStyle(() => ({
    maxHeight: value.value,
  }));
  let minHeight = useAnimatedStyle(() => ({
    minHeight: value.value,
  }));
  let width = useAnimatedStyle(() => ({
    width: value.value,
  }));
  let maxWidth = useAnimatedStyle(() => ({
    maxWidth: value.value,
  }));
  let minWidth = useAnimatedStyle(() => ({
    minWidth: value.value,
  }));
  let margin = useAnimatedStyle(() => ({
    margin: value.value,
  }));
  let marginTop = useAnimatedStyle(() => ({
    marginTop: value.value,
  }));
  let marginBottom = useAnimatedStyle(() => ({
    marginBottom: value.value,
  }));
  let marginLeft = useAnimatedStyle(() => ({
    marginLeft: value.value,
  }));
  let marginRight = useAnimatedStyle(() => ({
    marginRight: value.value,
  }));
  let marginStart = useAnimatedStyle(() => ({
    marginStart: value.value,
  }));
  let marginEnd = useAnimatedStyle(() => ({
    marginEnd: value.value,
  }));
  let marginHorizontal = useAnimatedStyle(() => ({
    marginHorizontal: value.value,
  }));
  let marginVertical = useAnimatedStyle(() => ({
    marginVertical: value.value,
  }));
  let marginNotTop = useAnimatedStyle(() => ({
    marginBottom: value.value,
    marginHorizontal: value.value,
  }));
  let marginNotBottom = useAnimatedStyle(() => ({
    marginTop: value.value,
    marginHorizontal: value.value,
  }));
  let marginNotLeft = useAnimatedStyle(() => ({
    marginRight: value.value,
    marginVertical: value.value,
  }));
  let marginNotRight = useAnimatedStyle(() => ({
    marginLeft: value.value,
    marginVertical: value.value,
  }));
  let marginNotStart = useAnimatedStyle(() => ({
    marginEnd: value.value,
    marginVertical: value.value,
  }));
  let marginNotEnd = useAnimatedStyle(() => ({
    marginStart: value.value,
    marginVertical: value.value,
  }));
  let padding = useAnimatedStyle(() => ({
    padding: value.value,
  }));
  let paddingTop = useAnimatedStyle(() => ({
    paddingTop: value.value,
  }));
  let paddingBottom = useAnimatedStyle(() => ({
    paddingBottom: value.value,
  }));
  let paddingLeft = useAnimatedStyle(() => ({
    paddingLeft: value.value,
  }));
  let paddingRight = useAnimatedStyle(() => ({
    paddingRight: value.value,
  }));
  let paddingStart = useAnimatedStyle(() => ({
    paddingStart: value.value,
  }));
  let paddingEnd = useAnimatedStyle(() => ({
    paddingEnd: value.value,
  }));
  let paddingHorizontal = useAnimatedStyle(() => ({
    paddingHorizontal: value.value,
  }));
  let paddingVertical = useAnimatedStyle(() => ({
    paddingVertical: value.value,
  }));
  let paddingNotTop = useAnimatedStyle(() => ({
    paddingBottom: value.value,
    paddingHorizontal: value.value,
  }));
  let paddingNotBottom = useAnimatedStyle(() => ({
    paddingTop: value.value,
    paddingHorizontal: value.value,
  }));
  let paddingNotLeft = useAnimatedStyle(() => ({
    paddingRight: value.value,
    paddingVertical: value.value,
  }));
  let paddingNotRight = useAnimatedStyle(() => ({
    paddingLeft: value.value,
    paddingVertical: value.value,
  }));
  let paddingNotStart = useAnimatedStyle(() => ({
    paddingEnd: value.value,
    paddingVertical: value.value,
  }));
  let paddingNotEnd = useAnimatedStyle(() => ({
    paddingStart: value.value,
    paddingVertical: value.value,
  }));
  return {
    top,
    bottom,
    left,
    right,
    start,
    end,
    flexBasis,
    height,
    minHeight,
    maxHeight,
    width,
    minWidth,
    maxWidth,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginStart,
    marginEnd,
    marginHorizontal,
    marginVertical,
    marginNotTop,
    marginNotBottom,
    marginNotLeft,
    marginNotRight,
    marginNotStart,
    marginNotEnd,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingStart,
    paddingEnd,
    paddingHorizontal,
    paddingVertical,
    paddingNotTop,
    paddingNotBottom,
    paddingNotLeft,
    paddingNotRight,
    paddingNotStart,
    paddingNotEnd,
  };
}
/**
 * Represents a set of styles related to color values using CacheShareValue.
 */
export function useColorStyle({
  previous,
  progress,
  inputRange,
  current,
}: CacheShareValue<string>) {
  let color = useDerivedValue(
    () =>
      interpolateColor(progress.value, inputRange, [
        previous.value,
        current.value,
      ]),
    [inputRange]
  );
  return useColors(color);
}
/**
 * Represents a set of styles related to number values using CacheShareValue.
 */
export function useNumberSizesStyle({
  previous,
  progress,
  inputRange,
  current,
}: CacheShareValue<number>) {
  let size = useDerivedValue(
    () =>
      interpolate(progress.value, inputRange, [previous.value, current.value]),
    [inputRange]
  );
  return useNumberSizes(size);
}
/**
 * Regular expression for matching percentage strings.
 */
export const numberPercentRegex = /^(\d+)%$/;
/**
 * Converts CustomDimensionValue to a number, handling percentage strings.
 * @param cs - The {@link CustomDimensionValue} to convert.
 * @returns The converted number value.
 */
export const ReFromCsToNumber = (cs: CustomDimensionValue): number => {
  'worklet';
  if (typeof cs === 'number') {
    return cs;
  } else if (numberPercentRegex.test(cs)) {
    // If it's a percentage string, extract the number and convert it
    return parseInt(cs.replace('%', ''), 10);
  } else {
    throw new Error(`Invalid CustomDimensionValue: ${cs}`);
  }
};
/**
 * Uses shared values to create dimension sizes styles with caching and sharing values in animations.
 * @param param0 - CacheShareValue containing previous, progress, inputRange, and current values.
 * @returns A set of styles related to dimension sizes.
 */
export function useDimensionSizesStyle({
  previous,
  progress,
  inputRange,
  current,
}: CacheShareValue<CustomDimensionValue>) {
  let size = useDerivedValue(
    () =>
      interpolate(progress.value, inputRange, [
        ReFromCsToNumber(previous.value),
        ReFromCsToNumber(current.value),
      ]),
    [inputRange]
  );
  return useDimensionSizes(size as any);
}
/**
 * Animated component creators using Reanimated library.
 */
export const Re = Animated.createAnimatedComponent;

// function HOC<T extends object>(Component: ComponentType<T>) {
//   let Ac = Re(Component);
//   return ({
//     layout = LinearTransition,
//     entering = FadeIn,
//     exiting = FadeOut,
//     ...props
//   }: AnimatedProps<ViewProps>) => {
//     return (
//       <ReView
//         {...{
//           layout,
//           entering,
//           exiting,
//           ...props,
//         }}
//       />
//     );
//   };
// }

export const ReView = Re(View);
export const ReScrollView = Re(ScrollView);
export const ReText = Re(Text);
export const ReTextInput = Re(TextInput);
export const ReImage = Re(Image);
export const ReImageBackground = Re(ImageBackground);
export const ReActivityIndicator = Re(ActivityIndicator);
export const ReSectionList = Re(SectionList);
export const ReKeyboardAvoidingView = Re(KeyboardAvoidingView);
export const ReTouchableOpacity = Re(TouchableOpacity);
export const ReTouchableHighlight = Re(TouchableHighlight);
export const ReStatusBar = Re(StatusBar);
export const ReModal = Re(Modal);
export const ReSwitch = Re(Switch);
export const ReRefreshControl = Re(RefreshControl);
export const ReSafeAreaView = Re(SafeAreaView);
export function ReWrapper({
  layout = LinearTransition,
  // entering = FadeIn,
  // exiting = FadeOut,
  ...props
}: AnimatedProps<ViewProps>) {
  return (
    <ReView
      {...{
        layout,
        // entering,
        // exiting,
        ...props,
      }}
    />
  );
}
type AVP = AnimatedProps<ViewProps>;
export interface AnimatedLayoutViewProps
  extends Pick<AVP, 'entering' | 'exiting' | 'children' | 'style'> {}
export function AnimatedLayoutView(props: AnimatedLayoutViewProps) {
  return (
    <ReView
      {...{
        layout: LinearTransition,
        ...props,
      }}
    />
  );
}
