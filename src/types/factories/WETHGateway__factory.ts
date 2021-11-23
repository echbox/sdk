/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WETHGateway, WETHGatewayInterface } from "../WETHGateway";

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
  {
    inputs: [],
    name: "wethAddress",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620029a2380380620029a2833981810160405260208110156200003757600080fd5b8101908080519060200190929190505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600281526020017f5a300000000000000000000000000000000000000000000000000000000000008152509062000159576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156200011d57808201518184015260208101905062000100565b50505050905090810190601f1680156200014b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508073ffffffffffffffffffffffffffffffffffffffff16634c252f916040518163ffffffff1660e01b815260040160206040518083038186803b158015620001a157600080fd5b505afa158015620001b6573d6000803e3d6000fd5b505050506040513d6020811015620001cd57600080fd5b81019080805190602001909291905050506000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1663c513c9bb6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200026457600080fd5b505afa15801562000279573d6000803e3d6000fd5b505050506040513d60208110156200029057600080fd5b8101908080519060200190929190505050600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506126b080620002f26000396000f3fe6080604052600436106100745760003560e01c8063a6eab5c21161004e578063a6eab5c2146102ac578063d8c99bc314610310578063deecfbc914610388578063e79a4089146103fa576101a7565b8063420ac3b2146101ac5780634f0e0ef3146102105780635869dba814610251576101a7565b366101a75760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600381526020017f5747320000000000000000000000000000000000000000000000000000000000815250906101a4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561016957808201518184015260208101905061014e565b50505050905090810190601f1680156101965780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50005b600080fd5b61020e600480360360408110156101c257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610475565b005b34801561021c57600080fd5b50610225610774565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561025d57600080fd5b506102aa6004803603604081101561027457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610798565b005b61030e600480360360408110156102c257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610949565b005b6103866004803603608081101561032657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610faa565b005b6103f86004803603606081101561039e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803561ffff169060200190929190505050611423565b005b34801561040657600080fd5b506104736004803603606081101561041d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611897565b005b81600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636fbc6f6b826040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156104ff57600080fd5b505afa158015610513573d6000803e3d6000fd5b505050506040513d602081101561052957600080fd5b81019080805190602001909291905050506040518060400160405280600281526020017f435000000000000000000000000000000000000000000000000000000000000081525090610616576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156105db5780820151818401526020810190506105c0565b50505050905090810190601f1680156106085780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600034905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561068457600080fd5b505af1158015610698573d6000803e3d6000fd5b50505050506106a78482611d53565b8373ffffffffffffffffffffffffffffffffffffffff1663597810348460008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b15801561075657600080fd5b505af115801561076a573d6000803e3d6000fd5b5050505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b33600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636fbc6f6b826040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561082257600080fd5b505afa158015610836573d6000803e3d6000fd5b505050506040513d602081101561084c57600080fd5b81019080805190602001909291905050506040518060400160405280600281526020017f435000000000000000000000000000000000000000000000000000000000000081525090610939576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108fe5780820151818401526020810190506108e3565b50505050905090810190601f16801561092b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506109448383611f2c565b505050565b81600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636fbc6f6b826040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156109d357600080fd5b505afa1580156109e7573d6000803e3d6000fd5b505050506040513d60208110156109fd57600080fd5b81019080805190602001909291905050506040518060400160405280600281526020017f435000000000000000000000000000000000000000000000000000000000000081525090610aea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610aaf578082015181840152602081019050610a94565b50505050905090810190601f168015610adc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b158015610b6857600080fd5b505afa158015610b7c573d6000803e3d6000fd5b505050506040513d6020811015610b9257600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600381526020017f574731000000000000000000000000000000000000000000000000000000000081525090610c96576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c5b578082015181840152602081019050610c40565b50505050905090810190601f168015610c885780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600034905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015610d0457600080fd5b505af1158015610d18573d6000803e3d6000fd5b5050505050610d278482611d53565b60008473ffffffffffffffffffffffffffffffffffffffff1663a6eab5c233866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b158015610db057600080fd5b505af1158015610dc4573d6000803e3d6000fd5b505050506040513d6020811015610dda57600080fd5b8101908080519060200190929190505050905080821115610ec25760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d8284036040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610e6a57600080fd5b505af1158015610e7e573d6000803e3d6000fd5b50505050610ebd610e988284611fe490919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff1661206790919063ffffffff16565b610fa3565b8082146040518060400160405280600381526020017f574733000000000000000000000000000000000000000000000000000000000081525090610fa1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f66578082015181840152602081019050610f4b565b50505050905090810190601f168015610f935780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505b5050505050565b83600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636fbc6f6b826040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561103457600080fd5b505afa158015611048573d6000803e3d6000fd5b505050506040513d602081101561105e57600080fd5b81019080805190602001909291905050506040518060400160405280600281526020017f43500000000000000000000000000000000000000000000000000000000000008152509061114b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156111105780820151818401526020810190506110f5565b50505050905090810190601f16801561113d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b1580156111c957600080fd5b505afa1580156111dd573d6000803e3d6000fd5b505050506040513d60208110156111f357600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600381526020017f5747310000000000000000000000000000000000000000000000000000000000815250906112f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156112bc5780820151818401526020810190506112a1565b50505050905090810190601f1680156112e95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506113028534611d53565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561136a57600080fd5b505af115801561137e573d6000803e3d6000fd5b50505050508473ffffffffffffffffffffffffffffffffffffffff16635288ba4b348686866040518563ffffffff1660e01b8152600401808581526020018473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001945050505050600060405180830381600087803b15801561140457600080fd5b505af1158015611418573d6000803e3d6000fd5b505050505050505050565b82600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b16ebb7826040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156114ad57600080fd5b505afa1580156114c1573d6000803e3d6000fd5b505050506040513d60208110156114d757600080fd5b81019080805190602001909291905050506040518060400160405280600281526020017f5250000000000000000000000000000000000000000000000000000000000000815250906115c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561158957808201518184015260208101905061156e565b50505050905090810190601f1680156115b65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b15801561164257600080fd5b505afa158015611656573d6000803e3d6000fd5b505050506040513d602081101561166c57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600381526020017f574731000000000000000000000000000000000000000000000000000000000081525090611770576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561173557808201518184015260208101905061171a565b50505050905090810190601f1680156117625780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b1580156117d957600080fd5b505af11580156117ed573d6000803e3d6000fd5b50505050506117fc8434611d53565b8373ffffffffffffffffffffffffffffffffffffffff16639aa5d4623485856040518463ffffffff1660e01b8152600401808481526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018261ffff1681526020019350505050600060405180830381600087803b15801561187957600080fd5b505af115801561188d573d6000803e3d6000fd5b5050505050505050565b82600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b16ebb7826040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561192157600080fd5b505afa158015611935573d6000803e3d6000fd5b505050506040513d602081101561194b57600080fd5b81019080805190602001909291905050506040518060400160405280600281526020017f525000000000000000000000000000000000000000000000000000000000000081525090611a38576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156119fd5780820151818401526020810190506119e2565b50505050905090810190601f168015611a2a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b158015611ab657600080fd5b505afa158015611aca573d6000803e3d6000fd5b505050506040513d6020811015611ae057600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600381526020017f574731000000000000000000000000000000000000000000000000000000000081525090611be4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611ba9578082015181840152602081019050611b8e565b50505050905090810190601f168015611bd65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50611c923330858773ffffffffffffffffffffffffffffffffffffffff166336dda7d56040518163ffffffff1660e01b815260040160206040518083038186803b158015611c3157600080fd5b505afa158015611c45573d6000803e3d6000fd5b505050506040513d6020811015611c5b57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166121a1909392919063ffffffff16565b60008473ffffffffffffffffffffffffffffffffffffffff166305fe138b85306040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b158015611d0557600080fd5b505af1158015611d19573d6000803e3d6000fd5b505050506040513d6020811015611d2f57600080fd5b81019080805190602001909291905050509050611d4c8382611f2c565b5050505050565b8060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015611df957600080fd5b505afa158015611e0d573d6000803e3d6000fd5b505050506040513d6020811015611e2357600080fd5b81019080805190602001909291905050501015611f285760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015611eeb57600080fd5b505af1158015611eff573d6000803e3d6000fd5b505050506040513d6020811015611f1557600080fd5b8101908080519060200190929190505050505b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015611f9f57600080fd5b505af1158015611fb3573d6000803e3d6000fd5b50505050611fe0818373ffffffffffffffffffffffffffffffffffffffff1661206790919063ffffffff16565b5050565b60008282111561205c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b804710156120dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a20696e73756666696369656e742062616c616e636500000081525060200191505060405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405180600001905060006040518083038185875af1925050503d806000811461213d576040519150601f19603f3d011682016040523d82523d6000602084013e612142565b606091505b505090508061219c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a8152602001806125f1603a913960400191505060405180910390fd5b505050565b61225c846323b872dd60e01b858585604051602401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612262565b50505050565b60006122c4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166123519092919063ffffffff16565b905060008151111561234c578080602001905160208110156122e557600080fd5b810190808051906020019092919050505061234b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612651602a913960400191505060405180910390fd5b5b505050565b60606123608484600085612369565b90509392505050565b6060824710156123c4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061262b6026913960400191505060405180910390fd5b6123cd85612511565b61243f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061248e578051825260208201915060208101905060208303925061246b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146124f0576040519150601f19603f3d011682016040523d82523d6000602084013e6124f5565b606091505b5091509150612505828286612524565b92505050949350505050565b600080823b905060008111915050919050565b60608315612534578290506125e9565b6000835111156125475782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156125ae578082015181840152602081019050612593565b50505050905090810190601f1680156125db5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212204a0accea4c43a0ef6b03a9bed89805d0bb79e7b15388ca5230025a3a195a0cac64736f6c63430007060033";

export class WETHGateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    addressProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WETHGateway> {
    return super.deploy(
      addressProvider,
      overrides || {}
    ) as Promise<WETHGateway>;
  }
  getDeployTransaction(
    addressProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(addressProvider, overrides || {});
  }
  attach(address: string): WETHGateway {
    return super.attach(address) as WETHGateway;
  }
  connect(signer: Signer): WETHGateway__factory {
    return super.connect(signer) as WETHGateway__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WETHGatewayInterface {
    return new utils.Interface(_abi) as WETHGatewayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WETHGateway {
    return new Contract(address, _abi, signerOrProvider) as WETHGateway;
  }
}
