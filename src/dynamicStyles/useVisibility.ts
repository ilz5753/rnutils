import { useDerivedValue, type SharedValue } from 'react-native-reanimated';

export const useVisibility = (
  scrollY: SharedValue<number>,
  containerHeight: SharedValue<number>,
  itemLayoutY: SharedValue<number>,
  itemLayoutHeight: SharedValue<number>
) => {
  return useDerivedValue(() => {
    const start = itemLayoutY.value - scrollY.value;
    const end = start + itemLayoutHeight.value;
    return start < containerHeight.value && end > 0;
  });
};
