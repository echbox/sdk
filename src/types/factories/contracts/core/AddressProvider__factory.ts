/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AddressProvider,
  AddressProviderInterface,
} from "../../../contracts/core/AddressProvider";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "service",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "AddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "addresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getACL",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAccountFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractsRegister",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataCompressor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGearToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPriceOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTreasuryContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWETHGateway",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWethToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setACL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setAccountFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setContractsRegister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setDataCompressor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setGearToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setPriceOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setTreasuryContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setWETHGateway",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setWethToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361005f565b60405130906f20a2222922a9a9afa82927ab24a222a960811b907fb37614c7d254ea8d16eb81fa11dddaeb266aa8ba4917980859c7740aff30c69190600090a36100af565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610f0f806100be6000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c806377532ed9116100e3578063bcaead981161008c578063ce3c4ae411610066578063ce3c4ae414610308578063f2fde38b1461031b578063fca513a81461032e57600080fd5b8063bcaead98146102da578063c5120b39146102ed578063c513c9bb1461030057600080fd5b80639068a868116100bd5780639068a868146102b7578063addc1a76146102bf578063affd9243146102d257600080fd5b806377532ed91461027e57806386e09c08146102865780638da5cb5b1461029957600080fd5b80634c252f9111610145578063699f200f1161011f578063699f200f1461022d578063715018a61461026357806376aad6051461026b57600080fd5b80634c252f91146101fc578063530e784f1461020457806354fd4d501461021757600080fd5b80631ed65110116101765780631ed65110146101cc57806321da5837146101e157806326c74fc3146101f457600080fd5b8063060678c21461019257806308737695146101c4575b600080fd5b61019a610336565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61019a610366565b6101df6101da366004610e10565b610391565b005b6101df6101ef366004610e10565b610444565b61019a6104ef565b61019a61051a565b6101df610212366004610e10565b610545565b61021f600281565b6040519081526020016101bb565b61019a61023b366004610e4d565b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6101df6105f0565b6101df610279366004610e10565b61067d565b61019a610728565b6101df610294366004610e10565b610753565b60005473ffffffffffffffffffffffffffffffffffffffff1661019a565b61019a6107fe565b6101df6102cd366004610e10565b610829565b61019a6108d4565b6101df6102e8366004610e10565b6108ff565b6101df6102fb366004610e10565b6109aa565b61019a610a55565b6101df610316366004610e10565b610a80565b6101df610329366004610e10565b610b2b565b61019a610c58565b60006103617f444154415f434f4d50524553534f520000000000000000000000000000000000610c7f565b905090565b60006103617f41434c0000000000000000000000000000000000000000000000000000000000610c7f565b60005473ffffffffffffffffffffffffffffffffffffffff163314610417576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6104417f54524541535552595f434f4e545241435400000000000000000000000000000082610d1d565b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f574554485f47415445574159000000000000000000000000000000000000000082610d1d565b60006103617f54524541535552595f434f4e5452414354000000000000000000000000000000610c7f565b60006103617f574554485f544f4b454e00000000000000000000000000000000000000000000610c7f565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f50524943455f4f5241434c45000000000000000000000000000000000000000082610d1d565b60005473ffffffffffffffffffffffffffffffffffffffff163314610671576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b61067b6000610d9b565b565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f41434c000000000000000000000000000000000000000000000000000000000082610d1d565b60006103617f574554485f474154455741590000000000000000000000000000000000000000610c7f565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f574554485f544f4b454e0000000000000000000000000000000000000000000082610d1d565b60006103617f4143434f554e545f464143544f52590000000000000000000000000000000000610c7f565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f4143434f554e545f464143544f5259000000000000000000000000000000000082610d1d565b60006103617f474541525f544f4b454e00000000000000000000000000000000000000000000610c7f565b60005473ffffffffffffffffffffffffffffffffffffffff163314610980576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f474541525f544f4b454e0000000000000000000000000000000000000000000082610d1d565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a2b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f444154415f434f4d50524553534f52000000000000000000000000000000000082610d1d565b60006103617f434f4e5452414354535f52454749535445520000000000000000000000000000610c7f565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b01576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b6104417f434f4e5452414354535f5245474953544552000000000000000000000000000082610d1d565b60005473ffffffffffffffffffffffffffffffffffffffff163314610bac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b73ffffffffffffffffffffffffffffffffffffffff8116610c4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161040e565b61044181610d9b565b60006103617f50524943455f4f5241434c4500000000000000000000000000000000000000005b6000818152600160209081526040808320548151808301909252600382527f41503100000000000000000000000000000000000000000000000000000000009282019290925273ffffffffffffffffffffffffffffffffffffffff9091169081610d16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040e9190610e66565b5092915050565b60008281526001602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85169081179091559051909184917fb37614c7d254ea8d16eb81fa11dddaeb266aa8ba4917980859c7740aff30c6919190a35050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610e2257600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610e4657600080fd5b9392505050565b600060208284031215610e5f57600080fd5b5035919050565b600060208083528351808285015260005b81811015610e9357858101830151858201604001528201610e77565b81811115610ea5576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01692909201604001939250505056fea264697066735822122083c228af017c6f5cf8c395cdf7a53276ff56fdd4f4313c39f680ab73bd75417364736f6c634300080a0033";

type AddressProviderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddressProviderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AddressProvider__factory extends ContractFactory {
  constructor(...args: AddressProviderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AddressProvider> {
    return super.deploy(overrides || {}) as Promise<AddressProvider>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AddressProvider {
    return super.attach(address) as AddressProvider;
  }
  override connect(signer: Signer): AddressProvider__factory {
    return super.connect(signer) as AddressProvider__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddressProviderInterface {
    return new utils.Interface(_abi) as AddressProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AddressProvider {
    return new Contract(address, _abi, signerOrProvider) as AddressProvider;
  }
}
