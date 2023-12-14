import { isEqual, isFunction } from 'lodash';
import React, {
  Component,
  forwardRef,
  useEffect,
  type ComponentType,
  type ForwardRefExoticComponent,
  type PropsWithoutRef,
  type RefAttributes,
} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  SectionList,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  type ColorValue,
} from 'react-native';
import Animated, {
  Layout,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  type AnimateProps,
  type DerivedValue,
  type SharedValue,
} from 'react-native-reanimated';
export type CustomDimensionValue = number | `${number}%`;
export type StrNum = string | number;
export type DerivedColor = DerivedValue<ColorValue>;
export type DerivedNumber = DerivedValue<number>;
export type DerivedDimension = DerivedValue<CustomDimensionValue>;
export type TWorkletFn<T> = (...args: T[]) => T;
export interface CacheShareValue<T> {
  progress: SharedValue<number>;
  inputRange: number[];
  previous: SharedValue<T>;
  current: SharedValue<T>;
}
export const numberPercentRegex = /^(\d+)%$/;
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
    []
  );
  return useColors(color);
}
export function useNumberSizesStyle({
  previous,
  progress,
  inputRange,
  current,
}: CacheShareValue<number>) {
  let size = useDerivedValue(
    () =>
      interpolate(progress.value, inputRange, [previous.value, current.value]),
    []
  );
  return useNumberSizes(size);
}
export function useDimensionSizesStyle({
  previous,
  progress,
  inputRange,
  current,
}: CacheShareValue<CustomDimensionValue>) {
  let size = useDerivedValue(() => {
    let sp = `${previous.value}`;
    let sc = `${current.value}`;
    if (typeof previous.value === 'number' && typeof current.value === 'number')
      return interpolate(progress.value, inputRange, [
        previous.value,
        current.value,
      ]);
    else if (numberPercentRegex.test(sp) && numberPercentRegex.test(sc)) {
      let newPrevious = parseInt(sp.replace('%', ''));
      let newCurrent = parseInt(sc.replace('%', ''));
      return `${interpolate(progress.value, inputRange, [
        newPrevious,
        newCurrent,
      ])}%`;
    } else return 0;
  }, []);
  return useDimensionSizes(size as any);
}

const $ = Animated.createAnimatedComponent;
export function WithAnimated<T extends object>(Comp: ComponentType<T>) {
  class Class<T> extends Component<T> {
    render = () => {
      let C = Comp as any;
      return <C {...this.props} />;
    };
  }
  let _Component = isFunction(Comp) ? Class<T> : Comp;
  let Render = $(_Component) as any;
  return forwardRef<ComponentType<T>, Readonly<AnimateProps<T>>>(
    (props, ref) => <Render {...{ layout: Layout, ...props, ref }} />
  );
}
export const ReView = WithAnimated(View);
export const ReScrollView = WithAnimated(ScrollView);
export const ReText = WithAnimated(Text);
export const ReTextInput = WithAnimated(TextInput);
export const ReImage = WithAnimated(Image);
export const ReImageBackground = WithAnimated(ImageBackground);
export const ReActivityIndicator = WithAnimated(ActivityIndicator);
export const ReFlatList = WithAnimated(FlatList);
export const ReSectionList = WithAnimated(SectionList);
export const ReKeyboardAvoidingView = WithAnimated(KeyboardAvoidingView);
export const ReTouchableOpacity = WithAnimated(TouchableOpacity);
export const ReTouchableHighlight = WithAnimated(TouchableHighlight);
