import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react';
import type { IRelationCreator, IRelationCreatorCtx, TRefFns } from './type';

export function RelationCreator({
  initialRefs,
  initialState,
}: IRelationCreator) {
  let Ctx = createContext<null | IRelationCreatorCtx>(null);
  let useRelation = () => {
    let d = useContext(Ctx);
    if (d === null)
      throw new Error(
        `You forgot to wrap your entire component inside of 'RelationCreatorProvider'.`
      );
    return d;
  };
  function Provider({ children }: PropsWithChildren<{}>) {
    let [state, setState] = useState(initialState);
    let refs = useRef(initialRefs);
    let add1 = useCallback(
      (data: object) => setState((p) => ({ ...p, ...data })),
      []
    );
    let add2 = useCallback((data: TRefFns) => {
      let rm = refs.current;
      rm = { ...rm, ...data };
      refs.current = rm;
    }, []);
    // let update1 = useCallback(
    //   (data: object) => setState((p) => ({ ...p, ...data })),
    //   []
    // );
    let update2 = useCallback((data: Partial<TRefFns>) => {
      if (data) {
        let rm = refs.current;
        for (let key in data) {
          let i = data[key];
          if (i) rm[key] = i;
        }
        refs.current = rm;
      }
    }, []);
    let remove1 = useCallback(
      (keys: string[]) => {
        let copy = { ...state };
        for (let key of keys) delete (copy as any)[key];
        setState(copy);
      },
      [state]
    );
    let remove2 = useCallback((keys: string[]) => {
      let rm = refs.current;
      for (let key of keys) delete rm[key];
      refs.current = rm;
    }, []);
    return (
      <Ctx.Provider
        {...{
          //   value: { shared: { state, refs }, update },
          value: {
            state: {
              data: state,
              add: add1,
              //   update: update1,
              update: add1,
              remove: remove1,
            },
            refs: {
              add: add2,
              update: update2,
              remove: remove2,
            },
          },
          children,
        }}
      />
    );
  }
  return {
    useRelation,
    Provider,
  };
}
