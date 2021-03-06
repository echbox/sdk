/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ClaimZapMock,
  ClaimZapMockInterface,
} from "../../../../../../contracts/test/mocks/integrations/ConvexClaimZapMock.sol/ClaimZapMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_crv",
        type: "address",
      },
      {
        internalType: "address",
        name: "_cvx",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "rewardContracts",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "extraRewardContracts",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "depositCrvMaxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositCvxMaxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "spendCvxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "options",
        type: "uint256",
      },
    ],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "crv",
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
    name: "cvx",
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
    name: "getName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b506040516108e73803806108e78339818101604052604081101561003357600080fd5b508051602090910151336080526001600160a01b0391821660a0521660c05260805160a05160c05161086661008160003960006103120152600061029b015260006102eb01526108666000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80636a4874a1116100505780636a4874a1146102965780638da5cb5b146102e6578063923c1d611461030d57600080fd5b806317d7de7c1461006c5780635a7b87f214610115575b600080fd5b60408051808201909152600d81527f436c61696d5a61702056322e300000000000000000000000000000000000000060208201526040805160208082528351818301528351919283929083019185019080838360005b838110156100da5781810151838201526020016100c2565b50505050905090810190601f1680156101075780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610294600480360361012081101561012c57600080fd5b81019060208101813564010000000081111561014757600080fd5b82018360208201111561015957600080fd5b8035906020019184602083028401116401000000008311171561017b57600080fd5b91939092909160208101903564010000000081111561019957600080fd5b8201836020820111156101ab57600080fd5b803590602001918460208302840111640100000000831117156101cd57600080fd5b9193909290916020810190356401000000008111156101eb57600080fd5b8201836020820111156101fd57600080fd5b8035906020019184602083028401116401000000008311171561021f57600080fd5b91939092909160208101903564010000000081111561023d57600080fd5b82018360208201111561024f57600080fd5b8035906020019184602083028401116401000000008311171561027157600080fd5b919350915080359060208101359060408101359060608101359060800135610334565b005b6102bd7f000000000000000000000000000000000000000000000000000000000000000081565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102bd7f000000000000000000000000000000000000000000000000000000000000000081565b6102bd7f000000000000000000000000000000000000000000000000000000000000000081565b60005b8c81101561040c578d8d8281811061035157610351610764565b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637050ccd93360016040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff168152602001821515815260200192505050600060405180830381600087803b1580156103e157600080fd5b505af11580156103f5573d6000803e3d6000fd5b50505050808061040490610793565b915050610337565b5060005b8a8110156104da578b8b8281811061042a5761042a610764565b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c00007b0336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b1580156104af57600080fd5b505af11580156104c3573d6000803e3d6000fd5b5050505080806104d290610793565b915050610410565b506104eb85858585600080876104fa565b50505050505050505050505050565b8615610551576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806107f4603d913960400191505060405180910390fd5b85156105a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806107f4603d913960400191505060405180910390fd5b84156105ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806107f4603d913960400191505060405180910390fd5b8315610656576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806107f4603d913960400191505060405180910390fd5b82156106ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806107f4603d913960400191505060405180910390fd5b8115610704576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806107f4603d913960400191505060405180910390fd5b801561075b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806107f4603d913960400191505060405180910390fd5b50505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156107ec577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fe436c61696d205a6170204d6f636b3a204e6f6e2d7a65726f20657874726120706172616d65746572207761732070617373656420746f20746172676574a2646970667358221220804b3364e3f1f3fdbeaae89a76796b90e4f98f99bcd43ed1c2f9bd27338d29d964736f6c634300080a0033";

type ClaimZapMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClaimZapMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ClaimZapMock__factory extends ContractFactory {
  constructor(...args: ClaimZapMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _crv: string,
    _cvx: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ClaimZapMock> {
    return super.deploy(_crv, _cvx, overrides || {}) as Promise<ClaimZapMock>;
  }
  override getDeployTransaction(
    _crv: string,
    _cvx: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_crv, _cvx, overrides || {});
  }
  override attach(address: string): ClaimZapMock {
    return super.attach(address) as ClaimZapMock;
  }
  override connect(signer: Signer): ClaimZapMock__factory {
    return super.connect(signer) as ClaimZapMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClaimZapMockInterface {
    return new utils.Interface(_abi) as ClaimZapMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClaimZapMock {
    return new Contract(address, _abi, signerOrProvider) as ClaimZapMock;
  }
}
