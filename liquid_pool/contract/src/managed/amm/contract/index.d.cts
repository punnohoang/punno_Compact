import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type Witnesses<T> = {
}

export type ImpureCircuits<T> = {
  createPool(context: __compactRuntime.CircuitContext<T>,
             amountA_0: bigint,
             amountB_0: bigint): __compactRuntime.CircuitResults<T, []>;
  addLiquidity(context: __compactRuntime.CircuitContext<T>,
               amountA_0: bigint,
               amountB_0: bigint,
               lpMinted_0: bigint): __compactRuntime.CircuitResults<T, []>;
  removeLiquidity(context: __compactRuntime.CircuitContext<T>,
                  lpBurned_0: bigint,
                  amountA_0: bigint,
                  amountB_0: bigint): __compactRuntime.CircuitResults<T, []>;
  swapAforB(context: __compactRuntime.CircuitContext<T>,
            inputAmount_0: bigint,
            outputAmount_0: bigint,
            minOutput_0: bigint): __compactRuntime.CircuitResults<T, []>;
  swapBforA(context: __compactRuntime.CircuitContext<T>,
            inputAmount_0: bigint,
            outputAmount_0: bigint,
            minOutput_0: bigint): __compactRuntime.CircuitResults<T, []>;
}

export type PureCircuits = {
}

export type Circuits<T> = {
  createPool(context: __compactRuntime.CircuitContext<T>,
             amountA_0: bigint,
             amountB_0: bigint): __compactRuntime.CircuitResults<T, []>;
  addLiquidity(context: __compactRuntime.CircuitContext<T>,
               amountA_0: bigint,
               amountB_0: bigint,
               lpMinted_0: bigint): __compactRuntime.CircuitResults<T, []>;
  removeLiquidity(context: __compactRuntime.CircuitContext<T>,
                  lpBurned_0: bigint,
                  amountA_0: bigint,
                  amountB_0: bigint): __compactRuntime.CircuitResults<T, []>;
  swapAforB(context: __compactRuntime.CircuitContext<T>,
            inputAmount_0: bigint,
            outputAmount_0: bigint,
            minOutput_0: bigint): __compactRuntime.CircuitResults<T, []>;
  swapBforA(context: __compactRuntime.CircuitContext<T>,
            inputAmount_0: bigint,
            outputAmount_0: bigint,
            minOutput_0: bigint): __compactRuntime.CircuitResults<T, []>;
}

export type Ledger = {
  readonly poolA_reserve: bigint;
  readonly poolB_reserve: bigint;
  readonly lp_totalSupply: bigint;
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<T, W extends Witnesses<T> = Witnesses<T>> {
  witnesses: W;
  circuits: Circuits<T>;
  impureCircuits: ImpureCircuits<T>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<T>): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
