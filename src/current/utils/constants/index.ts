let hashtag = '#',
  // rgb = 'rgb',
  rgba = 'rgba';
let and = (n = 0, via = 255) => n & via;
export const HexToRgba = (hex: string, alpha = 1) => {
  try {
    let copy = hex.replace(hashtag, '');
    let bigint = parseInt(copy, 16);
    let r = and(bigint >> 16);
    let g = and(bigint >> 8);
    let b = and(bigint);
    return `${rgba}(${r}, ${g}, ${b}, ${alpha})`;
  } catch (e) {}
  return hex;
};
export type TFireEvent<T> = (value: T) => void;
export function FireEvents<T>(
  mainEvent: TFireEvent<T>,
  otherEvents: TFireEvent<T>[] = []
) {
  return (value: T) => {
    mainEvent(value);
    for (let oe of otherEvents) oe(value);
  };
}
export const Multiplier = (first: number) => (second: number) => first * second;
