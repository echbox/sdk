import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IPriceOracleV2Interface extends utils.Interface {
    functions: {
        "convert(address,uint256,address,address)": FunctionFragment;
        "convertFromUSD(address,uint256,address)": FunctionFragment;
        "convertToUSD(address,uint256,address)": FunctionFragment;
        "fastCheck(uint256,address,uint256,address)": FunctionFragment;
        "getPrice(address,address)": FunctionFragment;
        "priceFeeds(address)": FunctionFragment;
        "priceFeedsWithFlags(address)": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "convert" | "convertFromUSD" | "convertToUSD" | "fastCheck" | "getPrice" | "priceFeeds" | "priceFeedsWithFlags" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "convert", values: [string, BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "convertFromUSD", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "convertToUSD", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "fastCheck", values: [BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getPrice", values: [string, string]): string;
    encodeFunctionData(functionFragment: "priceFeeds", values: [string]): string;
    encodeFunctionData(functionFragment: "priceFeedsWithFlags", values: [string]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "convert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertFromUSD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToUSD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fastCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceFeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceFeedsWithFlags", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {
        "NewPriceFeed(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewPriceFeed"): EventFragment;
}
export interface NewPriceFeedEventObject {
    token: string;
    priceFeed: string;
}
export declare type NewPriceFeedEvent = TypedEvent<[
    string,
    string
], NewPriceFeedEventObject>;
export declare type NewPriceFeedEventFilter = TypedEventFilter<NewPriceFeedEvent>;
export interface IPriceOracleV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPriceOracleV2Interface;
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
        convert(creditAccount: string, amount: BigNumberish, tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        convertFromUSD(creditAccount: string, amount: BigNumberish, token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        convertToUSD(creditAccount: string, amount: BigNumberish, token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        fastCheck(amountFrom: BigNumberish, tokenFrom: string, amountTo: BigNumberish, tokenTo: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            collateralFrom: BigNumber;
            collateralTo: BigNumber;
        }>;
        getPrice(creditAccount: string, token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        priceFeeds(token: string, overrides?: CallOverrides): Promise<[string] & {
            priceFeed: string;
        }>;
        priceFeedsWithFlags(token: string, overrides?: CallOverrides): Promise<[
            string,
            boolean,
            boolean
        ] & {
            priceFeed: string;
            dependsOnAddress: boolean;
            skipCheck: boolean;
        }>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    convert(creditAccount: string, amount: BigNumberish, tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<BigNumber>;
    convertFromUSD(creditAccount: string, amount: BigNumberish, token: string, overrides?: CallOverrides): Promise<BigNumber>;
    convertToUSD(creditAccount: string, amount: BigNumberish, token: string, overrides?: CallOverrides): Promise<BigNumber>;
    fastCheck(amountFrom: BigNumberish, tokenFrom: string, amountTo: BigNumberish, tokenTo: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        collateralFrom: BigNumber;
        collateralTo: BigNumber;
    }>;
    getPrice(creditAccount: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
    priceFeeds(token: string, overrides?: CallOverrides): Promise<string>;
    priceFeedsWithFlags(token: string, overrides?: CallOverrides): Promise<[
        string,
        boolean,
        boolean
    ] & {
        priceFeed: string;
        dependsOnAddress: boolean;
        skipCheck: boolean;
    }>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        convert(creditAccount: string, amount: BigNumberish, tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<BigNumber>;
        convertFromUSD(creditAccount: string, amount: BigNumberish, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        convertToUSD(creditAccount: string, amount: BigNumberish, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        fastCheck(amountFrom: BigNumberish, tokenFrom: string, amountTo: BigNumberish, tokenTo: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            collateralFrom: BigNumber;
            collateralTo: BigNumber;
        }>;
        getPrice(creditAccount: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        priceFeeds(token: string, overrides?: CallOverrides): Promise<string>;
        priceFeedsWithFlags(token: string, overrides?: CallOverrides): Promise<[
            string,
            boolean,
            boolean
        ] & {
            priceFeed: string;
            dependsOnAddress: boolean;
            skipCheck: boolean;
        }>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "NewPriceFeed(address,address)"(token?: string | null, priceFeed?: string | null): NewPriceFeedEventFilter;
        NewPriceFeed(token?: string | null, priceFeed?: string | null): NewPriceFeedEventFilter;
    };
    estimateGas: {
        convert(creditAccount: string, amount: BigNumberish, tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<BigNumber>;
        convertFromUSD(creditAccount: string, amount: BigNumberish, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        convertToUSD(creditAccount: string, amount: BigNumberish, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        fastCheck(amountFrom: BigNumberish, tokenFrom: string, amountTo: BigNumberish, tokenTo: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPrice(creditAccount: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        priceFeeds(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        priceFeedsWithFlags(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        convert(creditAccount: string, amount: BigNumberish, tokenFrom: string, tokenTo: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertFromUSD(creditAccount: string, amount: BigNumberish, token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertToUSD(creditAccount: string, amount: BigNumberish, token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fastCheck(amountFrom: BigNumberish, tokenFrom: string, amountTo: BigNumberish, tokenTo: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrice(creditAccount: string, token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceFeeds(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceFeedsWithFlags(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}