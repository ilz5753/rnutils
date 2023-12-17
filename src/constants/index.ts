export const HexToRgba = (hex: string, alpha = 1) => {
  let s = (i = 0) => parseInt(hex.slice(i, i + 2), 16);
  try {
    if (hex.startsWith('#') && hex.length === 7)
      return `rgba(${s(1)}, ${s(3)}, ${s(5)}, ${alpha})`;
  } catch (e) {}
  return hex;
};
type TFireEvent<T> = (...data: T[]) => void;
export function FireEvents<T>(
  mainEvent: TFireEvent<T>,
  otherEvents: TFireEvent<never>[]
) {
  return (...data: T[]) => {
    mainEvent(...data);
    for (let oe of otherEvents) oe();
  };
}
export const Multiplier = (first: number) => (second: number) => first * second;
