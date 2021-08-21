/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GearBeta, GearBetaInterface } from "../GearBeta";

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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    name: "baseURI",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280601781526020017f4765617220636f6e7472696275746f727320746f6b656e0000000000000000008152506040518060400160405280600881526020017f474541522d4e4654000000000000000000000000000000000000000000000000815250620000966301ffc9a760e01b620001c960201b60201c565b8160069080519060200190620000ae929190620002da565b508060079080519060200190620000c7929190620002da565b50620000e06380ac58cd60e01b620001c960201b60201c565b620000f8635b5e139f60e01b620001c960201b60201c565b6200011063780e9d6360e01b620001c960201b60201c565b5050600062000124620002d260201b60201c565b905080600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35062000390565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141562000266576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600033905090565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200031257600085556200035e565b82601f106200032d57805160ff19168380011785556200035e565b828001600101855582156200035e579182015b828111156200035d57825182559160200191906001019062000340565b5b5090506200036d919062000371565b5090565b5b808211156200038c57600081600090555060010162000372565b5090565b612f9080620003a06000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80636352211e116100b857806395d89b411161007c57806395d89b4114610625578063a22cb465146106a8578063b88d4fde146106f8578063c87b56dd146107fd578063e985e9c5146108a4578063f2fde38b1461091e57610137565b80636352211e146104b45780636c0360eb1461050c57806370a082311461058f578063715018a6146105e75780638da5cb5b146105f157610137565b806323b872dd116100ff57806323b872dd146102e65780632f745c591461035457806340c10f19146103b657806342842e0e146104045780634f6ccce71461047257610137565b806301ffc9a71461013c57806306fdde031461019f578063081812fc14610222578063095ea7b31461027a57806318160ddd146102c8575b600080fd5b6101876004803603602081101561015257600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610962565b60405180821515815260200191505060405180910390f35b6101a76109c9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101e75780820151818401526020810190506101cc565b50505050905090810190601f1680156102145780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61024e6004803603602081101561023857600080fd5b8101908080359060200190929190505050610a6b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102c66004803603604081101561029057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b06565b005b6102d0610c4a565b6040518082815260200191505060405180910390f35b610352600480360360608110156102fc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c5b565b005b6103a06004803603604081101561036a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610cd1565b6040518082815260200191505060405180910390f35b610402600480360360408110156103cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d2c565b005b6104706004803603606081101561041a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e0a565b005b61049e6004803603602081101561048857600080fd5b8101908080359060200190929190505050610e2a565b6040518082815260200191505060405180910390f35b6104e0600480360360208110156104ca57600080fd5b8101908080359060200190929190505050610e4d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610514610e84565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610554578082015181840152602081019050610539565b50505050905090810190601f1680156105815780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105d1600480360360208110156105a557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f26565b6040518082815260200191505060405180910390f35b6105ef610ffb565b005b6105f961116b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61062d611195565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561066d578082015181840152602081019050610652565b50505050905090810190601f16801561069a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106f6600480360360408110156106be57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611237565b005b6107fb6004803603608081101561070e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561077557600080fd5b82018360208201111561078757600080fd5b803590602001918460018302840111640100000000831117156107a957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506113ed565b005b6108296004803603602081101561081357600080fd5b8101908080359060200190929190505050611465565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561086957808201518184015260208101905061084e565b50505050905090810190601f1680156108965780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610906600480360360408110156108ba57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611736565b60405180821515815260200191505060405180910390f35b6109606004803603602081101561093457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506117ca565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a615780601f10610a3657610100808354040283529160200191610a61565b820191906000526020600020905b815481529060010190602001808311610a4457829003601f168201915b5050505050905090565b6000610a76826119bf565b610acb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612e85602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b1182610e4d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612f096021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610bb76119dc565b73ffffffffffffffffffffffffffffffffffffffff161480610be65750610be581610be06119dc565b611736565b5b610c3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180612db46038913960400191505060405180910390fd5b610c4583836119e4565b505050565b6000610c566002611a9d565b905090565b610c6c610c666119dc565b82611ab2565b610cc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612f2a6031913960400191505060405180910390fd5b610ccc838383611ba6565b505050565b6000610d2482600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611de990919063ffffffff16565b905092915050565b610d346119dc565b73ffffffffffffffffffffffffffffffffffffffff16610d5261116b565b73ffffffffffffffffffffffffffffffffffffffff1614610ddb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610de58282611e03565b610e06604051806060016040528060248152602001612e6160249139611ff7565b5050565b610e25838383604051806020016040528060008152506113ed565b505050565b600080610e4183600261201190919063ffffffff16565b50905080915050919050565b6000610e7d82604051806060016040528060298152602001612e1660299139600261203d9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f1c5780601f10610ef157610100808354040283529160200191610f1c565b820191906000526020600020905b815481529060010190602001808311610eff57829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612dec602a913960400191505060405180910390fd5b610ff4600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061205c565b9050919050565b6110036119dc565b73ffffffffffffffffffffffffffffffffffffffff1661102161116b565b73ffffffffffffffffffffffffffffffffffffffff16146110aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060078054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561122d5780601f106112025761010080835404028352916020019161122d565b820191906000526020600020905b81548152906001019060200180831161121057829003601f168201915b5050505050905090565b61123f6119dc565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b80600560006112ed6119dc565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661139a6119dc565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b6113fe6113f86119dc565b83611ab2565b611453576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612f2a6031913960400191505060405180910390fd5b61145f84848484612071565b50505050565b6060611470826119bf565b6114c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612eda602f913960400191505060405180910390fd5b6000600860008481526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561156e5780601f106115435761010080835404028352916020019161156e565b820191906000526020600020905b81548152906001019060200180831161155157829003601f168201915b50505050509050600061157f610e84565b9050600081511415611595578192505050611731565b6000825111156116665780826040516020018083805190602001908083835b602083106115d757805182526020820191506020810190506020830392506115b4565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106116285780518252602082019150602081019050602083039250611605565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050611731565b80611670856120e3565b6040516020018083805190602001908083835b602083106116a65780518252602082019150602081019050602083039250611683565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106116f757805182526020820191506020810190506020830392506116d4565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6117d26119dc565b73ffffffffffffffffffffffffffffffffffffffff166117f061116b565b73ffffffffffffffffffffffffffffffffffffffff1614611879576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156118ff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612d186026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006119d582600261222a90919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611a5783610e4d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000611aab82600001612244565b9050919050565b6000611abd826119bf565b611b12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612d88602c913960400191505060405180910390fd5b6000611b1d83610e4d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611b8c57508373ffffffffffffffffffffffffffffffffffffffff16611b7484610a6b565b73ffffffffffffffffffffffffffffffffffffffff16145b80611b9d5750611b9c8185611736565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611bc682610e4d565b73ffffffffffffffffffffffffffffffffffffffff1614611c32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612eb16029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611cb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612d3e6024913960400191505060405180910390fd5b611cc3838383612255565b611cce6000826119e4565b611d1f81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061225a90919063ffffffff16565b50611d7181600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061227490919063ffffffff16565b50611d888183600261228e9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611df883600001836122c3565b60001c905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ea6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611eaf816119bf565b15611f22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611f2e60008383612255565b611f7f81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061227490919063ffffffff16565b50611f968183600261228e9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b806009908051906020019061200d929190612c18565b5050565b6000806000806120248660000186612346565b915091508160001c8160001c9350935050509250929050565b6000612050846000018460001b846123df565b60001c90509392505050565b600061206a826000016124d5565b9050919050565b61207c848484611ba6565b612088848484846124e6565b6120dd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180612ce66032913960400191505060405180910390fd5b50505050565b6060600082141561212b576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612225565b600082905060005b60008214612155578080600101915050600a828161214d57fe5b049150612133565b60008167ffffffffffffffff8111801561216e57600080fd5b506040519080825280601f01601f1916602001820160405280156121a15781602001600182028036833780820191505090505b50905060006001830390508593505b6000841461221d57600a84816121c257fe5b0660300160f81b828280600190039350815181106121dc57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a848161221557fe5b0493506121b0565b819450505050505b919050565b600061223c836000018360001b6126ff565b905092915050565b600081600001805490509050919050565b505050565b600061226c836000018360001b612722565b905092915050565b6000612286836000018360001b61280a565b905092915050565b60006122ba846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b61287a565b90509392505050565b600081836000018054905011612324576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612cc46022913960400191505060405180910390fd5b82600001828154811061233357fe5b9060005260206000200154905092915050565b600080828460000180549050116123a8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612e3f6022913960400191505060405180910390fd5b60008460000184815481106123b957fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600080846001016000858152602001908152602001600020549050600081141583906124a6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561246b578082015181840152602081019050612450565b50505050905090810190601f1680156124985780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106124b957fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006125078473ffffffffffffffffffffffffffffffffffffffff16612956565b61251457600190506126f7565b600061267e63150b7a0260e01b6125296119dc565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156125ad578082015181840152602081019050612592565b50505050905090810190601f1680156125da5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001612ce6603291398773ffffffffffffffffffffffffffffffffffffffff166129699092919063ffffffff16565b9050600081806020019051602081101561269757600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b600080836001016000848152602001908152602001600020549050600081146127fe576000600182039050600060018660000180549050039050600086600001828154811061276d57fe5b906000526020600020015490508087600001848154811061278a57fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806127c257fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612804565b60009150505b92915050565b60006128168383612981565b61286f578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050612874565b600090505b92915050565b60008084600101600085815260200190815260200160002054905060008114156129215784600001604051806040016040528086815260200185815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050846000018054905085600101600086815260200190815260200160002081905550600191505061294f565b8285600001600183038154811061293457fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b606061297884846000856129a4565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b6060824710156129ff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612d626026913960400191505060405180910390fd5b612a0885612956565b612a7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310612ac95780518252602082019150602081019050602083039250612aa6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612b2b576040519150601f19603f3d011682016040523d82523d6000602084013e612b30565b606091505b5091509150612b40828286612b4c565b92505050949350505050565b60608315612b5c57829050612c11565b600083511115612b6f5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612bd6578082015181840152602081019050612bbb565b50505050905090810190601f168015612c035780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282612c4e5760008555612c95565b82601f10612c6757805160ff1916838001178555612c95565b82800160010185558215612c95579182015b82811115612c94578251825591602001919060010190612c79565b5b509050612ca29190612ca6565b5090565b5b80821115612cbf576000816000905550600101612ca7565b509056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e647368747470733a2f2f6e66742e67656172626f782e66692f636f6e7472696275746f72732f4552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a26469706673582212201dae65c539b95259f9675f42342ac529002b08c98f8a2464c15f646624a02dec64736f6c63430007060033";

export class GearBeta__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GearBeta> {
    return super.deploy(overrides || {}) as Promise<GearBeta>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GearBeta {
    return super.attach(address) as GearBeta;
  }
  connect(signer: Signer): GearBeta__factory {
    return super.connect(signer) as GearBeta__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GearBetaInterface {
    return new utils.Interface(_abi) as GearBetaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GearBeta {
    return new Contract(address, _abi, signerOrProvider) as GearBeta;
  }
}