import { isArray, isString } from 'lodash';
import { StyleSheet } from 'react-native';

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
});
export type StyleKey = keyof typeof CommonStyles | boolean;
export const getStyle = (keys?: StyleKey[] | StyleKey) => {
  let o: Record<string, any> = {};
  let exe = (key: StyleKey) => {
    if (isString(key)) o = { ...o, ...CommonStyles[key] };
  };
  if (keys)
    if (isArray(keys)) for (let key of keys) exe(key);
    else exe(keys);
  return o;
};

