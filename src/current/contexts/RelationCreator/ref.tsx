import { cloneDeep } from 'lodash';
import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  type PropsWithChildren,
} from 'react';
import type { IRefRelation, TRefs } from './type';
/**
 * Creates a set of functions and a provider component for managing multiple React refs.
 * @typeparam T - A string literal type representing the names of the refs.
 * @param refNames - An array of string literals representing the names of the refs.
 * @returns An object with functions and a provider component for managing refs.
 */
export function RefRelationCreator<T extends string>(refNames: T[]) {
  let initialRefs = () => {
    let o: any;
    for (let key of refNames) o[key] = () => {};
    return o;
  };
  let Ctx = createContext<null | IRefRelation<T>>(null);
  /**
   * Returns a hook for accessing and managing multiple React refs.
   * @returns An object representing the ref relations.
   */
  let useRefRelation = () => {
    let d = useContext(Ctx);
    if (d === null)
      throw new Error(
        `You forgot to wrap your entire component inside of 'RefRelationCreatorProvider'.`
      );
    return d;
  };
  /**
   * A provider component for managing multiple React refs.
   * @param children - React nodes to be wrapped by the provider.
   * @returns JSX element representing the provider.
   */
  function RefRelationProvider({ children }: PropsWithChildren<{}>) {
    let refs = useRef<TRefs<T>>(initialRefs());
    let update = useCallback((setter: (refs: TRefs<T>) => TRefs<T>) => {
      let copy = cloneDeep(refs.current);
      setter(copy);
      refs.current = copy;
    }, []);
    return <Ctx.Provider {...{ value: { refs, update }, children }} />;
  }
  return {
    useRefRelation,
    RefRelationProvider,
  };
}
