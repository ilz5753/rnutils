import { capitalize, isArray, isEmpty } from 'lodash';
import {
  Platform,
  StyleSheet,
  type ColorValue,
  type DimensionValue,
} from 'react-native';

const CommonStyles = StyleSheet.create({
  bfv: {
    backfaceVisibility: 'visible',
  },
  bfh: {
    backfaceVisibility: 'hidden',
  },
  ['bs-']: {
    borderStyle: 'dashed',
  },
  ['bs.']: {
    borderStyle: 'dotted',
  },
  bss: {
    borderStyle: 'solid',
  },
  pea: {
    pointerEvents: 'auto',
  },
  pen: {
    pointerEvents: 'none',
  },
  pebn: {
    pointerEvents: 'box-none',
  },
  pebo: {
    pointerEvents: 'box-only',
  },
  fsi: {
    fontStyle: 'italic',
  },
  fsn: {
    fontStyle: 'normal',
  },
  fw1: {
    fontWeight: '100',
  },
  fw2: {
    fontWeight: '200',
  },
  fw3: {
    fontWeight: '300',
  },
  fw4: {
    fontWeight: '400',
  },
  fw5: {
    fontWeight: '500',
  },
  fw6: {
    fontWeight: '600',
  },
  fw7: {
    fontWeight: '700',
  },
  fw8: {
    fontWeight: '800',
  },
  fw9: {
    fontWeight: '900',
  },
  fwb: {
    fontWeight: 'bold',
  },
  fwn: {
    fontWeight: 'normal',
  },
  taa: {
    textAlign: 'auto',
  },
  tac: {
    textAlign: 'center',
  },
  taj: {
    textAlign: 'justify',
  },
  tal: {
    textAlign: 'left',
  },
  tar: {
    textAlign: 'right',
  },
  tava: {
    textAlignVertical: 'auto',
  },
  tavc: {
    textAlignVertical: 'center',
  },
  tavt: {
    textAlignVertical: 'top',
  },
  tavb: {
    textAlignVertical: 'bottom',
  },
  tdll: {
    textDecorationLine: 'line-through',
  },
  tdln: {
    textDecorationLine: 'none',
  },
  tdlu: {
    textDecorationLine: 'underline',
  },
  tdlul: {
    textDecorationLine: 'underline line-through',
  },
  ['tds-']: {
    textDecorationStyle: 'dashed',
  },
  ['tds.']: {
    textDecorationStyle: 'dotted',
  },
  tdsd: {
    textDecorationStyle: 'double',
  },
  tdss: {
    textDecorationStyle: 'solid',
  },
  ttc: {
    textTransform: 'capitalize',
  },
  ttl: {
    textTransform: 'lowercase',
  },
  ttn: {
    textTransform: 'none',
  },
  ttu: {
    textTransform: 'uppercase',
  },
  vaa: {
    verticalAlign: 'auto',
  },
  vab: {
    verticalAlign: 'bottom',
  },
  vam: {
    verticalAlign: 'middle',
  },
  vat: {
    verticalAlign: 'top',
  },
  wda: {
    writingDirection: 'auto',
  },
  wdl: {
    writingDirection: 'ltr',
  },
  wdr: {
    writingDirection: 'rtl',
  },
  ac: {
    alignContent: 'center',
  },
  acfe: {
    alignContent: 'flex-end',
  },
  acfs: {
    alignContent: 'flex-start',
  },
  acsa: {
    alignContent: 'space-around',
  },
  acsb: {
    alignContent: 'space-between',
  },
  acs: {
    alignContent: 'stretch',
  },
  aib: {
    alignItems: 'baseline',
  },
  aic: {
    alignItems: 'center',
  },
  aife: {
    alignItems: 'flex-end',
  },
  aifs: {
    alignItems: 'flex-start',
  },
  ais: {
    alignItems: 'stretch',
  },
  asa: {
    alignSelf: 'auto',
  },
  asb: {
    alignSelf: 'baseline',
  },
  asc: {
    alignSelf: 'center',
  },
  asfe: {
    alignSelf: 'flex-end',
  },
  asfs: {
    alignSelf: 'flex-start',
  },
  ass: {
    alignSelf: 'stretch',
  },
  di: {
    direction: 'inherit',
  },
  dl: {
    direction: 'ltr',
  },
  dr: {
    direction: 'rtl',
  },
  df: {
    display: 'flex',
  },
  dn: {
    display: 'none',
  },
  fdc: {
    flexDirection: 'column',
  },
  fdcr: {
    flexDirection: 'column-reverse',
  },
  fdr: {
    flexDirection: 'row',
  },
  fdrr: {
    flexDirection: 'row-reverse',
  },
  jcc: {
    justifyContent: 'center',
  },
  jcfe: {
    justifyContent: 'flex-end',
  },
  jcfs: {
    justifyContent: 'flex-start',
  },
  jcsa: {
    justifyContent: 'space-around',
  },
  jcsb: {
    justifyContent: 'space-between',
  },
  jcse: {
    justifyContent: 'space-evenly',
  },
  oh: {
    overflow: 'hidden',
  },
  os: {
    overflow: 'scroll',
  },
  ov: {
    overflow: 'visible',
  },
  pa: {
    position: 'absolute',
  },
  pr: {
    position: 'relative',
  },
  rmce: {
    resizeMode: 'center',
  },
  rmcon: {
    resizeMode: 'contain',
  },
  rmcov: {
    resizeMode: 'cover',
  },
  rmr: {
    resizeMode: 'repeat',
  },
  rms: {
    resizeMode: 'stretch',
  },
  ofcon: {
    objectFit: 'contain',
  },
  ofcov: {
    objectFit: 'cover',
  },
  off: {
    objectFit: 'fill',
  },
  ofsd: {
    objectFit: 'scale-down',
  },
  fww: {
    flexWrap: 'wrap',
  },
  fwnw: {
    flexWrap: 'nowrap',
  },
  fwwr: {
    flexWrap: 'wrap-reverse',
  },
});
export type StyleKey = keyof typeof CommonStyles | '';
/**
 * Get styles based on specified keys.
 * @param keys Array of {@link StyleKey}
 * @returns A styles object
 */
export const getStyle = (keys?: StyleKey | StyleKey[]) => {
  let o: Record<string, any> = {};
  let exe = (key: StyleKey) => {
    if (!isEmpty(key)) o = { ...o, ...CommonStyles[key] };
  };
  if (keys) {
    const keyArray: StyleKey[] = isArray(keys) ? keys : [keys];
    for (let key of keyArray) exe(key);
  }
  return o;
};
/**
 * Returns a style object for setting background color.
 * @param backgroundColor - Color value for the background.
 * @returns Style object.
 */
export const backgroundColor = (backgroundColor?: ColorValue) => ({
  backgroundColor,
});

/**
 * Returns a style object for setting text color.
 * @param color - Color value for the text.
 * @returns Style object.
 */
export const color = (color?: ColorValue) => ({ color });

/**
 * Returns a style object for setting shadow color.
 * @param shadowColor - Color value for the shadow.
 * @returns Style object.
 */
export const shadowColor = (shadowColor?: ColorValue) => ({ shadowColor });

/**
 * Returns a style object for setting tint color.
 * @param tintColor - Color value for the tint.
 * @returns Style object.
 */
export const tintColor = (tintColor?: ColorValue) => ({ tintColor });

/**
 * Returns a style object for setting text decoration color.
 * @param textDecorationColor - Color value for text decoration.
 * @returns Style object.
 */
export const textDecorationColor = (textDecorationColor?: ColorValue) => ({
  textDecorationColor,
});

/**
 * Returns a style object for setting text shadow color.
 * @param textShadowColor - Color value for text shadow.
 * @returns Style object.
 */
export const textShadowColor = (textShadowColor?: ColorValue) => ({
  textShadowColor,
});

/**
 * Returns a style object for setting overlay color.
 * @param overlayColor - Color value for overlay.
 * @returns Style object.
 */
export const overlayColor = (overlayColor?: ColorValue) => ({ overlayColor });

/**
 * Returns a style object for setting flex value.
 * @param flex - Flex value.
 * @returns Style object.
 */
export const flex = (flex?: number) => ({ flex });

/**
 * Returns a style object for setting opacity.
 * @param opacity - Opacity value.
 * @returns Style object.
 */
export const opacity = (opacity?: number) => ({ opacity });

/**
 * Returns a style object for setting row gap.
 * @param rowGap - Row gap value.
 * @returns Style object.
 */
export const rowGap = (rowGap?: number) => ({ rowGap });

/**
 * Returns a style object for setting column gap.
 * @param columnGap - Column gap value.
 * @returns Style object.
 */
export const columnGap = (columnGap?: number) => ({ columnGap });

/**
 * Returns a style object for setting gap.
 * @param gap - Gap value.
 * @returns Style object.
 */
export const gap = (gap?: number) => ({ gap });

/**
 * Returns a style object for setting flex shrink.
 * @param flexShrink - Flex shrink value.
 * @returns Style object.
 */
export const flexShrink = (flexShrink?: number) => ({ flexShrink });

/**
 * Returns a style object for setting z-index.
 * @param zIndex - Z-index value.
 * @returns Style object.
 */
export const zIndex = (zIndex?: number) => ({ zIndex });

/**
 * Returns a style object for setting shadow opacity.
 * @param shadowOpacity - Shadow opacity value.
 * @returns Style object.
 */
export const shadowOpacity = (shadowOpacity?: number) => ({ shadowOpacity });

/**
 * Returns a style object for setting shadow radius.
 * @param shadowRadius - Shadow radius value.
 * @returns Style object.
 */
export const shadowRadius = (shadowRadius?: number) => ({ shadowRadius });

/**
 * Returns a style object for setting text shadow radius.
 * @param textShadowRadius - Text shadow radius value.
 * @returns Style object.
 */
export const textShadowRadius = (textShadowRadius?: number) => ({
  textShadowRadius,
});

/**
 * Returns a style object for setting font size.
 * @param fontSize - Font size value.
 * @returns Style object.
 */
export const fontSize = (fontSize?: number) => ({ fontSize });

/**
 * Returns a style object for setting font family.
 * @param fontFamily - Font family value.
 * @returns Style object.
 */
export const fontFamily = (fontFamily?: string) => ({ fontFamily });

/**
 * Returns a style object for setting letter spacing.
 * @param letterSpacing - Letter spacing value.
 * @returns Style object.
 */
export const letterSpacing = (letterSpacing?: number) => ({ letterSpacing });

/**
 * Returns a style object for setting line height.
 * @param lineHeight - Line height value.
 * @returns Style object.
 */
export const lineHeight = (lineHeight?: number) => ({ lineHeight });

/**
 * Returns a style object for setting elevation.
 * @param elevation - Elevation value.
 * @returns Style object.
 */
export const elevation = (elevation?: number) => ({ elevation });

// Continue with similar documentation for the remaining utility functions...

/**
 * Returns a style object for setting top position.
 * @param top - Top position value.
 * @returns Style object.
 */
export const top = (top?: DimensionValue) => ({ top });

/**
 * Returns a style object for setting bottom position.
 * @param bottom - Bottom position value.
 * @returns Style object.
 */
export const bottom = (bottom?: DimensionValue) => ({ bottom });

/**
 * Returns a style object for setting left position.
 * @param left - Left position value.
 * @returns Style object.
 */
export const left = (left?: DimensionValue) => ({ left });

/**
 * Returns a style object for setting right position.
 * @param right - Right position value.
 * @returns Style object.
 */
export const right = (right?: DimensionValue) => ({ right });

/**
 * Returns a style object for setting start position.
 * @param start - Start position value.
 * @returns Style object.
 */
export const start = (start?: DimensionValue) => ({ start });

/**
 * Returns a style object for setting end position.
 * @param end - End position value.
 * @returns Style object.
 */
export const end = (end?: DimensionValue) => ({ end });

/**
 * Returns a style object for setting flex basis.
 * @param flexBasis - Flex basis value.
 * @returns Style object.
 */
export const flexBasis = (flexBasis?: DimensionValue) => ({ flexBasis });

/**
 * Returns a style object for setting height.
 * @param height - Height value.
 * @returns Style object.
 */
export const height = (height?: DimensionValue) => ({ height });

/**
 * Returns a style object for setting min height.
 * @param minHeight - Min height value.
 * @returns Style object.
 */
export const minHeight = (minHeight?: DimensionValue) => ({ minHeight });

/**
 * Returns a style object for setting max height.
 * @param maxHeight - Max height value.
 * @returns Style object.
 */
export const maxHeight = (maxHeight?: DimensionValue) => ({ maxHeight });

/**
 * Returns a style object for setting width.
 * @param width - Width value.
 * @returns Style object.
 */
export const width = (width?: DimensionValue) => ({ width });

/**
 * Returns a style object for setting min width.
 * @param minWidth - Min width value.
 * @returns Style object.
 */
export const minWidth = (minWidth?: DimensionValue) => ({ minWidth });

/**
 * Returns a style object for setting max width.
 * @param maxWidth - Max width value.
 * @returns Style object.
 */
export const maxWidth = (maxWidth?: DimensionValue) => ({ maxWidth });

/**
 * Returns a style object for setting font variant.
 * @param type - Array of font variant types ('sc', 'on', 'ln', 'tn', 'pn').
 * @returns Style object.
 */
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
  for (let t of type) {
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
/**
 * Returns a style object for setting border color.
 * @param type - Type of border [{@link BorderOrSpace}].
 * @param value - Color value for the border.
 * @returns Style object.
 */
export const borderColor = (type: BorderOrSpace = '', value?: ColorValue) =>
  border('Color', type, value);
/**
 * Returns a style object for setting border width.
 * @param type - Type of border [{@link BorderOrSpace}].
 * @param value - Width value for the border.
 * @returns Style object.
 */
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
/**
 * Returns a style object for setting margin.
 * @param type - Type of spacing [{@link BorderOrSpace}].
 * @param value - Dimension value for the margin.
 * @returns Style object.
 */
export const margin = (type: BorderOrSpace = '', value?: DimensionValue) =>
  spacing('margin', type, value);
/**
 * Returns a style object for setting padding.
 * @param type - Type of spacing [{@link BorderOrSpace}].
 * @param value - Dimension value for the padding.
 * @returns Style object.
 */
export const padding = (type: BorderOrSpace = '', value?: DimensionValue) =>
  spacing('padding', type, value);
/**
 * Returns a style object for setting border radius.
 * @param type - Type of border radius [{@link BorderOrSpace}].
 * @param value - Radius value for the border.
 * @returns Style object.
 */
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
/**
 * Interface for shadow offset.
 */
export interface ShadowOffset {
  width: number;
  height: number;
}

/**
 * Interface for shadow properties.
 */
export interface Shadow {
  color?: ColorValue;
  offset?: ShadowOffset;
  opacity?: number;
  radius?: number;
}

/**
 * Generates a style object for applying shadow.
 * @param shadow - Shadow properties.
 * @returns Style object.
 */
export const shadowGenerator = ({
  color,
  offset,
  opacity = 0.36,
  radius = 18,
}: Shadow) => {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: opacity * radius,
  };
};
/**
 * Returns an array of style objects for setting layout dimensions.
 * @param w - Width value.
 * @param h - Height value.
 * @returns Array of style objects.
 */
export const Layout = (w?: DimensionValue, h?: DimensionValue) => [
  width(w),
  height(h),
];
/**
 * Returns an array of style objects for setting square layout dimensions.
 * @param size - Size value for width and height.
 * @returns Array of style objects.
 */
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
export const transparent = 'transparent';
export const center = getStyle(['aic', 'jcc']);
export const row = getStyle('fdr');
export const pa = getStyle('pa');
export const overlay1 = [pa, zIndex(1)];
export const overlayMax = [pa, zIndex(10e12)];
