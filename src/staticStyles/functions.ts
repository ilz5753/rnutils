import { capitalize } from 'lodash';
import type { ColorValue, DimensionValue } from 'react-native';
import { Platform } from 'react-native';
import { getStyle, type StyleKey } from './common';
export const backgroundColor = (backgroundColor?: ColorValue) => ({
  backgroundColor,
});
export const color = (color?: ColorValue) => ({ color });
export const shadowColor = (shadowColor?: ColorValue) => ({ shadowColor });
export const tintColor = (tintColor?: ColorValue) => ({ tintColor });
export const textDecorationColor = (textDecorationColor?: ColorValue) => ({
  textDecorationColor,
});
export const textShadowColor = (textShadowColor?: ColorValue) => ({
  textShadowColor,
});
export const overlayColor = (overlayColor?: ColorValue) => ({ overlayColor });

export const flex = (flex?: number) => ({ flex });
export const opacity = (opacity?: number) => ({ opacity });
export const rowGap = (rowGap?: number) => ({ rowGap });
export const columnGap = (columnGap?: number) => ({ columnGap });
export const gap = (gap?: number) => ({ gap });
export const flexShrink = (flexShrink?: number) => ({ flexShrink });
export const zIndex = (zIndex?: number) => ({ zIndex });
export const shadowOpacity = (shadowOpacity?: number) => ({ shadowOpacity });
export const shadowRadius = (shadowRadius?: number) => ({ shadowRadius });
export const textShadowRadius = (textShadowRadius?: number) => ({
  textShadowRadius,
});
export const fontSize = (fontSize?: number) => ({ fontSize });
export const fontFamily = (fontFamily?: string) => ({ fontFamily });
export const letterSpacing = (letterSpacing?: number) => ({ letterSpacing });
export const lineHeight = (lineHeight?: number) => ({ lineHeight });
export const elevation = (elevation?: number) => ({ elevation });

export const top = (top?: DimensionValue) => ({ top });
export const bottom = (bottom?: DimensionValue) => ({ bottom });
export const left = (left?: DimensionValue) => ({ left });
export const right = (right?: DimensionValue) => ({ right });
export const start = (start?: DimensionValue) => ({ start });
export const end = (end?: DimensionValue) => ({ end });
export const flexBasis = (flexBasis?: DimensionValue) => ({ flexBasis });
export const height = (height?: DimensionValue) => ({ height });
export const minHeight = (minHeight?: DimensionValue) => ({ minHeight });
export const maxHeight = (maxHeight?: DimensionValue) => ({ maxHeight });
export const width = (width?: DimensionValue) => ({ width });
export const minWidth = (minWidth?: DimensionValue) => ({ minWidth });
export const maxWidth = (maxWidth?: DimensionValue) => ({ maxWidth });

export const fontVariant = (
  type: ('sc' | 'on' | 'ln' | 'tn' | 'pn')[] = []
) => {
  let $: (
    | 'tabular-nums'
    | 'small-caps'
    | 'oldstyle-nums'
    | 'proportional-nums'
    | 'lining-nums'
  )[] = [];
  for (let t of type)
    switch (t) {
      case 'sc':
        $.push('small-caps');
        break;
      case 'on':
        $.push('oldstyle-nums');
        break;
      case 'ln':
        $.push('lining-nums');
        break;
      case 'tn':
        $.push('tabular-nums');
        break;
      case 'pn':
        $.push('proportional-nums');
        break;
      default:
        break;
    }
  return {
    fontVariant: $,
  };
};
export type BorderOrSpace =
  | ''
  | 't'
  | 'b'
  | 'l'
  | 'r'
  | 's'
  | 'e'
  | 'h'
  | 'v'
  | 'nt'
  | 'nb'
  | 'nl'
  | 'nr'
  | 'ns'
  | 'ne';
export type BorderRadius =
  | ''
  | 'lt'
  | 'tl'
  | 'rt'
  | 'tr'
  | 'lb'
  | 'bl'
  | 'rb'
  | 'br'
  | 'st'
  | 'ts'
  | 'sb'
  | 'bs'
  | 'et'
  | 'te'
  | 'sb'
  | 'bs'
  | 'eb'
  | 'be'
  | 't'
  | 'b'
  | 'l'
  | 'r'
  | 'ntl'
  | 'nlt'
  | 'ntr'
  | 'nrt'
  | 'nbl'
  | 'nlb'
  | 'nbr'
  | 'nrb'
  | 'nts'
  | 'nst'
  | 'nte'
  | 'net'
  | 'nbs'
  | 'nsb'
  | 'nbe'
  | 'neb';
const topKey = 'top',
  bottomKey = 'bottom',
  leftKey = 'left',
  rightKey = 'right',
  startKey = 'start',
  endKey = 'end',
  horizontalKey = 'horizontal',
  verticalKey = 'vertical';
const border = (
  suffix: 'Color' | 'Width',
  type?: BorderOrSpace,
  value?: any
) => {
  const fixer = (_type: string) => `border${capitalize(_type)}${suffix}`;
  let t = fixer(topKey),
    b = fixer(bottomKey),
    l = fixer(leftKey),
    r = fixer(rightKey),
    s = fixer(startKey),
    e = fixer(endKey);
  let o = {};
  switch (type) {
    case 't':
      o = {
        [t]: value,
      };
      break;
    case 'b':
      o = {
        [b]: value,
      };
      break;
    case 'l':
      o = {
        [l]: value,
      };
      break;
    case 'r':
      o = {
        [r]: value,
      };
      break;
    case 's':
      o = {
        [s]: value,
      };
      break;
    case 'e':
      o = {
        [e]: value,
      };
      break;
    case 'h':
      o = {
        [l]: value,
        [r]: value,
      };
      break;
    case 'v':
      o = {
        [t]: value,
        [b]: value,
      };
      break;
    case 'nt':
      o = {
        [l]: value,
        [r]: value,
        [b]: value,
      };
      break;
    case 'nb':
      o = {
        [l]: value,
        [r]: value,
        [t]: value,
      };
      break;
    case 'nl':
      o = {
        [t]: value,
        [r]: value,
        [b]: value,
      };
      break;
    case 'nr':
      o = {
        [l]: value,
        [b]: value,
        [t]: value,
      };
      break;
    case 'ns':
      o = {
        [t]: value,
        [e]: value,
        [b]: value,
      };
      break;
    case 'ne':
      o = {
        [s]: value,
        [b]: value,
        [t]: value,
      };
      break;
    default:
      o = {
        [fixer('')]: value,
      };
      break;
  }
  return o;
};
export const borderColor = (type: BorderOrSpace = '', value?: ColorValue) =>
  border('Color', type, value);
export const borderWidth = (type: BorderOrSpace = '', value?: number) =>
  border('Width', type, value);

const spacing = (
  prefix: 'margin' | 'padding',
  type?: BorderOrSpace,
  value?: any
) => {
  const fixer = (_type: string) => `${prefix}${capitalize(_type)}`;
  let t = fixer(topKey),
    b = fixer(bottomKey),
    l = fixer(leftKey),
    r = fixer(rightKey),
    s = fixer(startKey),
    e = fixer(endKey),
    h = fixer(horizontalKey),
    v = fixer(verticalKey);
  let o = {};
  switch (type) {
    case 't':
      o = {
        [t]: value,
      };
      break;
    case 'b':
      o = {
        [b]: value,
      };
      break;
    case 'l':
      o = {
        [l]: value,
      };
      break;
    case 'r':
      o = {
        [r]: value,
      };
      break;
    case 's':
      o = {
        [s]: value,
      };
      break;
    case 'e':
      o = {
        [e]: value,
      };
      break;
    case 'h':
      o = {
        [h]: value,
      };
      break;
    case 'v':
      o = {
        [v]: value,
      };
      break;
    case 'nt':
      o = {
        [b]: value,
        [h]: value,
      };
      break;
    case 'nb':
      o = {
        [t]: value,
        [h]: value,
      };
      break;
    case 'nl':
      o = {
        [r]: value,
        [v]: value,
      };
      break;
    case 'nr':
      o = {
        [l]: value,
        [v]: value,
      };
      break;
    case 'ns':
      o = {
        [e]: value,
        [v]: value,
      };
      break;
    case 'ne':
      o = {
        [s]: value,
        [v]: value,
      };
      break;
    default:
      o = {
        [fixer('')]: value,
      };
      break;
  }
  return o;
};
export const margin = (type: BorderOrSpace = '', value?: DimensionValue) =>
  spacing('margin', type, value);
export const padding = (type: BorderOrSpace = '', value?: DimensionValue) =>
  spacing('padding', type, value);

export const borderRadius = (type: BorderRadius = '', value?: number) => {
  let fixer = (main: string, secondary: string) =>
    `border${capitalize(main)}${capitalize(secondary)}Radius`;
  let tl = fixer(topKey, leftKey),
    tr = fixer(topKey, rightKey),
    bl = fixer(bottomKey, leftKey),
    br = fixer(bottomKey, rightKey),
    ts = fixer(topKey, startKey),
    te = fixer(topKey, endKey),
    bs = fixer(bottomKey, startKey),
    be = fixer(bottomKey, endKey);
  let o = {};
  switch (type) {
    case 'lt':
    case 'tl':
      o = {
        [tl]: value,
      };
      break;
    case 'rt':
    case 'tr':
      o = {
        [tr]: value,
      };
      break;
    case 'lb':
    case 'bl':
      o = {
        [bl]: value,
      };
      break;
    case 'rb':
    case 'br':
      o = {
        [br]: value,
      };
      break;
    case 'st':
    case 'ts':
      o = {
        [ts]: value,
      };
      break;
    case 'et':
    case 'te':
      o = {
        [te]: value,
      };
      break;
    case 'sb':
    case 'bs':
      o = {
        [bs]: value,
      };
      break;
    case 'eb':
    case 'be':
      o = {
        [be]: value,
      };
      break;
    case 't':
      o = {
        [tl]: value,
        [tr]: value,
      };
      break;
    case 'b':
      o = {
        [bl]: value,
        [br]: value,
      };
      break;
    case 'l':
      o = {
        [tl]: value,
        [bl]: value,
      };
      break;
    case 'r':
      o = {
        [br]: value,
        [tr]: value,
      };
      break;
    case 'ntl':
    case 'nlt':
      o = {
        [br]: value,
        [bl]: value,
        [tr]: value,
      };
      break;
    case 'ntr':
    case 'nrt':
      o = {
        [br]: value,
        [bl]: value,
        [tl]: value,
      };
      break;
    case 'nbl':
    case 'nlb':
      o = {
        [br]: value,
        [tl]: value,
        [tr]: value,
      };
      break;
    case 'nbr':
    case 'nrb':
      o = {
        [tr]: value,
        [bl]: value,
        [tl]: value,
      };
      break;
    case 'nts':
    case 'nst':
      o = {
        [te]: value,
        [bl]: value,
        [br]: value,
      };
      break;
    case 'nte':
    case 'net':
      o = {
        [ts]: value,
        [bl]: value,
        [br]: value,
      };
      break;
    case 'nbs':
    case 'nsb':
      o = {
        [be]: value,
        [tl]: value,
        [tr]: value,
      };
      break;
    case 'nbe':
    case 'neb':
      o = {
        [bs]: value,
        [tl]: value,
        [tr]: value,
      };
      break;
    default:
      o = {
        [fixer('', '')]: value,
      };
      break;
  }
  return o;
};

export interface ShadowOffset {
  width: number;
  height: number;
}
export interface Shadow {
  color?: ColorValue;
  offset?: ShadowOffset;
  opacity?: number;
  radius?: number;
}
export const shadowGenerator = ({ color, offset, opacity, radius }: Shadow) => {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: opacity && radius ? opacity * radius : undefined,
  };
};
export const Layout = (w?: DimensionValue, h?: DimensionValue) => [
  width(w),
  height(h),
];
export const SquareLayout = (size?: DimensionValue) => Layout(size, size);

const { OS } = Platform;
export const isAndroid = OS === 'android';
export const isIos = OS === 'ios';
export const isWeb = OS === 'web';
export const isMacos = OS === 'macos';
export const isWindows = OS === 'windows';
export const isMobile = isAndroid || isIos;
export const f1 = flex(1);
export const fw = width('100%');
export const fh = height('100%');
export const full = [fw, fh];

export const center = getStyle(['aic', 'jcc']);
export const row = getStyle('fdr');
export const pa = getStyle('pa');
export const overlay1 = [pa, zIndex(1)];
export const overlayMax = [pa, zIndex(10e12)];
export type { StyleKey };
export { getStyle };
