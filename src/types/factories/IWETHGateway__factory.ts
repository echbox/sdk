/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IWETHGateway } from "../IWETHGateway";

export class IWETHGateway__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWETHGateway {
    return new Contract(address, _abi, signerOrProvider) as IWETHGateway;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
    ],
    name: "addCollateralETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "addLiquidityETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "leverageFactor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "referralCode",
        type: "uint256",
      },
    ],
    name: "openCreditAccountETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "removeLiquidityETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "repayCreditAccountETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unwrapWETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];