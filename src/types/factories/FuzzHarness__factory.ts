/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FuzzHarness, FuzzHarnessInterface } from "../FuzzHarness";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
      {
        internalType: "contract UniswapRouterMock",
        name: "_uniswapMock",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromTokenIdx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toTokenIdx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newRatePercent",
        type: "uint256",
      },
    ],
    name: "setRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610747380380610747833981810160405281019061003291906101ca565b60005b82518110156100c157600083828151811061004c57fe5b60200260200101519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508080600101915050610035565b5080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506102ef565b600061011d6101188461024f565b61021e565b9050808382526020820190508285602086028201111561013c57600080fd5b60005b8581101561016c57816101528882610176565b84526020840193506020830192505060018101905061013f565b5050509392505050565b600081519050610185816102c1565b92915050565b600082601f83011261019c57600080fd5b81516101ac84826020860161010a565b91505092915050565b6000815190506101c4816102d8565b92915050565b600080604083850312156101dd57600080fd5b600083015167ffffffffffffffff8111156101f757600080fd5b6102038582860161018b565b9250506020610214858286016101b5565b9150509250929050565b6000604051905081810181811067ffffffffffffffff82111715610245576102446102bf565b5b8060405250919050565b600067ffffffffffffffff82111561026a576102696102bf565b5b602082029050602081019050919050565b60006102868261029f565b9050919050565b60006102988261027b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565bfe5b6102ca8161027b565b81146102d557600080fd5b50565b6102e18161028d565b81146102ec57600080fd5b50565b610449806102fe6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80633989c66614610030575b600080fd5b61004a600480360381019061004591906102fb565b61004c565b005b600080549050838161005a57fe5b069250600080549050828161006b57fe5b069150600080848154811061007c57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008084815481106100b757fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050826000111580156100f6575060c88311155b6100ff57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635911fb9a838361016c606461015e896101506101c3565b6101d790919063ffffffff16565b61025d90919063ffffffff16565b6040518463ffffffff1660e01b815260040161018a93929190610368565b600060405180830381600087803b1580156101a457600080fd5b505af11580156101b8573d6000803e3d6000fd5b505050505050505050565b60006b033b2e3c9fd0803ce8000000905090565b6000808314156101ea5760009050610257565b60008284029050828482816101fb57fe5b0414610252576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806103f36021913960400191505060405180910390fd5b809150505b92915050565b60008082116102d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060200191505060405180910390fd5b8183816102dd57fe5b04905092915050565b6000813590506102f5816103db565b92915050565b60008060006060848603121561031057600080fd5b600061031e868287016102e6565b935050602061032f868287016102e6565b9250506040610340868287016102e6565b9150509250925092565b6103538161039f565b82525050565b610362816103d1565b82525050565b600060608201905061037d600083018661034a565b61038a602083018561034a565b6103976040830184610359565b949350505050565b60006103aa826103b1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6103e4816103d1565b81146103ef57600080fd5b5056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212200c365b4daae9ab0485bd999b007ab7a8ef53949e3a1866adb9d1264282f3124764736f6c63430007060033";

export class FuzzHarness__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _tokens: string[],
    _uniswapMock: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FuzzHarness> {
    return super.deploy(
      _tokens,
      _uniswapMock,
      overrides || {}
    ) as Promise<FuzzHarness>;
  }
  getDeployTransaction(
    _tokens: string[],
    _uniswapMock: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tokens, _uniswapMock, overrides || {});
  }
  attach(address: string): FuzzHarness {
    return super.attach(address) as FuzzHarness;
  }
  connect(signer: Signer): FuzzHarness__factory {
    return super.connect(signer) as FuzzHarness__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FuzzHarnessInterface {
    return new utils.Interface(_abi) as FuzzHarnessInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FuzzHarness {
    return new Contract(address, _abi, signerOrProvider) as FuzzHarness;
  }
}