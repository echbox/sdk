/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface WETHGatewayInterface extends utils.Interface {
  functions: {
    "addLiquidityETH(address,address,uint16)": FunctionFragment;
    "removeLiquidityETH(address,uint256,address)": FunctionFragment;
    "unwrapWETH(address,uint256)": FunctionFragment;
    "version()": FunctionFragment;
    "wethAddress()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addLiquidityETH"
      | "removeLiquidityETH"
      | "unwrapWETH"
      | "version"
      | "wethAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addLiquidityETH",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityETH",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapWETH",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wethAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidityETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unwrapWETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wethAddress",
    data: BytesLike
  ): Result;

  events: {
    "WithdrawETH(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "WithdrawETH"): EventFragment;
}

export interface WithdrawETHEventObject {
  pool: string;
  to: string;
}
export type WithdrawETHEvent = TypedEvent<
  [string, string],
  WithdrawETHEventObject
>;

export type WithdrawETHEventFilter = TypedEventFilter<WithdrawETHEvent>;

export interface WETHGateway extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WETHGatewayInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addLiquidityETH(
      pool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityETH(
      pool: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unwrapWETH(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;

    wethAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  addLiquidityETH(
    pool: string,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityETH(
    pool: string,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unwrapWETH(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  wethAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addLiquidityETH(
      pool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeLiquidityETH(
      pool: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unwrapWETH(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    wethAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "WithdrawETH(address,address)"(
      pool?: string | null,
      to?: string | null
    ): WithdrawETHEventFilter;
    WithdrawETH(
      pool?: string | null,
      to?: string | null
    ): WithdrawETHEventFilter;
  };

  estimateGas: {
    addLiquidityETH(
      pool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidityETH(
      pool: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unwrapWETH(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    wethAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidityETH(
      pool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityETH(
      pool: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unwrapWETH(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wethAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
