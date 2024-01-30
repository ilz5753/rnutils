import { useCallback } from 'react';
import { type LayoutChangeEvent } from 'react-native';
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

export function useScroll() {
  const scrollY = useSharedValue(0);
  const layoutY = useSharedValue(0);
  const layoutHeight = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler(({ contentOffset: { y } }) => {
    scrollY.value = y;
  });
  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { y, height },
      },
    }: LayoutChangeEvent) => {
      layoutY.value = y;
      layoutHeight.value = height;
    },
    []
  );

  return { layoutY, layoutHeight, onLayout, onScroll, scrollY };
}
