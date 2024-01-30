import type { MutableRefObject } from 'react';

export type TRefFn = (...args: any[]) => void;
export type TRefs<T> = Record<T, TRefFn>;
export interface IRefRelation<T> {
  refs: MutableRefObject<TRefs<T> | undefined>;
  update(setter: (refs: TRefs<T>) => TRefs<T>): void;
}
export interface IStateRelation<T> {
  state: T;
  update(setter: (state: T) => T): void;
}
