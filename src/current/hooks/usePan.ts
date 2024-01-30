import { useMemo } from 'react';
import { Gesture, type PanGesture } from 'react-native-gesture-handler';
import { useSharedValue, type SharedValue } from 'react-native-reanimated';

export interface IVector {
  x: number;
  y: number;
}
export interface IPanData {
  initial?: IVector;
  initialX?: number;
  initialY?: number;
  enabled?: boolean;
  enabledX?: boolean;
  enabledY?: boolean;
}
export interface IPanResult {
  /**
   * `isActive` for `both` direction
   */
  active: SharedValue<boolean>;
  /**
   * `isActive` for `horizontal` direction
   */
  activeX: SharedValue<boolean>;
  /**
   * `isActive` for `vertical` direction
   */
  activeY: SharedValue<boolean>;
  /**
   * both direcion gesture
   */
  gesture: PanGesture;
  /**
   * horizontal gesture
   */
  gestureX: PanGesture;
  /**
   * vertical gesture
   */
  gestureY: PanGesture;
  /**
   * translate for both direction
   */
  translate: SharedValue<IVector>;
  /**
   * translate for horizontal direction
   */
  translateX: SharedValue<number>;
  /**
   * translate for vertical direction
   */
  translateY: SharedValue<number>;
}
export function usePan({
  initial = { x: 0, y: 0 },
  initialX = 0,
  initialY = 0,
  enabled = true,
  enabledX = true,
  enabledY = true,
}: IPanData): IPanResult {
  let a = useSharedValue(false);
  let tb = useSharedValue<IVector>(initial);
  let htb = useSharedValue<IVector>(initial);
  let tx = useSharedValue(initialX);
  /**
   * help translate for horizontal direction
   */
  let htx = useSharedValue(initialX);
  let ax = useSharedValue(false);
  let ty = useSharedValue(initialY);
  /**
   * help translate for vertical direction
   */
  let hty = useSharedValue(initialY);
  let ay = useSharedValue(false);
  let gx = useMemo(
    () =>
      Gesture.Pan()
        .onStart(() => {
          ax.value = true;
        })
        .onUpdate(({ translationX }) => {
          tx.value = htx.value + translationX;
        })
        .onEnd(() => {
          ax.value = false;
          htx.value = tx.value;
        })
        .enabled(enabledX),
    [enabledX]
  );
  let gy = useMemo(
    () =>
      Gesture.Pan()
        .onStart(() => {
          ay.value = true;
        })
        .onUpdate(({ translationY }) => {
          ty.value = hty.value + translationY;
        })
        .onEnd(() => {
          ay.value = false;
          hty.value = ty.value;
        })
        .enabled(enabledY),
    [enabledY]
  );
  let g = useMemo(
    () =>
      Gesture.Pan()
        .onStart(() => {
          a.value = true;
        })
        .onUpdate(({ translationX, translationY }) => {
          tb.value.x = htb.value.x + translationX;
          tb.value.y = htb.value.y + translationY;
        })
        .onEnd(() => {
          a.value = false;
          htb.value.x = tb.value.x;
          htb.value.y = tb.value.y;
        })
        .enabled(enabled),
    [enabled]
  );
  return {
    active: a,
    activeX: ax,
    activeY: ay,
    gesture: g,
    gestureX: gx,
    gestureY: gy,
    translate: tb,
    translateX: tx,
    translateY: ty,
  };
}
