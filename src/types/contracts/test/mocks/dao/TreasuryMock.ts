/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";

export interface TreasuryMockInterface extends utils.Interface {
  functions: {};

  events: {
    "NewDonation(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewDonation"): EventFragment;
}

export interface NewDonationEventObject {
  amount: BigNumber;
}
export type NewDonationEvent = TypedEvent<[BigNumber], NewDonationEventObject>;

export type NewDonationEventFilter = TypedEventFilter<NewDonationEvent>;

export interface TreasuryMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TreasuryMockInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "NewDonation(uint256)"(amount?: null): NewDonationEventFilter;
    NewDonation(amount?: null): NewDonationEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
