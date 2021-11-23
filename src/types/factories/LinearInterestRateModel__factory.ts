/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LinearInterestRateModel,
  LinearInterestRateModelInterface,
} from "../LinearInterestRateModel";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "U_optimal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "R_base",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "R_slope1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "R_slope2",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "_R_base_RAY",
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
    name: "_R_slope1_RAY",
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
    name: "_R_slope2_RAY",
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
    name: "_U_Optimal_WAD",
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
    name: "_U_Optimal_inverted_WAD",
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
        name: "expectedLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableLiquidity",
        type: "uint256",
      },
    ],
    name: "calcBorrowRate",
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
    name: "getModelParameters",
    outputs: [
      {
        internalType: "uint256",
        name: "U_optimal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "R_base",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "R_slope1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "R_slope2",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b50604051620011a3380380620011a3833981810160405260808110156200003857600080fd5b81019080805190602001909291908051906020019092919080519060200190929190805190602001909291905050506127108411156040518060400160405280600281526020017f4950000000000000000000000000000000000000000000000000000000000000815250906200014d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101562000111578082015181840152602081019050620000f4565b50505050905090810190601f1680156200013f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506127108311156040518060400160405280600281526020017f49500000000000000000000000000000000000000000000000000000000000008152509062000234576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620001f8578082015181840152602081019050620001db565b50505050905090810190601f168015620002265780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506127108211156040518060400160405280600281526020017f4950000000000000000000000000000000000000000000000000000000000000815250906200031b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620002df578082015181840152602081019050620002c2565b50505050905090810190601f1680156200030d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060006200034085670de0b6b3a76400006200040660201b620005481790919060201c565b905080608081815250506200036c81670de0b6b3a76400006200056c60201b620006a31790919060201c565b60a0818152505062000399846b033b2e3c9fd0803ce80000006200040660201b620005481790919060201c565b60c08181525050620003c6836b033b2e3c9fd0803ce80000006200040660201b620005481790919060201c565b60e08181525050620003f3826b033b2e3c9fd0803ce80000006200040660201b620005481790919060201c565b61010081815250505050505050620005f0565b600080831480620004175750600082145b1562000427576000905062000566565b816002612710816200043557fe5b047fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03816200046057fe5b048311156040518060400160405280600281526020017f4d310000000000000000000000000000000000000000000000000000000000008152509062000544576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101562000508578082015181840152602081019050620004eb565b50505050905090810190601f168015620005365780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506127106002612710816200055557fe5b0483850201816200056257fe5b0490505b92915050565b600082821115620005e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b60805160a05160c05160e05161010051610b2d620006766000398061033c52806104d9528061052652508061026b528061037c528061040852806104b65250806101ad52806102a8528061039d528061042c52806104935250806102e552806105025250806102185280610246528061030c52806103e452806104625250610b2d6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639cd3fdb51161005b5780639cd3fdb51461010a578063c8284e6d14610128578063f81d43811461015b578063fc4b2b78146101795761007d565b806342568d441461008257806350ced104146100ce5780639aec06ea146100ec575b600080fd5b6100b86004803603604081101561009857600080fd5b810190808035906020019092919080359060200190929190505050610197565b6040518082815260200191505060405180910390f35b6100d66103e2565b6040518082815260200191505060405180910390f35b6100f4610406565b6040518082815260200191505060405180910390f35b61011261042a565b6040518082815260200191505060405180910390f35b61013061044e565b6040518085815260200184815260200183815260200182815260200194505050505060405180910390f35b610163610500565b6040518082815260200191505060405180910390f35b610181610524565b6040518082815260200191505060405180910390f35b6000808314806101a657508183105b156101d3577f000000000000000000000000000000000000000000000000000000000000000090506103dc565b600061021484610206670de0b6b3a76400006101f887896106a390919063ffffffff16565b61072690919063ffffffff16565b6107ac90919063ffffffff16565b90507f00000000000000000000000000000000000000000000000000000000000000008110156102dd576102d56102a67f0000000000000000000000000000000000000000000000000000000000000000610298847f000000000000000000000000000000000000000000000000000000000000000061072690919063ffffffff16565b6107ac90919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000061083590919063ffffffff16565b9150506103dc565b6103d86103777f000000000000000000000000000000000000000000000000000000000000000061036961033a7f0000000000000000000000000000000000000000000000000000000000000000866106a390919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000061072690919063ffffffff16565b6107ac90919063ffffffff16565b6103ca7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061083590919063ffffffff16565b61083590919063ffffffff16565b9150505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060008061048f670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006108bd90919063ffffffff16565b93507f000000000000000000000000000000000000000000000000000000000000000092507f000000000000000000000000000000000000000000000000000000000000000091507f0000000000000000000000000000000000000000000000000000000000000000905090919293565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000808314806105585750600082145b15610566576000905061069d565b8160026127108161057357fe5b047fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038161059d57fe5b048311156040518060400160405280600281526020017f4d310000000000000000000000000000000000000000000000000000000000008152509061067d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610642578082015181840152602081019050610627565b50505050905090810190601f16801561066f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5061271060026127108161068d57fe5b04838502018161069957fe5b0490505b92915050565b60008282111561071b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b60008083141561073957600090506107a6565b600082840290508284828161074a57fe5b04146107a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610ad76021913960400191505060405180910390fd5b809150505b92915050565b6000808211610823576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060200191505060405180910390fd5b81838161082c57fe5b04905092915050565b6000808284019050838110156108b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000808214156040518060400160405280600281526020017f4d330000000000000000000000000000000000000000000000000000000000008152509061099f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610964578082015181840152602081019050610949565b50505050905090810190601f1680156109915780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000600283816109ac57fe5b049050612710817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03816109dc57fe5b048411156040518060400160405280600281526020017f4d3100000000000000000000000000000000000000000000000000000000000081525090610abc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a81578082015181840152602081019050610a66565b50505050905090810190601f168015610aae5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50828161271086020181610acc57fe5b049150509291505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220f84e34927a0d92a9263dbd4af6669b7714cd15e4de430c13c9d33461f1a8910c64736f6c63430007060033";

export class LinearInterestRateModel__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    U_optimal: BigNumberish,
    R_base: BigNumberish,
    R_slope1: BigNumberish,
    R_slope2: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LinearInterestRateModel> {
    return super.deploy(
      U_optimal,
      R_base,
      R_slope1,
      R_slope2,
      overrides || {}
    ) as Promise<LinearInterestRateModel>;
  }
  getDeployTransaction(
    U_optimal: BigNumberish,
    R_base: BigNumberish,
    R_slope1: BigNumberish,
    R_slope2: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      U_optimal,
      R_base,
      R_slope1,
      R_slope2,
      overrides || {}
    );
  }
  attach(address: string): LinearInterestRateModel {
    return super.attach(address) as LinearInterestRateModel;
  }
  connect(signer: Signer): LinearInterestRateModel__factory {
    return super.connect(signer) as LinearInterestRateModel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LinearInterestRateModelInterface {
    return new utils.Interface(_abi) as LinearInterestRateModelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LinearInterestRateModel {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LinearInterestRateModel;
  }
}
