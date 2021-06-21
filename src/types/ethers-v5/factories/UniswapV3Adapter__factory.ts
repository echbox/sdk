/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UniswapV3Adapter } from "../UniswapV3Adapter";

export class UniswapV3Adapter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _creditManager: string,
    _swapContract: string,
    overrides?: Overrides
  ): Promise<UniswapV3Adapter> {
    return super.deploy(
      _creditManager,
      _swapContract,
      overrides || {}
    ) as Promise<UniswapV3Adapter>;
  }
  getDeployTransaction(
    _creditManager: string,
    _swapContract: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _creditManager,
      _swapContract,
      overrides || {}
    );
  }
  attach(address: string): UniswapV3Adapter {
    return super.attach(address) as UniswapV3Adapter;
  }
  connect(signer: Signer): UniswapV3Adapter__factory {
    return super.connect(signer) as UniswapV3Adapter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3Adapter {
    return new Contract(address, _abi, signerOrProvider) as UniswapV3Adapter;
  }
}

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
        name: "_swapContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
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
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "path",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
        ],
        internalType: "struct ISwapRouter.ExactInputParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct ISwapRouter.ExactInputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "path",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountInMaximum",
            type: "uint256",
          },
        ],
        internalType: "struct ISwapRouter.ExactOutputParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountInMaximum",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct ISwapRouter.ExactOutputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapContract",
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
  "0x60806040523480156200001157600080fd5b50604051620024ea380380620024ea8339818101604052810190620000379190620001d0565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f93f515b6040518163ffffffff1660e01b815260040160206040518083038186803b158015620000de57600080fd5b505afa158015620000f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000119919062000211565b600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620002b9565b600081519050620001b38162000285565b92915050565b600081519050620001ca816200029f565b92915050565b60008060408385031215620001e457600080fd5b6000620001f485828601620001a2565b92505060206200020785828601620001a2565b9150509250929050565b6000602082840312156200022457600080fd5b60006200023484828501620001b9565b91505092915050565b60006200024a8262000265565b9050919050565b60006200025e826200023d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b62000290816200023d565b81146200029c57600080fd5b50565b620002aa8162000251565b8114620002b657600080fd5b50565b61222180620002c96000396000f3fe6080604052600436106100745760003560e01c8063c12c21c01161004e578063c12c21c014610118578063db3e219814610143578063f28c049814610173578063f93f515b146101a357610083565b8063414bf3891461008d5780638ea83031146100bd578063c04b8d59146100e857610083565b36610083576100816101ce565b005b61008b6101ce565b005b6100a760048036038101906100a29190611960565b6101e8565b6040516100b49190611f4b565b60405180910390f35b3480156100c957600080fd5b506100d26105d7565b6040516100df9190611d9b565b60405180910390f35b61010260048036038101906100fd919061191f565b6105fd565b60405161010f9190611f4b565b60405180910390f35b34801561012457600080fd5b5061012d610a13565b60405161013a9190611eb4565b60405180910390f35b61015d600480360381019061015891906119f5565b610a37565b60405161016a9190611f4b565b60405180910390f35b61018d600480360381019061018891906119b4565b610e26565b60405161019a9190611f4b565b60405180910390f35b3480156101af57600080fd5b506101b861123c565b6040516101c59190611e99565b60405180910390f35b6101d6611262565b6101e66101e1611264565b61128e565b565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b81526004016102449190611db6565b60206040518083038186803b15801561025c57600080fd5b505afa158015610270573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029491906118b5565b905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab82600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866000016020810190610309919061188c565b6040518463ffffffff1660e01b815260040161032793929190611e0f565b600060405180830381600087803b15801561034157600080fd5b505af1158015610355573d6000803e3d6000fd5b5050505060008380360381019061036c919061198a565b905081816060019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600063414bf38960e01b826040516024016103c19190611ef1565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b81526004016104a293929190611dd1565b600060405180830381600087803b1580156104bc57600080fd5b505af11580156104d0573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906104f991906118de565b90508080602001905181019061050f9190611a49565b9450600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166317d3ffba85886000016020810190610563919061188c565b896020016020810190610576919061188c565b8a60a001358a6040518663ffffffff1660e01b815260040161059c959493929190611e46565b600060405180830381600087803b1580156105b657600080fd5b505af11580156105ca573d6000803e3d6000fd5b5050505050505050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b81526004016106599190611db6565b60206040518083038186803b15801561067157600080fd5b505afa158015610685573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a991906118b5565b90506000806107098580600001906106c19190611f66565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506112b4565b9150915060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab84600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b815260040161078c93929190611e0f565b600060405180830381600087803b1580156107a657600080fd5b505af11580156107ba573d6000803e3d6000fd5b505050506000856107ca906120f0565b905083816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600063c04b8d5960e01b8260405160240161081f9190611ecf565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b815260040161090093929190611dd1565b600060405180830381600087803b15801561091a57600080fd5b505af115801561092e573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061095791906118de565b90508080602001905181019061096d9190611a49565b9650600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166317d3ffba8787878c606001358c6040518663ffffffff1660e01b81526004016109d6959493929190611e46565b600060405180830381600087803b1580156109f057600080fd5b505af1158015610a04573d6000803e3d6000fd5b50505050505050505050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b8152600401610a939190611db6565b60206040518083038186803b158015610aab57600080fd5b505afa158015610abf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae391906118b5565b905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab82600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866000016020810190610b58919061188c565b6040518463ffffffff1660e01b8152600401610b7693929190611e0f565b600060405180830381600087803b158015610b9057600080fd5b505af1158015610ba4573d6000803e3d6000fd5b50505050600083803603810190610bbb9190611a1f565b905081816060019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506000638803dbee60e01b82604051602401610c109190611f2f565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b8152600401610cf193929190611dd1565b600060405180830381600087803b158015610d0b57600080fd5b505af1158015610d1f573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610d4891906118de565b905080806020019051810190610d5e9190611a49565b9450600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166317d3ffba85886000016020810190610db2919061188c565b896020016020810190610dc5919061188c565b898b60a001356040518663ffffffff1660e01b8152600401610deb959493929190611e46565b600060405180830381600087803b158015610e0557600080fd5b505af1158015610e19573d6000803e3d6000fd5b5050505050505050919050565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b8152600401610e829190611db6565b60206040518083038186803b158015610e9a57600080fd5b505afa158015610eae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed291906118b5565b9050600080610f32858060000190610eea9190611f66565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506112b4565b9150915060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab84600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b8152600401610fb593929190611e0f565b600060405180830381600087803b158015610fcf57600080fd5b505af1158015610fe3573d6000803e3d6000fd5b50505050600085610ff390612103565b905083816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506000638803dbee60e01b826040516024016110489190611f0d565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b815260040161112993929190611dd1565b600060405180830381600087803b15801561114357600080fd5b505af1158015611157573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061118091906118de565b9050808060200190518101906111969190611a49565b9650600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166317d3ffba8787878b8d606001356040518663ffffffff1660e01b81526004016111ff959493929190611e46565b600060405180830381600087803b15801561121957600080fd5b505af115801561122d573d6000803e3d6000fd5b50505050505050505050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b3660008037600080366000845af43d6000803e80600081146112af573d6000f35b3d6000fd5b6000806112cb6000846112eb90919063ffffffff16565b91506112e46014845103846112eb90919063ffffffff16565b9050915091565b600081601483011015611366576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f746f416464726573735f6f766572666c6f77000000000000000000000000000081525060200191505060405180910390fd5b60148201835110156113e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f746f416464726573735f6f75744f66426f756e6473000000000000000000000081525060200191505060405180910390fd5b60006c01000000000000000000000000836020860101510490508091505092915050565b600061141761141284611fee565b611fbd565b90508281526020810184848401111561142f57600080fd5b61143a84828561213a565b509392505050565b600061145561145084611fee565b611fbd565b90508281526020810184848401111561146d57600080fd5b611478848285612149565b509392505050565b60008135905061148f8161218f565b92915050565b6000815190506114a48161218f565b92915050565b600082601f8301126114bb57600080fd5b81356114cb848260208601611404565b91505092915050565b600082601f8301126114e557600080fd5b81516114f5848260208601611442565b91505092915050565b600060a0828403121561151057600080fd5b81905092915050565b600060a0828403121561152b57600080fd5b61153560a0611fbd565b9050600082013567ffffffffffffffff81111561155157600080fd5b61155d848285016114aa565b600083015250602061157184828501611480565b602083015250604061158584828501611862565b604083015250606061159984828501611862565b60608301525060806115ad84828501611862565b60808301525092915050565b600061010082840312156115cc57600080fd5b81905092915050565b600061010082840312156115e857600080fd5b6115f3610100611fbd565b9050600061160384828501611480565b600083015250602061161784828501611480565b602083015250604061162b8482850161184d565b604083015250606061163f84828501611480565b606083015250608061165384828501611862565b60808301525060a061166784828501611862565b60a08301525060c061167b84828501611862565b60c08301525060e061168f84828501611838565b60e08301525092915050565b600060a082840312156116ad57600080fd5b81905092915050565b600060a082840312156116c857600080fd5b6116d260a0611fbd565b9050600082013567ffffffffffffffff8111156116ee57600080fd5b6116fa848285016114aa565b600083015250602061170e84828501611480565b602083015250604061172284828501611862565b604083015250606061173684828501611862565b606083015250608061174a84828501611862565b60808301525092915050565b6000610100828403121561176957600080fd5b81905092915050565b6000610100828403121561178557600080fd5b611790610100611fbd565b905060006117a084828501611480565b60008301525060206117b484828501611480565b60208301525060406117c88482850161184d565b60408301525060606117dc84828501611480565b60608301525060806117f084828501611862565b60808301525060a061180484828501611862565b60a08301525060c061181884828501611862565b60c08301525060e061182c84828501611838565b60e08301525092915050565b600081359050611847816121a6565b92915050565b60008135905061185c816121bd565b92915050565b600081359050611871816121d4565b92915050565b600081519050611886816121d4565b92915050565b60006020828403121561189e57600080fd5b60006118ac84828501611480565b91505092915050565b6000602082840312156118c757600080fd5b60006118d584828501611495565b91505092915050565b6000602082840312156118f057600080fd5b600082015167ffffffffffffffff81111561190a57600080fd5b611916848285016114d4565b91505092915050565b60006020828403121561193157600080fd5b600082013567ffffffffffffffff81111561194b57600080fd5b611957848285016114fe565b91505092915050565b6000610100828403121561197357600080fd5b6000611981848285016115b9565b91505092915050565b6000610100828403121561199d57600080fd5b60006119ab848285016115d5565b91505092915050565b6000602082840312156119c657600080fd5b600082013567ffffffffffffffff8111156119e057600080fd5b6119ec8482850161169b565b91505092915050565b60006101008284031215611a0857600080fd5b6000611a1684828501611756565b91505092915050565b60006101008284031215611a3257600080fd5b6000611a4084828501611772565b91505092915050565b600060208284031215611a5b57600080fd5b6000611a6984828501611877565b91505092915050565b611a7b81612096565b82525050565b611a8a8161204b565b82525050565b611a998161204b565b82525050565b6000611aaa8261201e565b611ab48185612029565b9350611ac4818560208601612149565b611acd8161217e565b840191505092915050565b6000611ae38261201e565b611aed818561203a565b9350611afd818560208601612149565b611b068161217e565b840191505092915050565b611b1a816120a8565b82525050565b611b29816120cc565b82525050565b600060a0830160008301518482036000860152611b4c8282611a9f565b9150506020830151611b616020860182611a81565b506040830151611b746040860182611d7d565b506060830151611b876060860182611d7d565b506080830151611b9a6080860182611d7d565b508091505092915050565b61010082016000820151611bbc6000850182611a81565b506020820151611bcf6020850182611a81565b506040820151611be26040850182611d6e565b506060820151611bf56060850182611a81565b506080820151611c086080850182611d7d565b5060a0820151611c1b60a0850182611d7d565b5060c0820151611c2e60c0850182611d7d565b5060e0820151611c4160e0850182611d5f565b50505050565b600060a0830160008301518482036000860152611c648282611a9f565b9150506020830151611c796020860182611a81565b506040830151611c8c6040860182611d7d565b506060830151611c9f6060860182611d7d565b506080830151611cb26080860182611d7d565b508091505092915050565b61010082016000820151611cd46000850182611a81565b506020820151611ce76020850182611a81565b506040820151611cfa6040850182611d6e565b506060820151611d0d6060850182611a81565b506080820151611d206080850182611d7d565b5060a0820151611d3360a0850182611d7d565b5060c0820151611d4660c0850182611d7d565b5060e0820151611d5960e0850182611d5f565b50505050565b611d688161205d565b82525050565b611d778161207d565b82525050565b611d868161208c565b82525050565b611d958161208c565b82525050565b6000602082019050611db06000830184611a90565b92915050565b6000602082019050611dcb6000830184611a72565b92915050565b6000606082019050611de66000830186611a72565b611df36020830185611a90565b8181036040830152611e058184611ad8565b9050949350505050565b6000606082019050611e246000830186611a90565b611e316020830185611a90565b611e3e6040830184611a90565b949350505050565b600060a082019050611e5b6000830188611a90565b611e686020830187611a90565b611e756040830186611a90565b611e826060830185611d8c565b611e8f6080830184611d8c565b9695505050505050565b6000602082019050611eae6000830184611b11565b92915050565b6000602082019050611ec96000830184611b20565b92915050565b60006020820190508181036000830152611ee98184611b2f565b905092915050565b600061010082019050611f076000830184611ba5565b92915050565b60006020820190508181036000830152611f278184611c47565b905092915050565b600061010082019050611f456000830184611cbd565b92915050565b6000602082019050611f606000830184611d8c565b92915050565b60008083356001602003843603038112611f7f57600080fd5b80840192508235915067ffffffffffffffff821115611f9d57600080fd5b602083019250600182023603831315611fb557600080fd5b509250929050565b6000604051905081810181811067ffffffffffffffff82111715611fe457611fe361217c565b5b8060405250919050565b600067ffffffffffffffff8211156120095761200861217c565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006120568261205d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062ffffff82169050919050565b6000819050919050565b60006120a182612116565b9050919050565b60006120b3826120ba565b9050919050565b60006120c58261205d565b9050919050565b60006120d7826120de565b9050919050565b60006120e98261205d565b9050919050565b60006120fc3683611519565b9050919050565b600061210f36836116b6565b9050919050565b600061212182612128565b9050919050565b60006121338261205d565b9050919050565b82818337600083830152505050565b60005b8381101561216757808201518184015260208101905061214c565b83811115612176576000848401525b50505050565bfe5b6000601f19601f8301169050919050565b6121988161204b565b81146121a357600080fd5b50565b6121af8161205d565b81146121ba57600080fd5b50565b6121c68161207d565b81146121d157600080fd5b50565b6121dd8161208c565b81146121e857600080fd5b5056fea26469706673582212209879f8eee3296a213f0f44818ca3108b6fe88fafb5fa759c349026ef23ab254364736f6c63430007060033";