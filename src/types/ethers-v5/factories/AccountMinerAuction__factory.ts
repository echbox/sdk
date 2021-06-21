/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AccountMinerAuction } from "../AccountMinerAuction";

export class AccountMinerAuction__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    addressProvider: string,
    overrides?: Overrides
  ): Promise<AccountMinerAuction> {
    return super.deploy(
      addressProvider,
      overrides || {}
    ) as Promise<AccountMinerAuction>;
  }
  getDeployTransaction(
    addressProvider: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(addressProvider, overrides || {});
  }
  attach(address: string): AccountMinerAuction {
    return super.attach(address) as AccountMinerAuction;
  }
  connect(signer: Signer): AccountMinerAuction__factory {
    return super.connect(signer) as AccountMinerAuction__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccountMinerAuction {
    return new Contract(address, _abi, signerOrProvider) as AccountMinerAuction;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addressProvider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
    ],
    name: "AccountMined",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BidIncreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BidPlaced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BidTaken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "accountFactory",
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
    inputs: [
      {
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
    ],
    name: "getBid",
    outputs: [
      {
        internalType: "address",
        name: "prevBid",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "nextBid",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBidsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increaseBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "kind",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "user",
        type: "address",
      },
    ],
    name: "mineAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "placeBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "tail",
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
    name: "takeBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002bcd38038062002bcd833981810160405260208110156200003757600080fd5b8101908080519060200190929190505050808160008190508073ffffffffffffffffffffffffffffffffffffffff16639068a8686040518163ffffffff1660e01b815260040160206040518083038186803b1580156200009657600080fd5b505afa158015620000ab573d6000803e3d6000fd5b505050506040513d6020811015620000c257600080fd5b81019080805190602001909291905050506000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505060008060146101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff1663087376956040518163ffffffff1660e01b815260040160206040518083038186803b1580156200017557600080fd5b505afa1580156200018a573d6000803e3d6000fd5b505050506040513d6020811015620001a157600080fd5b8101908080519060200190929190505050600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060016002819055508073ffffffffffffffffffffffffffffffffffffffff166326c74fc36040518163ffffffff1660e01b815260040160206040518083038186803b1580156200024257600080fd5b505afa15801562000257573d6000803e3d6000fd5b505050506040513d60208110156200026e57600080fd5b8101908080519060200190929190505050600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1663affd92436040518163ffffffff1660e01b815260040160206040518083038186803b1580156200030657600080fd5b505afa1580156200031b573d6000803e3d6000fd5b505050506040513d60208110156200033257600080fd5b8101908080519060200190929190505050600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061283980620003946000396000f3fe6080604052600436106100a75760003560e01c8063687cd9c111610064578063687cd9c11461019e5780637204d5e3146101df5780638456cb59146101e95780639849e42f14610200578063c8b342ab14610251578063ecfc7ecc146102f0576100a7565b806304baa00b146100ac57806313d8c840146100d75780633f4ba83a14610118578063424613fc1461012f5780635c975abb1461014657806363505ae814610173575b600080fd5b3480156100b857600080fd5b506100c16102fa565b6040518082815260200191505060405180910390f35b3480156100e357600080fd5b506100ec61031e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561012457600080fd5b5061012d610344565b005b34801561013b57600080fd5b506101446104ef565b005b34801561015257600080fd5b5061015b6107de565b60405180821515815260200191505060405180910390f35b34801561017f57600080fd5b506101886107f4565b6040518082815260200191505060405180910390f35b3480156101aa57600080fd5b506101b361098e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101e76109b2565b005b3480156101f557600080fd5b506101fe610c9c565b005b34801561020c57600080fd5b5061024f6004803603602081101561022357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e47565b005b34801561025d57600080fd5b506102a06004803603602081101561027457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611246565b604051808473ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b6102f8611361565b005b7f61756374696f6e0000000000000000000000000000000000000000000000000081565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d4eb5db0336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156103cd57600080fd5b505afa1580156103e1573d6000803e3d6000fd5b505050506040513d60208110156103f757600080fd5b81019080805190602001909291905050506040518060400160405280600281526020017f4331000000000000000000000000000000000000000000000000000000000000815250906104e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156104a957808201518184015260208101905061048e565b50505050905090810190601f1680156104d65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506104ed6116ee565b565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154116040518060400160405280601d81526020017f4163636f756e744d696e65723a207573657220686173206e6f2062696400000081525090610611576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156105d65780820151818401526020810190506105bb565b50505050905090810190601f1680156106035780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5061061a6107de565b1561068d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b600280541415610705576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b600280819055506000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154905061075c336117d8565b3373ffffffffffffffffffffffffffffffffffffffff167f2fd8fe9016dd1e989ad48b8a5e912a5a55a23656118f723545a93dd16ad3faaf826040518082815260200191505060405180910390a26107d3813373ffffffffffffffffffffffffffffffffffffffff16611b4790919063ffffffff16565b506001600281905550565b60008060149054906101000a900460ff16905090565b60008073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610855576000905061098b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600191505b600073ffffffffffffffffffffffffffffffffffffffff16600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461098957600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508180600101925050610881565b505b90565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154116040518060400160405280601d81526020017f4163636f756e744d696e65723a207573657220686173206e6f2062696400000081525090610ad4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a99578082015181840152602081019050610a7e565b50505050905090810190601f168015610ac65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50610add6107de565b15610b50576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b600280541415610bc8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b600280819055506000610c2634600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154611c8190919063ffffffff16565b9050610c3181611d09565b610c3a336117d8565b610c4381611e9e565b3373ffffffffffffffffffffffffffffffffffffffff167fcf84a46a93294358c23e7c87e557feb461890c72f3547fb25b455167dcea9efb346040518082815260200191505060405180910390a2506001600281905550565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633a41ec64336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610d2557600080fd5b505afa158015610d39573d6000803e3d6000fd5b505050506040513d6020811015610d4f57600080fd5b81019080805190602001909291905050506040518060400160405280600281526020017f433100000000000000000000000000000000000000000000000000000000000081525090610e3c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610e01578082015181840152602081019050610de6565b50505050905090810190601f168015610e2e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50610e456120e8565b565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060600160405280602681526020016127246026913990610f55576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f1a578082015181840152602081019050610eff565b50505050905090810190601f168015610f475780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141560405180606001604052806032815260200161274a6032913990611068576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561102d578082015181840152602081019050611012565b50505050905090810190601f16801561105a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f4c4b0bec35ee0dc0dce919a0d52d05ea4d94c47cea42f5d2d6ab9e8a4dd77ac460405160405180910390a2611140600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16620186a0600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166121d49092919063ffffffff16565b60006111c167016345785d8a000060056000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015461227690919063ffffffff16565b90506111ee600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166117d8565b61123981600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611b4790919063ffffffff16565b611242826122f9565b5050565b6000806000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169250600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549150600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690509193909250565b6113696107de565b156113dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b600280541415611454576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b6002808190555061146434611d09565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154146040518060600160405280602981526020016127b16029913990611569576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561152e578082015181840152602081019050611513565b50505050905090810190601f16801561155b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200134815250600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015590505061169634611e9e565b3373ffffffffffffffffffffffffffffffffffffffff167f3fabff0a9c3ecd6814702e247fa9733e5d0aa69e3a38590f92cb18f623a2254d346040518082815260200191505060405180910390a26001600281905550565b6116f66107de565b611768576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b60008060146101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6117ab61232d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461195c5780600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611a125781600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b8273ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611aaa5781600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560028201600090555050505050565b80471015611bbd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a20696e73756666696369656e742062616c616e636500000081525060200191505060405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405180600001905060006040518083038185875af1925050503d8060008114611c1d576040519150601f19603f3d011682016040523d82523d6000602084013e611c22565b606091505b5050905080611c7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a8152602001806126c4603a913960400191505060405180910390fd5b505050565b600080828401905083811015611cff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611dca5760056000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154611dd4565b67016345785d8a00005b90508082101560405180606001604052806035815260200161277c6035913990611e99576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611e5e578082015181840152602081019050611e43565b50505050905090810190601f168015611e8b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050565b600073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611f98573360056000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060056000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555050565b6120f06107de565b15612163576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6001600060146101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586121a761232d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b6122718363a9059cbb60e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612335565b505050565b6000828211156122ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b61232a67016345785d8a00008273ffffffffffffffffffffffffffffffffffffffff16611b4790919063ffffffff16565b50565b600033905090565b6000612397826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166124249092919063ffffffff16565b905060008151111561241f578080602001905160208110156123b857600080fd5b810190808051906020019092919050505061241e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806127da602a913960400191505060405180910390fd5b5b505050565b6060612433848460008561243c565b90509392505050565b606082471015612497576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806126fe6026913960400191505060405180910390fd5b6124a0856125e4565b612512576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310612561578051825260208201915060208101905060208303925061253e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146125c3576040519150601f19603f3d011682016040523d82523d6000602084013e6125c8565b606091505b50915091506125d88282866125f7565b92505050949350505050565b600080823b905060008111915050919050565b60608315612607578290506126bc565b60008351111561261a5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612681578082015181840152602081019050612666565b50505050905090810190601f1680156126ae5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4163636f756e744d696e65723a20666f72206163636f756e7420666163746f7279206f6e6c794163636f756e744d696e65723a2063616e2774206d696e65206e65772076612c206e6f20626964732077657265206d6164654163636f756e744d696e7465723a20796f757220626964206973206c6f77207468616e206d696e696d616c20617661696c61626c654163636f756e744d696e7465723a20796f7527766520616c726561647920706c6163652061206269645361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122065af6d4d5ec7418ba709bbb194ef5f25aeb9da9f3b9c2cb1486f8ccba6b3cd2864736f6c63430007060033";