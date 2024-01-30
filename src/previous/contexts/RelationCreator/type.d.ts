// export type TFn<State> = (state: State) => void;
// export type TRefs<State, Refs> = Record<keyof Refs, TFn<State>>;
// export interface ISharedRelation<State, Refs> {
//   state: State;
//   refs: TRefs<State, Refs>;
// }
// export interface IRelationCreator<State, Refs> {
//   initialState: State;
//   initialRefs: TRefs<State, Refs>;
// }
// export interface IRelationCreatorCtx<State, Refs> {
//   state: State;
//   //   shared: ISharedRelation<State, Refs>;
//   //   add(shared: ISharedRelation<any, any>): void;
//   update(shared: Partial<ISharedRelation<State, Refs>>): void;
//   //   remove(stateKeys: (keyof State)[], refsKeys: (keyof Refs)[]): void;
//   fireRef: (key: keyof Refs) => void;
// }
type TRefFn = (...args: any[]) => void;
export type TRefFns = Record<string, TRefFn>;
interface IData<T> {
  data: T;
}
interface IDataActions<T> {
  add(data: T): void;
  update(data: Partial<T>): void;
  remove(keys: (keyof T)[]): void;
}
interface IState<T> extends IData<T>, IDataActions<T> {}
export interface IRelationCreatorCtx {
  state: IState<object>;
  refs: IDataActions<TRefFns>;
}
export interface IRelationCreator {
  initialState: object;
  initialRefs: TRefFns;
}
