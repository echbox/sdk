import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IPoolsInterface extends utils.Interface {
    functions: {
        "addPool(address,address,uint256)": FunctionFragment;
        "forceAddPool(address,address,uint256)": FunctionFragment;
        "gaugeMap(address)": FunctionFragment;
        "poolInfo(uint256)": FunctionFragment;
        "poolLength()": FunctionFragment;
        "setPoolManager(address)": FunctionFragment;
        "shutdownPool(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addPool" | "forceAddPool" | "gaugeMap" | "poolInfo" | "poolLength" | "setPoolManager" | "shutdownPool"): FunctionFragment;
    encodeFunctionData(functionFragment: "addPool", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "forceAddPool", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "gaugeMap", values: [string]): string;
    encodeFunctionData(functionFragment: "poolInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPoolManager", values: [string]): string;
    encodeFunctionData(functionFragment: "shutdownPool", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceAddPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaugeMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shutdownPool", data: BytesLike): Result;
    events: {};
}
export interface IPools extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPoolsInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addPool(_lptoken: string, _gauge: string, _stashVersion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        forceAddPool(_lptoken: string, _gauge: string, _stashVersion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gaugeMap(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string, string, string, string, boolean]>;
        poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        setPoolManager(_poolM: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        shutdownPool(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addPool(_lptoken: string, _gauge: string, _stashVersion: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    forceAddPool(_lptoken: string, _gauge: string, _stashVersion: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gaugeMap(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string, string, string, string, boolean]>;
    poolLength(overrides?: CallOverrides): Promise<BigNumber>;
    setPoolManager(_poolM: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    shutdownPool(_pid: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addPool(_lptoken: string, _gauge: string, _stashVersion: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        forceAddPool(_lptoken: string, _gauge: string, _stashVersion: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        gaugeMap(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string, string, string, string, boolean]>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        setPoolManager(_poolM: string, overrides?: CallOverrides): Promise<void>;
        shutdownPool(_pid: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        addPool(_lptoken: string, _gauge: string, _stashVersion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        forceAddPool(_lptoken: string, _gauge: string, _stashVersion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gaugeMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        setPoolManager(_poolM: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        shutdownPool(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addPool(_lptoken: string, _gauge: string, _stashVersion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        forceAddPool(_lptoken: string, _gauge: string, _stashVersion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gaugeMap(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPoolManager(_poolM: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        shutdownPool(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}