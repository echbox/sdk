/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { YearnAdapter, YearnAdapterInterface } from "../YearnAdapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_yVault",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [],
    name: "creditFilter",
    outputs: [
      {
        internalType: "contract ICreditFilter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "creditManager",
    outputs: [
      {
        internalType: "contract ICreditManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pricePerShare",
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
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
    name: "totalSupply",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxShares",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxShares",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxShares",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxLoss",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yVault",
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
  "0x60806040523480156200001157600080fd5b5060405162002e7338038062002e73833981810160405260408110156200003757600080fd5b8101908080519060200190929190805190602001909291905050506001600081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614158015620000c55750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b6040518060400160405280600281526020017f5a3000000000000000000000000000000000000000000000000000000000000081525090620001a5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620001695780820151818401526020810190506200014c565b50505050905090810190601f168015620001975780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f93f515b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200025057600080fd5b505afa15801562000265573d6000803e3d6000fd5b505050506040513d60208110156200027c57600080fd5b8101908080519060200190929190505050600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200037757600080fd5b505afa1580156200038c573d6000803e3d6000fd5b505050506040513d6020811015620003a357600080fd5b8101908080519060200190929190505050600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637dd0ba82600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060006040518083038186803b158015620004a057600080fd5b505afa158015620004b5573d6000803e3d6000fd5b5050505050506129a880620004cb6000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c806370a08231116100b8578063c12c21c01161007c578063c12c21c0146105dc578063d0e30db014610610578063dd62ed3e1461062e578063e63697c8146106a6578063f93f515b14610712578063fc0c546a1461074657610136565b806370a082311461043d57806395d89b411461049557806399530b0614610518578063a9059cbb14610536578063b6b55f251461059a57610136565b80632e1a7d4d116100ff5780632e1a7d4d14610326578063313ce5671461036857806333303f8e146103895780633ccfd60b146103bd5780636e553f65146103db57610136565b8062f714ce1461013b57806306fdde031461019d578063095ea7b31461022057806318160ddd1461028457806323b872dd146102a2575b600080fd5b6101876004803603604081101561015157600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061077a565b6040518082815260200191505060405180910390f35b6101a561088b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101e55780820151818401526020810190506101ca565b50505050905090810190601f1680156102125780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61026c6004803603604081101561023657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109f3565b60405180821515815260200191505060405180910390f35b61028c6109ff565b6040518082815260200191505060405180910390f35b61030e600480360360608110156102b857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610aa9565b60405180821515815260200191505060405180910390f35b6103526004803603602081101561033c57600080fd5b8101908080359060200190929190505050610b82565b6040518082815260200191505060405180910390f35b610370610c92565b604051808260ff16815260200191505060405180910390f35b610391610d3c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103c5610d62565b6040518082815260200191505060405180910390f35b610427600480360360408110156103f157600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e65565b6040518082815260200191505060405180910390f35b61047f6004803603602081101561045357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f76565b6040518082815260200191505060405180910390f35b61049d611043565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104dd5780820151818401526020810190506104c2565b50505050905090810190601f16801561050a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105206111ab565b6040518082815260200191505060405180910390f35b6105826004803603604081101561054c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611255565b60405180821515815260200191505060405180910390f35b6105c6600480360360208110156105b057600080fd5b810190808035906020019092919050505061132e565b6040518082815260200191505060405180910390f35b6105e461143e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610618611464565b6040518082815260200191505060405180910390f35b6106906004803603604081101561064457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611567565b6040518082815260200191505060405180910390f35b6106fc600480360360608110156106bc57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611653565b6040518082815260200191505060405180910390f35b61071a611854565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61074e61187a565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000600260005414156107f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b600260008190555061087b632e1a7d4d60e01b8460405160240180828152602001915050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506118a0565b9050600160008190555092915050565b6060600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b1580156108f557600080fd5b505afa158015610909573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561093357600080fd5b810190808051604051939291908464010000000082111561095357600080fd5b8382019150602082018581111561096957600080fd5b825186600182028301116401000000008211171561098657600080fd5b8083526020830192505050908051906020019080838360005b838110156109ba57808201518184015260208101905061099f565b50505050905090810190601f1680156109e75780820380516001836020036101000a031916815260200191505b50604052505050905090565b60006001905092915050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a6957600080fd5b505afa158015610a7d573d6000803e3d6000fd5b505050506040513d6020811015610a9357600080fd5b8101908080519060200190929190505050905090565b60006040518060400160405280600281526020017f4e490000000000000000000000000000000000000000000000000000000000008152506040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610b47578082015181840152602081019050610b2c565b50505050905090810190601f168015610b745780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b600060026000541415610bfd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b6002600081905550610c83632e1a7d4d60e01b8360405160240180828152602001915050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506118a0565b90506001600081905550919050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610cfc57600080fd5b505afa158015610d10573d6000803e3d6000fd5b505050506040513d6020811015610d2657600080fd5b8101908080519060200190929190505050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060026000541415610ddd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b6002600081905550610e58633ccfd60b60e01b604051602401604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506118a0565b9050600160008190555090565b600060026000541415610ee0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b6002600081905550610f6663b6b55f2560e01b8460405160240180828152602001915050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612036565b9050600160008190555092915050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561100157600080fd5b505afa158015611015573d6000803e3d6000fd5b505050506040513d602081101561102b57600080fd5b81019080805190602001909291905050509050919050565b6060600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156110ad57600080fd5b505afa1580156110c1573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525060208110156110eb57600080fd5b810190808051604051939291908464010000000082111561110b57600080fd5b8382019150602082018581111561112157600080fd5b825186600182028301116401000000008211171561113e57600080fd5b8083526020830192505050908051906020019080838360005b83811015611172578082015181840152602081019050611157565b50505050905090810190601f16801561119f5780820380516001836020036101000a031916815260200191505b50604052505050905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166399530b066040518163ffffffff1660e01b815260040160206040518083038186803b15801561121557600080fd5b505afa158015611229573d6000803e3d6000fd5b505050506040513d602081101561123f57600080fd5b8101908080519060200190929190505050905090565b60006040518060400160405280600281526020017f4e490000000000000000000000000000000000000000000000000000000000008152506040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156112f35780820151818401526020810190506112d8565b50505050905090810190601f1680156113205780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6000600260005414156113a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b600260008190555061142f63b6b55f2560e01b8360405160240180828152602001915050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612036565b90506001600081905550919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600260005414156114df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b600260008190555061155a63d0e30db060e01b604051602401604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612036565b9050600160008190555090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e84846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801561161057600080fd5b505afa158015611624573d6000803e3d6000fd5b505050506040513d602081101561163a57600080fd5b8101908080519060200190929190505050905092915050565b6000600260005414156116ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b60026000819055506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561176157600080fd5b505afa158015611775573d6000803e3d6000fd5b505050506040513d602081101561178b57600080fd5b8101908080519060200190929190505050905061184263e63697c860e01b868386604051602401808481526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506118a0565b91505060016000819055509392505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561192c57600080fd5b505afa158015611940573d6000803e3d6000fd5b505050506040513d602081101561195657600080fd5b810190808051906020019092919050505090506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156119f457600080fd5b505afa158015611a08573d6000803e3d6000fd5b505050506040513d6020811015611a1e57600080fd5b810190808051906020019092919050505090506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611abc57600080fd5b505afa158015611ad0573d6000803e3d6000fd5b505050506040513d6020811015611ae657600080fd5b81019080805190602001909291905050509050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16886040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611be3578082015181840152602081019050611bc8565b50505050905090810190601f168015611c105780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015611c3157600080fd5b505af1158015611c45573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015611c6f57600080fd5b8101908080516040519392919084640100000000821115611c8f57600080fd5b83820191506020820185811115611ca557600080fd5b8251866001820283011164010000000082111715611cc257600080fd5b8083526020830192505050908051906020019080838360005b83811015611cf6578082015181840152602081019050611cdb565b50505050905090810190601f168015611d235780820380516001836020036101000a031916815260200191505b506040525050508060200190516020811015611d3e57600080fd5b81019080805190602001909291905050509350600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1c8ef0d84600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611eac600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611e6257600080fd5b505afa158015611e76573d6000803e3d6000fd5b505050506040513d6020811015611e8c57600080fd5b8101908080519060200190929190505050886128ef90919063ffffffff16565b611f8287600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a082318c6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611f3957600080fd5b505afa158015611f4d573d6000803e3d6000fd5b505050506040513d6020811015611f6357600080fd5b81019080805190602001909291905050506128ef90919063ffffffff16565b6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200195505050505050600060405180830381600087803b15801561201657600080fd5b505af115801561202a573d6000803e3d6000fd5b50505050505050919050565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156120c257600080fd5b505afa1580156120d6573d6000803e3d6000fd5b505050506040513d60208110156120ec57600080fd5b81019080805190602001909291905050509050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab82600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050600060405180830381600087803b15801561220a57600080fd5b505af115801561221e573d6000803e3d6000fd5b505050506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156122ad57600080fd5b505afa1580156122c1573d6000803e3d6000fd5b505050506040513d60208110156122d757600080fd5b810190808051906020019092919050505090506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561237557600080fd5b505afa158015612389573d6000803e3d6000fd5b505050506040513d602081101561239f57600080fd5b81019080805190602001909291905050509050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16886040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561249c578082015181840152602081019050612481565b50505050905090810190601f1680156124c95780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156124ea57600080fd5b505af11580156124fe573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561252857600080fd5b810190808051604051939291908464010000000082111561254857600080fd5b8382019150602082018581111561255e57600080fd5b825186600182028301116401000000008211171561257b57600080fd5b8083526020830192505050908051906020019080838360005b838110156125af578082015181840152602081019050612594565b50505050905090810190601f1680156125dc5780820380516001836020036101000a031916815260200191505b5060405250505080602001905160208110156125f757600080fd5b81019080805190602001909291905050509350600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1c8ef0d84600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16612765600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561271b57600080fd5b505afa15801561272f573d6000803e3d6000fd5b505050506040513d602081101561274557600080fd5b8101908080519060200190929190505050886128ef90919063ffffffff16565b61283b87600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a082318c6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156127f257600080fd5b505afa158015612806573d6000803e3d6000fd5b505050506040513d602081101561281c57600080fd5b81019080805190602001909291905050506128ef90919063ffffffff16565b6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200195505050505050600060405180830381600087803b1580156128cf57600080fd5b505af11580156128e3573d6000803e3d6000fd5b50505050505050919050565b600082821115612967576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b81830390509291505056fea2646970667358221220771493ac5e7a1b45a0ebdfcec8c7fdff5123b9d4faa0c8d885a4597c8db6ac7c64736f6c63430007060033";

export class YearnAdapter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _creditManager: string,
    _yVault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YearnAdapter> {
    return super.deploy(
      _creditManager,
      _yVault,
      overrides || {}
    ) as Promise<YearnAdapter>;
  }
  getDeployTransaction(
    _creditManager: string,
    _yVault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_creditManager, _yVault, overrides || {});
  }
  attach(address: string): YearnAdapter {
    return super.attach(address) as YearnAdapter;
  }
  connect(signer: Signer): YearnAdapter__factory {
    return super.connect(signer) as YearnAdapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YearnAdapterInterface {
    return new utils.Interface(_abi) as YearnAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YearnAdapter {
    return new Contract(address, _abi, signerOrProvider) as YearnAdapter;
  }
}
