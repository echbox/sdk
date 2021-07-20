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

interface ICreditManagerInterface extends ethers.utils.Interface {
  functions: {
    "addCollateral(address,address,uint256)": FunctionFragment;
    "calcRepayAmount(address,bool)": FunctionFragment;
    "closeCreditAccount(address,uint256)": FunctionFragment;
    "creditAccounts(address)": FunctionFragment;
    "creditFilter()": FunctionFragment;
    "executeOrder(address,address,bytes)": FunctionFragment;
    "getCreditAccountOrRevert(address)": FunctionFragment;
    "hasOpenedCreditAccount(address)": FunctionFragment;
    "increaseBorrowedAmount(uint256)": FunctionFragment;
    "liquidateCreditAccount(address,address)": FunctionFragment;
    "maxAmount()": FunctionFragment;
    "maxLeverageFactor()": FunctionFragment;
    "minAmount()": FunctionFragment;
    "openCreditAccount(uint256,address,uint256,uint256)": FunctionFragment;
    "poolService()": FunctionFragment;
    "provideCreditAccountAllowance(address,address,address)": FunctionFragment;
    "repayCreditAccount(address)": FunctionFragment;
    "repayCreditAccountETH(address,address)": FunctionFragment;
    "setLimits(uint256,uint256)": FunctionFragment;
    "underlyingToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addCollateral",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calcRepayAmount",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "closeCreditAccount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "creditAccounts",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "creditFilter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeOrder",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreditAccountOrRevert",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasOpenedCreditAccount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseBorrowedAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidateCreditAccount",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "maxAmount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxLeverageFactor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "minAmount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "openCreditAccount",
    values: [BigNumberish, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolService",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "provideCreditAccountAllowance",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "repayCreditAccount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "repayCreditAccountETH",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setLimits",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcRepayAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditFilter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreditAccountOrRevert",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasOpenedCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseBorrowedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidateCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxAmount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxLeverageFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minAmount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolService",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "provideCreditAccountAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayCreditAccountETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setLimits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;

  events: {
    "AddCollateral(address,address,uint256)": EventFragment;
    "CloseCreditAccount(address,address,uint256)": EventFragment;
    "ExecuteOrder(address,address)": EventFragment;
    "IncreaseBorrowedAmount(address,uint256)": EventFragment;
    "LiquidateCreditAccount(address,address,uint256)": EventFragment;
    "NewFees(uint256,uint256,uint256,uint256)": EventFragment;
    "NewLimits(uint256,uint256)": EventFragment;
    "OpenCreditAccount(address,address,address,uint256,uint256,uint256)": EventFragment;
    "RepayCreditAccount(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddCollateral"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CloseCreditAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteOrder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IncreaseBorrowedAmount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidateCreditAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewFees"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewLimits"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OpenCreditAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RepayCreditAccount"): EventFragment;
}

export class ICreditManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ICreditManagerInterface;

  functions: {
    addCollateral(
      onBehalfOf: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addCollateral(address,address,uint256)"(
      onBehalfOf: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    calcRepayAmount(
      borrower: string,
      isLiquidated: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "calcRepayAmount(address,bool)"(
      borrower: string,
      isLiquidated: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    closeCreditAccount(
      to: string,
      amountOutTolerance: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "closeCreditAccount(address,uint256)"(
      to: string,
      amountOutTolerance: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    creditAccounts(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "creditAccounts(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    creditFilter(overrides?: CallOverrides): Promise<[string]>;

    "creditFilter()"(overrides?: CallOverrides): Promise<[string]>;

    executeOrder(
      borrower: string,
      target: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "executeOrder(address,address,bytes)"(
      borrower: string,
      target: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getCreditAccountOrRevert(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getCreditAccountOrRevert(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hasOpenedCreditAccount(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "hasOpenedCreditAccount(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    increaseBorrowedAmount(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "increaseBorrowedAmount(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    liquidateCreditAccount(
      borrower: string,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "liquidateCreditAccount(address,address)"(
      borrower: string,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    maxAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxAmount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxLeverageFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxLeverageFactor()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    minAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "minAmount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    openCreditAccount(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "openCreditAccount(uint256,address,uint256,uint256)"(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    poolService(overrides?: CallOverrides): Promise<[string]>;

    "poolService()"(overrides?: CallOverrides): Promise<[string]>;

    provideCreditAccountAllowance(
      creditAccount: string,
      toContract: string,
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "provideCreditAccountAllowance(address,address,address)"(
      creditAccount: string,
      toContract: string,
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    repayCreditAccount(
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "repayCreditAccount(address)"(
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    repayCreditAccountETH(
      borrower: string,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "repayCreditAccountETH(address,address)"(
      borrower: string,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setLimits(
      _minAmount: BigNumberish,
      _maxAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLimits(uint256,uint256)"(
      _minAmount: BigNumberish,
      _maxAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;

    "underlyingToken()"(overrides?: CallOverrides): Promise<[string]>;
  };

  addCollateral(
    onBehalfOf: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addCollateral(address,address,uint256)"(
    onBehalfOf: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  calcRepayAmount(
    borrower: string,
    isLiquidated: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calcRepayAmount(address,bool)"(
    borrower: string,
    isLiquidated: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  closeCreditAccount(
    to: string,
    amountOutTolerance: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "closeCreditAccount(address,uint256)"(
    to: string,
    amountOutTolerance: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  creditAccounts(borrower: string, overrides?: CallOverrides): Promise<string>;

  "creditAccounts(address)"(
    borrower: string,
    overrides?: CallOverrides
  ): Promise<string>;

  creditFilter(overrides?: CallOverrides): Promise<string>;

  "creditFilter()"(overrides?: CallOverrides): Promise<string>;

  executeOrder(
    borrower: string,
    target: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "executeOrder(address,address,bytes)"(
    borrower: string,
    target: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getCreditAccountOrRevert(
    borrower: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getCreditAccountOrRevert(address)"(
    borrower: string,
    overrides?: CallOverrides
  ): Promise<string>;

  hasOpenedCreditAccount(
    borrower: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasOpenedCreditAccount(address)"(
    borrower: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  increaseBorrowedAmount(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "increaseBorrowedAmount(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  liquidateCreditAccount(
    borrower: string,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "liquidateCreditAccount(address,address)"(
    borrower: string,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  maxAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "maxAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  maxLeverageFactor(overrides?: CallOverrides): Promise<BigNumber>;

  "maxLeverageFactor()"(overrides?: CallOverrides): Promise<BigNumber>;

  minAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "minAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  openCreditAccount(
    amount: BigNumberish,
    onBehalfOf: string,
    leverageFactor: BigNumberish,
    referralCode: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "openCreditAccount(uint256,address,uint256,uint256)"(
    amount: BigNumberish,
    onBehalfOf: string,
    leverageFactor: BigNumberish,
    referralCode: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  poolService(overrides?: CallOverrides): Promise<string>;

  "poolService()"(overrides?: CallOverrides): Promise<string>;

  provideCreditAccountAllowance(
    creditAccount: string,
    toContract: string,
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "provideCreditAccountAllowance(address,address,address)"(
    creditAccount: string,
    toContract: string,
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  repayCreditAccount(
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "repayCreditAccount(address)"(
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  repayCreditAccountETH(
    borrower: string,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "repayCreditAccountETH(address,address)"(
    borrower: string,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setLimits(
    _minAmount: BigNumberish,
    _maxAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLimits(uint256,uint256)"(
    _minAmount: BigNumberish,
    _maxAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  "underlyingToken()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addCollateral(
      onBehalfOf: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addCollateral(address,address,uint256)"(
      onBehalfOf: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    calcRepayAmount(
      borrower: string,
      isLiquidated: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcRepayAmount(address,bool)"(
      borrower: string,
      isLiquidated: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closeCreditAccount(
      to: string,
      amountOutTolerance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "closeCreditAccount(address,uint256)"(
      to: string,
      amountOutTolerance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    creditAccounts(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "creditAccounts(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<string>;

    creditFilter(overrides?: CallOverrides): Promise<string>;

    "creditFilter()"(overrides?: CallOverrides): Promise<string>;

    executeOrder(
      borrower: string,
      target: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "executeOrder(address,address,bytes)"(
      borrower: string,
      target: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getCreditAccountOrRevert(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getCreditAccountOrRevert(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<string>;

    hasOpenedCreditAccount(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasOpenedCreditAccount(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    increaseBorrowedAmount(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "increaseBorrowedAmount(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidateCreditAccount(
      borrower: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "liquidateCreditAccount(address,address)"(
      borrower: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    maxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "maxAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxLeverageFactor(overrides?: CallOverrides): Promise<BigNumber>;

    "maxLeverageFactor()"(overrides?: CallOverrides): Promise<BigNumber>;

    minAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "minAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    openCreditAccount(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "openCreditAccount(uint256,address,uint256,uint256)"(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    poolService(overrides?: CallOverrides): Promise<string>;

    "poolService()"(overrides?: CallOverrides): Promise<string>;

    provideCreditAccountAllowance(
      creditAccount: string,
      toContract: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "provideCreditAccountAllowance(address,address,address)"(
      creditAccount: string,
      toContract: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    repayCreditAccount(to: string, overrides?: CallOverrides): Promise<void>;

    "repayCreditAccount(address)"(
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    repayCreditAccountETH(
      borrower: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "repayCreditAccountETH(address,address)"(
      borrower: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setLimits(
      _minAmount: BigNumberish,
      _maxAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setLimits(uint256,uint256)"(
      _minAmount: BigNumberish,
      _maxAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    underlyingToken(overrides?: CallOverrides): Promise<string>;

    "underlyingToken()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    AddCollateral(
      onBehalfOf: string | null,
      token: string | null,
      value: null
    ): EventFilter;

    CloseCreditAccount(
      owner: string | null,
      to: string | null,
      remainingFunds: null
    ): EventFilter;

    ExecuteOrder(borrower: string | null, target: string | null): EventFilter;

    IncreaseBorrowedAmount(borrower: string | null, amount: null): EventFilter;

    LiquidateCreditAccount(
      owner: string | null,
      liquidator: string | null,
      remainingFunds: null
    ): EventFilter;

    NewFees(
      feeSuccess: null,
      feeInterest: null,
      feeLiquidation: null,
      liquidationDiscount: null
    ): EventFilter;

    NewLimits(minAmount: null, maxAmount: null): EventFilter;

    OpenCreditAccount(
      sender: string | null,
      onBehalfOf: string | null,
      creditAccount: string | null,
      amount: null,
      borrowAmount: null,
      referralCode: null
    ): EventFilter;

    RepayCreditAccount(owner: string | null, to: string | null): EventFilter;
  };

  estimateGas: {
    addCollateral(
      onBehalfOf: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addCollateral(address,address,uint256)"(
      onBehalfOf: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    calcRepayAmount(
      borrower: string,
      isLiquidated: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcRepayAmount(address,bool)"(
      borrower: string,
      isLiquidated: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closeCreditAccount(
      to: string,
      amountOutTolerance: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "closeCreditAccount(address,uint256)"(
      to: string,
      amountOutTolerance: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    creditAccounts(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "creditAccounts(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creditFilter(overrides?: CallOverrides): Promise<BigNumber>;

    "creditFilter()"(overrides?: CallOverrides): Promise<BigNumber>;

    executeOrder(
      borrower: string,
      target: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "executeOrder(address,address,bytes)"(
      borrower: string,
      target: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getCreditAccountOrRevert(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCreditAccountOrRevert(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasOpenedCreditAccount(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasOpenedCreditAccount(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseBorrowedAmount(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "increaseBorrowedAmount(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    liquidateCreditAccount(
      borrower: string,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "liquidateCreditAccount(address,address)"(
      borrower: string,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    maxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "maxAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxLeverageFactor(overrides?: CallOverrides): Promise<BigNumber>;

    "maxLeverageFactor()"(overrides?: CallOverrides): Promise<BigNumber>;

    minAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "minAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    openCreditAccount(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "openCreditAccount(uint256,address,uint256,uint256)"(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    poolService(overrides?: CallOverrides): Promise<BigNumber>;

    "poolService()"(overrides?: CallOverrides): Promise<BigNumber>;

    provideCreditAccountAllowance(
      creditAccount: string,
      toContract: string,
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "provideCreditAccountAllowance(address,address,address)"(
      creditAccount: string,
      toContract: string,
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    repayCreditAccount(to: string, overrides?: Overrides): Promise<BigNumber>;

    "repayCreditAccount(address)"(
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    repayCreditAccountETH(
      borrower: string,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "repayCreditAccountETH(address,address)"(
      borrower: string,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setLimits(
      _minAmount: BigNumberish,
      _maxAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setLimits(uint256,uint256)"(
      _minAmount: BigNumberish,
      _maxAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;

    "underlyingToken()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addCollateral(
      onBehalfOf: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addCollateral(address,address,uint256)"(
      onBehalfOf: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    calcRepayAmount(
      borrower: string,
      isLiquidated: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calcRepayAmount(address,bool)"(
      borrower: string,
      isLiquidated: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closeCreditAccount(
      to: string,
      amountOutTolerance: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "closeCreditAccount(address,uint256)"(
      to: string,
      amountOutTolerance: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    creditAccounts(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "creditAccounts(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditFilter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "creditFilter()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeOrder(
      borrower: string,
      target: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "executeOrder(address,address,bytes)"(
      borrower: string,
      target: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getCreditAccountOrRevert(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCreditAccountOrRevert(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasOpenedCreditAccount(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasOpenedCreditAccount(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseBorrowedAmount(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "increaseBorrowedAmount(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    liquidateCreditAccount(
      borrower: string,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "liquidateCreditAccount(address,address)"(
      borrower: string,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    maxAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxAmount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxLeverageFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxLeverageFactor()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minAmount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    openCreditAccount(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "openCreditAccount(uint256,address,uint256,uint256)"(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    poolService(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "poolService()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    provideCreditAccountAllowance(
      creditAccount: string,
      toContract: string,
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "provideCreditAccountAllowance(address,address,address)"(
      creditAccount: string,
      toContract: string,
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    repayCreditAccount(
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "repayCreditAccount(address)"(
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    repayCreditAccountETH(
      borrower: string,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "repayCreditAccountETH(address,address)"(
      borrower: string,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setLimits(
      _minAmount: BigNumberish,
      _maxAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLimits(uint256,uint256)"(
      _minAmount: BigNumberish,
      _maxAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "underlyingToken()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}