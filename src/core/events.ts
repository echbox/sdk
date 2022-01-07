import { TokenData } from "./token";
import { BigNumber } from "ethers";
import { formatBN } from "../utils/formatter";
import { LEVERAGE_DECIMALS } from "./constants";
import { EVMEvent } from "./eventOrTx";
import { getContractName } from "./contractsRegister";

// POOL EVENTS
export class EventAddLiquidity extends EVMEvent {
  public readonly amount: BigNumber;
  public readonly underlyingToken: string;
  public readonly pool: string;

  constructor(
    block: number,
    txHash: string,
    amount: BigNumber,
    underlyingToken: string,
    pool: string
  ) {
    super({ block, txHash });
    this.amount = amount;
    this.underlyingToken = underlyingToken;
    this.pool = pool;
  }

  toString(tokenData: Record<string, TokenData>): string {
    const token = tokenData[this.underlyingToken];
    return `${getContractName(this.pool)}: Deposit ${formatBN(
      this.amount,
      token?.decimals || 18
    )} ${token?.symbol || ""}`;
  }
}

export class EventRemoveLiquidity extends EVMEvent {
  public readonly amount: BigNumber;
  public readonly underlyingToken: string;
  public readonly dieselToken: string;
  public readonly pool: string;

  constructor(
    block: number,
    txHash: string,
    amount: BigNumber,
    underlyingToken: string,
    dieselToken: string,
    pool: string
  ) {
    super({ block, txHash });
    this.amount = amount;
    this.underlyingToken = underlyingToken;
    this.dieselToken = dieselToken;
    this.pool = pool;
  }

  toString(tokenData: Record<string, TokenData>): string {
    const dtoken = tokenData[this.dieselToken];
    return `${getContractName(this.pool)}: Withdraw ${formatBN(
      this.amount,
      dtoken?.decimals || 18
    )} ${dtoken?.symbol || ""}`;
  }
}

// CREDIT MANAGER EVENTS

export class EventOpenCreditAccount extends EVMEvent {
  public readonly amount: BigNumber;
  public readonly underlyingToken: string;
  public readonly leverage: number;
  public readonly creditManager: string;

  constructor(
    block: number,
    txHash: string,
    amount: BigNumber,
    underlyingToken: string,
    leverage: number,
    creditManager: string
  ) {
    super({ block, txHash });
    this.amount = amount;
    this.underlyingToken = underlyingToken;
    this.leverage = leverage;
    this.creditManager = creditManager;
  }

  toString(tokenData: Record<string, TokenData>): string {
    const token = tokenData[this.underlyingToken];
    return `${getContractName(this.creditManager)}: Open account ${formatBN(
      this.amount,
      token?.decimals || 18
    )} ${token?.symbol} x${this.leverage.toFixed(2)} ⇒ 
    ${formatBN(
      this.amount
        .mul(Math.floor(this.leverage * LEVERAGE_DECIMALS))
        .div(LEVERAGE_DECIMALS),
      token?.decimals || 18
    )} ${token?.symbol}`;
  }
}

export class EventCloseCreditAccount extends EVMEvent {
  public readonly amount: BigNumber;
  public readonly underlyingToken: string;
  public readonly creditManager: string;

  constructor(
    block: number,
    txHash: string,
    amount: BigNumber,
    underlyingToken: string,
    creditManager: string
  ) {
    super({ block, txHash });
    this.amount = amount;
    this.underlyingToken = underlyingToken;
    this.creditManager = creditManager;
  }

  toString(tokenData: Record<string, TokenData>): string {
    const token = tokenData[this.underlyingToken];
    return `${getContractName(this.creditManager)}: Close ${
      token?.symbol
    } credit account and got ${formatBN(this.amount, token?.decimals || 18)} ${
      token?.symbol
    } as remaining funds`;
  }
}

export class EventLiquidateCreditAccount extends EVMEvent {
  public readonly amount: BigNumber;
  public readonly underlyingToken: string;
  public readonly creditManager: string;

  constructor(
    block: number,
    txHash: string,
    amount: BigNumber,
    underlyingToken: string,
    creditManager: string
  ) {
    super({ block, txHash });
    this.amount = amount;
    this.underlyingToken = underlyingToken;
    this.creditManager = creditManager;
  }

  toString(tokenData: Record<string, TokenData>): string {
    const token = tokenData[this.underlyingToken];
    return `${getContractName(
      this.creditManager
    )}: Your credit account was liquidated. ${formatBN(
      this.amount,
      token?.decimals || 18
    )} ${token?.symbol} were paid back as remaining funds`;
  }
}

export class EventRepayCreditAccount extends EVMEvent {
  public readonly underlyingToken: string;
  public readonly creditManager: string;

  constructor(
    block: number,
    txHash: string,
    underlyingToken: string,
    creditManager: string
  ) {
    super({ block, txHash });
    this.underlyingToken = underlyingToken;
    this.creditManager = creditManager;
  }

  toString(tokenData: Record<string, TokenData>): string {
    const token = tokenData[this.underlyingToken];
    return `${getContractName(this.creditManager)}: credit account was repaid`;
  }
}

export class EventAddCollateral extends EVMEvent {
  public readonly amount: BigNumber;
  public readonly addedToken: string;
  public readonly underlyingToken: string;
  public readonly creditManager: string;

  constructor(
    block: number,

    txHash: string,
    amount: BigNumber,
    addedToken: string,
    underlyingToken: string,
    creditManager: string
  ) {
    super({ block, txHash });
    this.amount = amount;
    this.underlyingToken = underlyingToken;
    this.addedToken = addedToken;
    this.creditManager = creditManager;
  }

  toString(tokenData: Record<string, TokenData>): string {
    const addedToken = tokenData[this.addedToken];
    const token = tokenData[this.underlyingToken];
    return `${getContractName(this.creditManager)}: Added ${formatBN(
      this.amount,
      addedToken.decimals
    )} ${addedToken.symbol} as collateral`;
  }
}

export class EventIncreaseBorrowAmount extends EVMEvent {
  public readonly amount: BigNumber;
  public readonly underlyingToken: string;
  public readonly creditManager: string;

  constructor(
    block: number,
    txHash: string,
    amount: BigNumber,
    underlyingToken: string,
    creditManager: string
  ) {
    super({ block, txHash });
    this.amount = amount;
    this.underlyingToken = underlyingToken;
    this.creditManager = creditManager;
  }

  toString(tokenData: Record<string, TokenData>): string {
    const token = tokenData[this.underlyingToken];
    return `${getContractName(
      this.creditManager
    )}: Borrowed amount was increased for ${formatBN(
      this.amount,
      token?.decimals || 18
    )} ${token?.symbol}`;
  }
}
