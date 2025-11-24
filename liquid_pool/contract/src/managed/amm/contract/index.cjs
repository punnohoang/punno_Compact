'use strict';
const __compactRuntime = require('@midnight-ntwrk/compact-runtime');
const expectedRuntimeVersionString = '0.8.1';
const expectedRuntimeVersion = expectedRuntimeVersionString.split('-')[0].split('.').map(Number);
const actualRuntimeVersion = __compactRuntime.versionString.split('-')[0].split('.').map(Number);
if (expectedRuntimeVersion[0] != actualRuntimeVersion[0]
     || (actualRuntimeVersion[0] == 0 && expectedRuntimeVersion[1] != actualRuntimeVersion[1])
     || expectedRuntimeVersion[1] > actualRuntimeVersion[1]
     || (expectedRuntimeVersion[1] == actualRuntimeVersion[1] && expectedRuntimeVersion[2] > actualRuntimeVersion[2]))
   throw new __compactRuntime.CompactError(`Version mismatch: compiled code expects ${expectedRuntimeVersionString}, runtime is ${__compactRuntime.versionString}`);
{ const MAX_FIELD = 52435875175126190479447740508185965837690552500527637822603658699938581184512n;
  if (__compactRuntime.MAX_FIELD !== MAX_FIELD)
     throw new __compactRuntime.CompactError(`compiler thinks maximum field value is ${MAX_FIELD}; run time thinks it is ${__compactRuntime.MAX_FIELD}`)
}

const _descriptor_0 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

const _descriptor_1 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

const _descriptor_2 = new __compactRuntime.CompactTypeBoolean();

const _descriptor_3 = new __compactRuntime.CompactTypeBytes(32);

class _ContractAddress_0 {
  alignment() {
    return _descriptor_3.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.bytes);
  }
}

const _descriptor_4 = new _ContractAddress_0();

const _descriptor_5 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

const _descriptor_6 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    }
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    }
    this.witnesses = witnesses_0;
    this.circuits = {
      createPool: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`createPool: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const amountA_0 = args_1[1];
        const amountB_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('createPool',
                                      'argument 1 (as invoked from Typescript)',
                                      'amm.compact line 31 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(typeof(amountA_0) === 'bigint' && amountA_0 >= 0n && amountA_0 <= 65535n)) {
          __compactRuntime.type_error('createPool',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'amm.compact line 31 char 1',
                                      'Uint<0..65535>',
                                      amountA_0)
        }
        if (!(typeof(amountB_0) === 'bigint' && amountB_0 >= 0n && amountB_0 <= 65535n)) {
          __compactRuntime.type_error('createPool',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'amm.compact line 31 char 1',
                                      'Uint<0..65535>',
                                      amountB_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(amountA_0).concat(_descriptor_0.toValue(amountB_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_0.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._createPool_0(context,
                                            partialProofData,
                                            amountA_0,
                                            amountB_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      addLiquidity: (...args_1) => {
        if (args_1.length !== 4) {
          throw new __compactRuntime.CompactError(`addLiquidity: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const amountA_0 = args_1[1];
        const amountB_0 = args_1[2];
        const lpMinted_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('addLiquidity',
                                      'argument 1 (as invoked from Typescript)',
                                      'amm.compact line 56 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(typeof(amountA_0) === 'bigint' && amountA_0 >= 0n && amountA_0 <= 65535n)) {
          __compactRuntime.type_error('addLiquidity',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'amm.compact line 56 char 1',
                                      'Uint<0..65535>',
                                      amountA_0)
        }
        if (!(typeof(amountB_0) === 'bigint' && amountB_0 >= 0n && amountB_0 <= 65535n)) {
          __compactRuntime.type_error('addLiquidity',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'amm.compact line 56 char 1',
                                      'Uint<0..65535>',
                                      amountB_0)
        }
        if (!(typeof(lpMinted_0) === 'bigint' && lpMinted_0 >= 0n && lpMinted_0 <= 65535n)) {
          __compactRuntime.type_error('addLiquidity',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'amm.compact line 56 char 1',
                                      'Uint<0..65535>',
                                      lpMinted_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(amountA_0).concat(_descriptor_0.toValue(amountB_0).concat(_descriptor_0.toValue(lpMinted_0))),
            alignment: _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._addLiquidity_0(context,
                                              partialProofData,
                                              amountA_0,
                                              amountB_0,
                                              lpMinted_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      removeLiquidity: (...args_1) => {
        if (args_1.length !== 4) {
          throw new __compactRuntime.CompactError(`removeLiquidity: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const lpBurned_0 = args_1[1];
        const amountA_0 = args_1[2];
        const amountB_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('removeLiquidity',
                                      'argument 1 (as invoked from Typescript)',
                                      'amm.compact line 93 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(typeof(lpBurned_0) === 'bigint' && lpBurned_0 >= 0n && lpBurned_0 <= 65535n)) {
          __compactRuntime.type_error('removeLiquidity',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'amm.compact line 93 char 1',
                                      'Uint<0..65535>',
                                      lpBurned_0)
        }
        if (!(typeof(amountA_0) === 'bigint' && amountA_0 >= 0n && amountA_0 <= 65535n)) {
          __compactRuntime.type_error('removeLiquidity',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'amm.compact line 93 char 1',
                                      'Uint<0..65535>',
                                      amountA_0)
        }
        if (!(typeof(amountB_0) === 'bigint' && amountB_0 >= 0n && amountB_0 <= 65535n)) {
          __compactRuntime.type_error('removeLiquidity',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'amm.compact line 93 char 1',
                                      'Uint<0..65535>',
                                      amountB_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(lpBurned_0).concat(_descriptor_0.toValue(amountA_0).concat(_descriptor_0.toValue(amountB_0))),
            alignment: _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._removeLiquidity_0(context,
                                                 partialProofData,
                                                 lpBurned_0,
                                                 amountA_0,
                                                 amountB_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      swapAforB: (...args_1) => {
        if (args_1.length !== 4) {
          throw new __compactRuntime.CompactError(`swapAforB: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const inputAmount_0 = args_1[1];
        const outputAmount_0 = args_1[2];
        const minOutput_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('swapAforB',
                                      'argument 1 (as invoked from Typescript)',
                                      'amm.compact line 131 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(typeof(inputAmount_0) === 'bigint' && inputAmount_0 >= 0n && inputAmount_0 <= 65535n)) {
          __compactRuntime.type_error('swapAforB',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'amm.compact line 131 char 1',
                                      'Uint<0..65535>',
                                      inputAmount_0)
        }
        if (!(typeof(outputAmount_0) === 'bigint' && outputAmount_0 >= 0n && outputAmount_0 <= 65535n)) {
          __compactRuntime.type_error('swapAforB',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'amm.compact line 131 char 1',
                                      'Uint<0..65535>',
                                      outputAmount_0)
        }
        if (!(typeof(minOutput_0) === 'bigint' && minOutput_0 >= 0n && minOutput_0 <= 65535n)) {
          __compactRuntime.type_error('swapAforB',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'amm.compact line 131 char 1',
                                      'Uint<0..65535>',
                                      minOutput_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(inputAmount_0).concat(_descriptor_0.toValue(outputAmount_0).concat(_descriptor_0.toValue(minOutput_0))),
            alignment: _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._swapAforB_0(context,
                                           partialProofData,
                                           inputAmount_0,
                                           outputAmount_0,
                                           minOutput_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      swapBforA: (...args_1) => {
        if (args_1.length !== 4) {
          throw new __compactRuntime.CompactError(`swapBforA: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const inputAmount_0 = args_1[1];
        const outputAmount_0 = args_1[2];
        const minOutput_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('swapBforA',
                                      'argument 1 (as invoked from Typescript)',
                                      'amm.compact line 159 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(typeof(inputAmount_0) === 'bigint' && inputAmount_0 >= 0n && inputAmount_0 <= 65535n)) {
          __compactRuntime.type_error('swapBforA',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'amm.compact line 159 char 1',
                                      'Uint<0..65535>',
                                      inputAmount_0)
        }
        if (!(typeof(outputAmount_0) === 'bigint' && outputAmount_0 >= 0n && outputAmount_0 <= 65535n)) {
          __compactRuntime.type_error('swapBforA',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'amm.compact line 159 char 1',
                                      'Uint<0..65535>',
                                      outputAmount_0)
        }
        if (!(typeof(minOutput_0) === 'bigint' && minOutput_0 >= 0n && minOutput_0 <= 65535n)) {
          __compactRuntime.type_error('swapBforA',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'amm.compact line 159 char 1',
                                      'Uint<0..65535>',
                                      minOutput_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(inputAmount_0).concat(_descriptor_0.toValue(outputAmount_0).concat(_descriptor_0.toValue(minOutput_0))),
            alignment: _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._swapBforA_0(context,
                                           partialProofData,
                                           inputAmount_0,
                                           outputAmount_0,
                                           minOutput_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      }
    };
    this.impureCircuits = {
      createPool: this.circuits.createPool,
      addLiquidity: this.circuits.addLiquidity,
      removeLiquidity: this.circuits.removeLiquidity,
      swapAforB: this.circuits.swapAforB,
      swapBforA: this.circuits.swapBforA
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const constructorContext_0 = args_0[0];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = stateValue_0;
    state_0.setOperation('createPool', new __compactRuntime.ContractOperation());
    state_0.setOperation('addLiquidity', new __compactRuntime.ContractOperation());
    state_0.setOperation('removeLiquidity', new __compactRuntime.ContractOperation());
    state_0.setOperation('swapAforB', new __compactRuntime.ContractOperation());
    state_0.setOperation('swapBforA', new __compactRuntime.ContractOperation());
    const context = {
      originalState: state_0,
      currentPrivateState: constructorContext_0.initialPrivateState,
      currentZswapLocalState: constructorContext_0.initialZswapLocalState,
      transactionContext: new __compactRuntime.QueryContext(state_0.data, __compactRuntime.dummyContractAddress())
    };
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(0n),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(0n),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(1n),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(0n),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(2n),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(0n),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    state_0.data = context.transactionContext.state;
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  _createPool_0(context, partialProofData, amountA_0, amountB_0) {
    const currentSupply_0 = _descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_5.toValue(2n),
                                                                                                alignment: _descriptor_5.alignment() } }] } },
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value);
    __compactRuntime.assert(this._equal_0(currentSupply_0, 0n),
                            'Pool already initialized');
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(0n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_0.toValue(amountA_0),
                                              alignment: _descriptor_0.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(1n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_0.toValue(amountB_0),
                                              alignment: _descriptor_0.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    const lpAmount_0 = amountA_0 < amountB_0 ? amountA_0 : amountB_0;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(2n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_0.toValue(lpAmount_0),
                                              alignment: _descriptor_0.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _addLiquidity_0(context, partialProofData, amountA_0, amountB_0, lpMinted_0) {
    const reserveA_0 = _descriptor_1.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_5.toValue(0n),
                                                                                           alignment: _descriptor_5.alignment() } }] } },
                                                                { popeq: { cached: true,
                                                                           result: undefined } }]).value);
    const reserveB_0 = _descriptor_1.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_5.toValue(1n),
                                                                                           alignment: _descriptor_5.alignment() } }] } },
                                                                { popeq: { cached: true,
                                                                           result: undefined } }]).value);
    const totalSupply_0 = _descriptor_1.fromValue(Contract._query(context,
                                                                  partialProofData,
                                                                  [
                                                                   { dup: { n: 0 } },
                                                                   { idx: { cached: false,
                                                                            pushPath: false,
                                                                            path: [
                                                                                   { tag: 'value',
                                                                                     value: { value: _descriptor_5.toValue(2n),
                                                                                              alignment: _descriptor_5.alignment() } }] } },
                                                                   { popeq: { cached: true,
                                                                              result: undefined } }]).value);
    __compactRuntime.assert(totalSupply_0 > 0n, 'Pool not initialized');
    const checkA_0 = lpMinted_0 * reserveA_0;
    const checkB_0 = lpMinted_0 * reserveB_0;
    const requiredA_0 = amountA_0 * totalSupply_0;
    const requiredB_0 = amountB_0 * totalSupply_0;
    __compactRuntime.assert(checkA_0 <= requiredA_0,
                            'Insufficient amountA for desired LP');
    __compactRuntime.assert(checkB_0 <= requiredB_0,
                            'Insufficient amountB for desired LP');
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(0n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_0.toValue(amountA_0),
                                              alignment: _descriptor_0.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(1n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_0.toValue(amountB_0),
                                              alignment: _descriptor_0.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(2n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_0.toValue(lpMinted_0),
                                              alignment: _descriptor_0.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _removeLiquidity_0(context, partialProofData, lpBurned_0, amountA_0, amountB_0)
  {
    const reserveA_0 = _descriptor_1.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_5.toValue(0n),
                                                                                           alignment: _descriptor_5.alignment() } }] } },
                                                                { popeq: { cached: true,
                                                                           result: undefined } }]).value);
    const reserveB_0 = _descriptor_1.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_5.toValue(1n),
                                                                                           alignment: _descriptor_5.alignment() } }] } },
                                                                { popeq: { cached: true,
                                                                           result: undefined } }]).value);
    const totalSupply_0 = _descriptor_1.fromValue(Contract._query(context,
                                                                  partialProofData,
                                                                  [
                                                                   { dup: { n: 0 } },
                                                                   { idx: { cached: false,
                                                                            pushPath: false,
                                                                            path: [
                                                                                   { tag: 'value',
                                                                                     value: { value: _descriptor_5.toValue(2n),
                                                                                              alignment: _descriptor_5.alignment() } }] } },
                                                                   { popeq: { cached: true,
                                                                              result: undefined } }]).value);
    __compactRuntime.assert(totalSupply_0 >= lpBurned_0,
                            'Insufficient LP supply');
    const checkA_0 = amountA_0 * totalSupply_0;
    const checkB_0 = amountB_0 * totalSupply_0;
    const expectedA_0 = reserveA_0 * lpBurned_0;
    const expectedB_0 = reserveB_0 * lpBurned_0;
    __compactRuntime.assert(this._equal_1(checkA_0, expectedA_0),
                            'Invalid amountA calculation');
    __compactRuntime.assert(this._equal_2(checkB_0, expectedB_0),
                            'Invalid amountB calculation');
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(0n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { subi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_0.toValue(amountA_0),
                                              alignment: _descriptor_0.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(1n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { subi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_0.toValue(amountB_0),
                                              alignment: _descriptor_0.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(2n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { subi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_0.toValue(lpBurned_0),
                                              alignment: _descriptor_0.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _swapAforB_0(context,
               partialProofData,
               inputAmount_0,
               outputAmount_0,
               minOutput_0)
  {
    const reserveA_0 = _descriptor_1.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_5.toValue(0n),
                                                                                           alignment: _descriptor_5.alignment() } }] } },
                                                                { popeq: { cached: true,
                                                                           result: undefined } }]).value);
    const reserveB_0 = _descriptor_1.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_5.toValue(1n),
                                                                                           alignment: _descriptor_5.alignment() } }] } },
                                                                { popeq: { cached: true,
                                                                           result: undefined } }]).value);
    __compactRuntime.assert(outputAmount_0 >= minOutput_0, 'Slippage too high');
    const k_before_0 = reserveA_0 * reserveB_0;
    const newReserveA_0 = reserveA_0 + inputAmount_0;
    let t_0;
    const newReserveB_0 = (t_0 = outputAmount_0,
                           (__compactRuntime.assert(!(reserveB_0 < t_0),
                                                    'result of subtraction would be negative'),
                            reserveB_0 - t_0));
    const k_after_0 = newReserveA_0 * newReserveB_0;
    __compactRuntime.assert(k_after_0 >= k_before_0,
                            'Constant product invariant violated');
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(0n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_0.toValue(inputAmount_0),
                                              alignment: _descriptor_0.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(1n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { subi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_0.toValue(outputAmount_0),
                                              alignment: _descriptor_0.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _swapBforA_0(context,
               partialProofData,
               inputAmount_0,
               outputAmount_0,
               minOutput_0)
  {
    const reserveA_0 = _descriptor_1.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_5.toValue(0n),
                                                                                           alignment: _descriptor_5.alignment() } }] } },
                                                                { popeq: { cached: true,
                                                                           result: undefined } }]).value);
    const reserveB_0 = _descriptor_1.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_5.toValue(1n),
                                                                                           alignment: _descriptor_5.alignment() } }] } },
                                                                { popeq: { cached: true,
                                                                           result: undefined } }]).value);
    __compactRuntime.assert(outputAmount_0 >= minOutput_0, 'Slippage too high');
    const k_before_0 = reserveA_0 * reserveB_0;
    let t_0;
    const newReserveA_0 = (t_0 = outputAmount_0,
                           (__compactRuntime.assert(!(reserveA_0 < t_0),
                                                    'result of subtraction would be negative'),
                            reserveA_0 - t_0));
    const newReserveB_0 = reserveB_0 + inputAmount_0;
    const k_after_0 = newReserveA_0 * newReserveB_0;
    __compactRuntime.assert(k_after_0 >= k_before_0,
                            'Constant product invariant violated');
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(1n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_0.toValue(inputAmount_0),
                                              alignment: _descriptor_0.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(0n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { subi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_0.toValue(outputAmount_0),
                                              alignment: _descriptor_0.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _equal_0(x0, y0) {
    if (x0 !== y0) { return false; }
    return true;
  }
  _equal_1(x0, y0) {
    if (x0 !== y0) { return false; }
    return true;
  }
  _equal_2(x0, y0) {
    if (x0 !== y0) { return false; }
    return true;
  }
  static _query(context, partialProofData, prog) {
    var res;
    try {
      res = context.transactionContext.query(prog, __compactRuntime.CostModel.dummyCostModel());
    } catch (err) {
      throw new __compactRuntime.CompactError(err.toString());
    }
    context.transactionContext = res.context;
    var reads = res.events.filter((e) => e.tag === 'read');
    var i = 0;
    partialProofData.publicTranscript = partialProofData.publicTranscript.concat(prog.map((op) => {
      if(typeof(op) === 'object' && 'popeq' in op) {
        return { popeq: {
          ...op.popeq,
          result: reads[i++].content,
        } };
      } else {
        return op;
      }
    }));
    if(res.events.length == 1 && res.events[0].tag === 'read') {
      return res.events[0].content;
    } else {
      return res.events;
    }
  }
}
function ledger(state) {
  const context = {
    originalState: state,
    transactionContext: new __compactRuntime.QueryContext(state, __compactRuntime.dummyContractAddress())
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    get poolA_reserve() {
      return _descriptor_1.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_5.toValue(0n),
                                                                                 alignment: _descriptor_5.alignment() } }] } },
                                                      { popeq: { cached: true,
                                                                 result: undefined } }]).value);
    },
    get poolB_reserve() {
      return _descriptor_1.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_5.toValue(1n),
                                                                                 alignment: _descriptor_5.alignment() } }] } },
                                                      { popeq: { cached: true,
                                                                 result: undefined } }]).value);
    },
    get lp_totalSupply() {
      return _descriptor_1.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_5.toValue(2n),
                                                                                 alignment: _descriptor_5.alignment() } }] } },
                                                      { popeq: { cached: true,
                                                                 result: undefined } }]).value);
    }
  };
}
const _emptyContext = {
  originalState: new __compactRuntime.ContractState(),
  transactionContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({ });
const pureCircuits = {};
const contractReferenceLocations = { tag: 'publicLedgerArray', indices: { } };
exports.Contract = Contract;
exports.ledger = ledger;
exports.pureCircuits = pureCircuits;
exports.contractReferenceLocations = contractReferenceLocations;
//# sourceMappingURL=index.cjs.map
