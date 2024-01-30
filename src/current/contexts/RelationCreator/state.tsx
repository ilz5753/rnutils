import { cloneDeep } from 'lodash';
import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react';
import type { IStateRelation } from './type';
/**
 * Creates a set of functions and a provider component for managing a React state.
 * @typeparam T - The type of the initial state.
 * @param initialState - The initial state value.
 * @returns An object with functions and a provider component for managing state.
 */
export function StateRelationCreator<T>(initialState: T) {
  let Ctx = createContext<null | IStateRelation<T>>(null);
  /**
   * Returns a hook for accessing and managing a React state.
   * @returns An object representing the state relation.
   */
  let useStateRelation = () => {
    let d = useContext(Ctx);
    if (d === null)
      throw new Error(
        `You forgot to wrap your entire component inside of 'StateRelationCreatorProvider'.`
      );
    return d;
  };
  /**
   * A provider component for managing a React state.
   * @param children - React nodes to be wrapped by the provider.
   * @returns JSX element representing the provider.
   */
  function StateRelationProvider({ children }: PropsWithChildren<{}>) {
    let [state, setState] = useState(initialState);
    let update = useCallback(
      (setter: (state: T) => T) => {
        let copy = cloneDeep(state);
        setter(copy);
        console.log(`copy`);
        console.log(copy);
        setState(copy);
      },
      [state]
    );
    return <Ctx.Provider {...{ value: { state, update }, children }} />;
  }
  return {
    useStateRelation,
    StateRelationProvider,
  };
}
