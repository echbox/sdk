/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ICreditFilterInterface extends ethers.utils.Interface {
  functions: {
    "allowContract(address,address)": FunctionFragment;
    "allowToken(address,uint256)": FunctionFragment;
    "allowedContracts(uint256)": FunctionFragment;
    "allowedContractsCount()": FunctionFragment;
    "allowedTokens(uint256)": FunctionFragment;
    "allowedTokensCount()": FunctionFragment;
    "calcCreditAccountAccruedInterest(address)": FunctionFragment;
    "calcCreditAccountHealthFactor(address)": FunctionFragment;
    "calcThresholdWeightedValue(address)": FunctionFragment;
    "calcTotalValue(address)": FunctionFragment;
    "checkAndEnableToken(address,address)": FunctionFragment;
    "checkCollateralChange(address,address,address,uint256,uint256)": FunctionFragment;
    "connectCreditManager(address)": FunctionFragment;
    "contractToAdapter(address)": FunctionFragment;
    "enabledTokens(address)": FunctionFragment;
    "getCreditAccountTokenById(address,uint256)": FunctionFragment;
    "initEnabledTokens(address)": FunctionFragment;
    "isTokenAllowed(address)": FunctionFragment;
    "revertIfAdapterNotAllowed(address)": FunctionFragment;
    "revertIfTokenNotAllowed(address)": FunctionFragment;
    "underlyingToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowContract",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "allowToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedContracts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedContractsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowedTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedTokensCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calcCreditAccountAccruedInterest",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "calcCreditAccountHealthFactor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "calcThresholdWeightedValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "calcTotalValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "checkAndEnableToken",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "checkCollateralChange",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "connectCreditManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "contractToAdapter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "enabledTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreditAccountTokenById",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initEnabledTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTokenAllowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "revertIfAdapterNotAllowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "revertIfTokenNotAllowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "allowContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowedContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedContractsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedTokensCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcCreditAccountAccruedInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcCreditAccountHealthFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcThresholdWeightedValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcTotalValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkAndEnableToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkCollateralChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "connectCreditManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractToAdapter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enabledTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreditAccountTokenById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initEnabledTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTokenAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revertIfAdapterNotAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revertIfTokenNotAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;

  events: {
    "ContractAllowed(address,address)": EventFragment;
    "NewFastCheckParameters(uint256,uint256)": EventFragment;
    "TokenAllowed(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractAllowed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewFastCheckParameters"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenAllowed"): EventFragment;
}

export class ICreditFilter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ICreditFilterInterface;

  functions: {
    allowContract(
      allowedContract: string,
      adapter: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "allowContract(address,address)"(
      allowedContract: string,
      adapter: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    allowToken(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "allowToken(address,uint256)"(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    allowedContracts(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "allowedContracts(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allowedContractsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "allowedContractsCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    allowedTokens(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "allowedTokens(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allowedTokensCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "allowedTokensCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    calcCreditAccountAccruedInterest(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "calcCreditAccountAccruedInterest(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calcCreditAccountHealthFactor(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "calcCreditAccountHealthFactor(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calcThresholdWeightedValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { total: BigNumber }>;

    "calcThresholdWeightedValue(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { total: BigNumber }>;

    calcTotalValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { total: BigNumber }>;

    "calcTotalValue(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { total: BigNumber }>;

    checkAndEnableToken(
      creditAccount: string,
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "checkAndEnableToken(address,address)"(
      creditAccount: string,
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    checkCollateralChange(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "checkCollateralChange(address,address,address,uint256,uint256)"(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    connectCreditManager(
      poolService: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "connectCreditManager(address)"(
      poolService: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    contractToAdapter(
      allowedContract: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "contractToAdapter(address)"(
      allowedContract: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    enabledTokens(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "enabledTokens(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCreditAccountTokenById(
      creditAccount: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        token: string;
        balance: BigNumber;
        tv: BigNumber;
        twv: BigNumber;
      }
    >;

    "getCreditAccountTokenById(address,uint256)"(
      creditAccount: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        token: string;
        balance: BigNumber;
        tv: BigNumber;
        twv: BigNumber;
      }
    >;

    initEnabledTokens(
      creditAccount: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initEnabledTokens(address)"(
      creditAccount: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isTokenAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isTokenAllowed(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    revertIfAdapterNotAllowed(
      adapter: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "revertIfAdapterNotAllowed(address)"(
      adapter: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    revertIfTokenNotAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "revertIfTokenNotAllowed(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;

    "underlyingToken()"(overrides?: CallOverrides): Promise<[string]>;
  };

  allowContract(
    allowedContract: string,
    adapter: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "allowContract(address,address)"(
    allowedContract: string,
    adapter: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  allowToken(
    token: string,
    liquidationThreshold: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "allowToken(address,uint256)"(
    token: string,
    liquidationThreshold: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  allowedContracts(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "allowedContracts(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

  "allowedContractsCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  allowedTokens(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "allowedTokens(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  allowedTokensCount(overrides?: CallOverrides): Promise<BigNumber>;

  "allowedTokensCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  calcCreditAccountAccruedInterest(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calcCreditAccountAccruedInterest(address)"(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calcCreditAccountHealthFactor(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calcCreditAccountHealthFactor(address)"(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calcThresholdWeightedValue(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calcThresholdWeightedValue(address)"(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calcTotalValue(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calcTotalValue(address)"(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  checkAndEnableToken(
    creditAccount: string,
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "checkAndEnableToken(address,address)"(
    creditAccount: string,
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  checkCollateralChange(
    creditAccount: string,
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumberish,
    amountOut: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "checkCollateralChange(address,address,address,uint256,uint256)"(
    creditAccount: string,
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumberish,
    amountOut: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  connectCreditManager(
    poolService: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "connectCreditManager(address)"(
    poolService: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  contractToAdapter(
    allowedContract: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "contractToAdapter(address)"(
    allowedContract: string,
    overrides?: CallOverrides
  ): Promise<string>;

  enabledTokens(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "enabledTokens(address)"(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCreditAccountTokenById(
    creditAccount: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      token: string;
      balance: BigNumber;
      tv: BigNumber;
      twv: BigNumber;
    }
  >;

  "getCreditAccountTokenById(address,uint256)"(
    creditAccount: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      token: string;
      balance: BigNumber;
      tv: BigNumber;
      twv: BigNumber;
    }
  >;

  initEnabledTokens(
    creditAccount: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initEnabledTokens(address)"(
    creditAccount: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isTokenAllowed(token: string, overrides?: CallOverrides): Promise<boolean>;

  "isTokenAllowed(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  revertIfAdapterNotAllowed(
    adapter: string,
    overrides?: CallOverrides
  ): Promise<void>;

  "revertIfAdapterNotAllowed(address)"(
    adapter: string,
    overrides?: CallOverrides
  ): Promise<void>;

  revertIfTokenNotAllowed(
    token: string,
    overrides?: CallOverrides
  ): Promise<void>;

  "revertIfTokenNotAllowed(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<void>;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  "underlyingToken()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    allowContract(
      allowedContract: string,
      adapter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "allowContract(address,address)"(
      allowedContract: string,
      adapter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    allowToken(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "allowToken(address,uint256)"(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    allowedContracts(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "allowedContracts(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

    "allowedContractsCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowedTokens(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "allowedTokens(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allowedTokensCount(overrides?: CallOverrides): Promise<BigNumber>;

    "allowedTokensCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    calcCreditAccountAccruedInterest(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcCreditAccountAccruedInterest(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcCreditAccountHealthFactor(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcCreditAccountHealthFactor(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcThresholdWeightedValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcThresholdWeightedValue(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcTotalValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcTotalValue(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkAndEnableToken(
      creditAccount: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkAndEnableToken(address,address)"(
      creditAccount: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    checkCollateralChange(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkCollateralChange(address,address,address,uint256,uint256)"(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    connectCreditManager(
      poolService: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "connectCreditManager(address)"(
      poolService: string,
      overrides?: CallOverrides
    ): Promise<void>;

    contractToAdapter(
      allowedContract: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "contractToAdapter(address)"(
      allowedContract: string,
      overrides?: CallOverrides
    ): Promise<string>;

    enabledTokens(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "enabledTokens(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCreditAccountTokenById(
      creditAccount: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        token: string;
        balance: BigNumber;
        tv: BigNumber;
        twv: BigNumber;
      }
    >;

    "getCreditAccountTokenById(address,uint256)"(
      creditAccount: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        token: string;
        balance: BigNumber;
        tv: BigNumber;
        twv: BigNumber;
      }
    >;

    initEnabledTokens(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initEnabledTokens(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isTokenAllowed(token: string, overrides?: CallOverrides): Promise<boolean>;

    "isTokenAllowed(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    revertIfAdapterNotAllowed(
      adapter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "revertIfAdapterNotAllowed(address)"(
      adapter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revertIfTokenNotAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "revertIfTokenNotAllowed(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    underlyingToken(overrides?: CallOverrides): Promise<string>;

    "underlyingToken()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    ContractAllowed(
      protocol: string | null,
      adapter: string | null
    ): EventFilter;

    NewFastCheckParameters(
      chiThreshold: null,
      fastCheckDelay: null
    ): EventFilter;

    TokenAllowed(token: string | null, liquidityThreshold: null): EventFilter;
  };

  estimateGas: {
    allowContract(
      allowedContract: string,
      adapter: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "allowContract(address,address)"(
      allowedContract: string,
      adapter: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    allowToken(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "allowToken(address,uint256)"(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    allowedContracts(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowedContracts(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

    "allowedContractsCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowedTokens(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowedTokens(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedTokensCount(overrides?: CallOverrides): Promise<BigNumber>;

    "allowedTokensCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    calcCreditAccountAccruedInterest(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcCreditAccountAccruedInterest(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcCreditAccountHealthFactor(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcCreditAccountHealthFactor(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcThresholdWeightedValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcThresholdWeightedValue(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcTotalValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcTotalValue(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkAndEnableToken(
      creditAccount: string,
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "checkAndEnableToken(address,address)"(
      creditAccount: string,
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    checkCollateralChange(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "checkCollateralChange(address,address,address,uint256,uint256)"(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    connectCreditManager(
      poolService: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "connectCreditManager(address)"(
      poolService: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    contractToAdapter(
      allowedContract: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "contractToAdapter(address)"(
      allowedContract: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    enabledTokens(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "enabledTokens(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCreditAccountTokenById(
      creditAccount: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCreditAccountTokenById(address,uint256)"(
      creditAccount: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initEnabledTokens(
      creditAccount: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initEnabledTokens(address)"(
      creditAccount: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isTokenAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isTokenAllowed(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revertIfAdapterNotAllowed(
      adapter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "revertIfAdapterNotAllowed(address)"(
      adapter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revertIfTokenNotAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "revertIfTokenNotAllowed(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;

    "underlyingToken()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    allowContract(
      allowedContract: string,
      adapter: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "allowContract(address,address)"(
      allowedContract: string,
      adapter: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    allowToken(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "allowToken(address,uint256)"(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    allowedContracts(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowedContracts(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedContractsCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowedContractsCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedTokens(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowedTokens(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedTokensCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowedTokensCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcCreditAccountAccruedInterest(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calcCreditAccountAccruedInterest(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcCreditAccountHealthFactor(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calcCreditAccountHealthFactor(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcThresholdWeightedValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calcThresholdWeightedValue(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcTotalValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calcTotalValue(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkAndEnableToken(
      creditAccount: string,
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "checkAndEnableToken(address,address)"(
      creditAccount: string,
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    checkCollateralChange(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "checkCollateralChange(address,address,address,uint256,uint256)"(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    connectCreditManager(
      poolService: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "connectCreditManager(address)"(
      poolService: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    contractToAdapter(
      allowedContract: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "contractToAdapter(address)"(
      allowedContract: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    enabledTokens(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "enabledTokens(address)"(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCreditAccountTokenById(
      creditAccount: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCreditAccountTokenById(address,uint256)"(
      creditAccount: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initEnabledTokens(
      creditAccount: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initEnabledTokens(address)"(
      creditAccount: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isTokenAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isTokenAllowed(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    revertIfAdapterNotAllowed(
      adapter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "revertIfAdapterNotAllowed(address)"(
      adapter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    revertIfTokenNotAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "revertIfTokenNotAllowed(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "underlyingToken()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}