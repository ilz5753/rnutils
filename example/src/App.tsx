import React, { useCallback, useState } from 'react';
import { withTiming } from 'react-native-reanimated';

import {
  ReView,
  ReTouchableOpacity,
  useCacheShareValue,
  useColorStyle,
  f1,
  center,
  ReText,
  color,
  fontSize,
} from 'rnutils';

export default function App() {
  let [bg, setBg] = useState('red');
  let cacheBg = useCacheShareValue(bg, (max) => {
    'worklet';
    return withTiming(max, { duration: 1000 });
  });
  let colors = useColorStyle(cacheBg);
  let changeBg = useCallback(
    () => setBg((b) => (b === 'red' ? 'blue' : 'red')),
    []
  );
  return (
    <ReView
      style={[
        f1,
        // borderWidth('t', 1),
        center,
        colors.backgroundColor,
      ]}
    >
      <ReTouchableOpacity activeOpacity={0.75} onPress={changeBg}>
        <ReText style={[color('white'), fontSize(16)]}>Change Bg</ReText>
      </ReTouchableOpacity>
    </ReView>
  );
}
