export const HexToRgba = (hex: string, alpha = 1) => {
  let s = (i = 0) => parseInt(hex.slice(i, i + 2), 16);
  if (hex.startsWith('#') && hex.length === 7)
    return `rgba(${s(1)}, ${s(3)}, ${s(5)}, ${alpha})`;
  return hex;
};
