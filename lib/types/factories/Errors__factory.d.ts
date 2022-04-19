import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Errors, ErrorsInterface } from "../Errors";
export declare class Errors__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Errors>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Errors;
    connect(signer: Signer): Errors__factory;
    static readonly bytecode = "0x613adb610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106104485760003560e01c806376d9ebb811610240578063b3d5b5d611610145578063d1a65a38116100cd578063e8b1475711610091578063e8b147571461279c578063ea2c3a001461281f578063ebbd977f146128a2578063fe32e65d14612925578063ff2a04e3146129a857610448565b8063d1a65a381461250d578063de10ab9a14612590578063de63cd4014612613578063e13bde4c14612696578063e7f3be0c1461271957610448565b8063bdc36a0211610114578063bdc36a021461227e578063bdcb257614612301578063beea5ec214612384578063c02e57ef14612407578063ccbf92781461248a57610448565b8063b3d5b5d614612072578063b4fcfee3146120f5578063b563b30014612178578063b5cdcbac146121fb57610448565b806399a98c99116101c8578063a988ac6011610197578063a988ac6014611de3578063abc3d25414611e66578063ac75713914611ee9578063ad37d10b14611f6c578063b28bfe9914611fef57610448565b806399a98c9914611bd75780639f4f3eeb14611c5a578063a27c037014611cdd578063a424981214611d6057610448565b80638dcf31841161020f5780638dcf3184146119485780638ea76e22146119cb57806393f7dc3c14611a4e57806394391a4a14611ad1578063944f5d2a14611b5457610448565b806376d9ebb81461173c57806383168a9b146117bf57806387f88ef4146118425780638aed8b2c146118c557610448565b80632c9448141161035157806352be8a64116102d957806361fb3dc41161029d57806361fb3dc4146114ad57806369c3ae16146115305780636b3c35aa146115b35780636c863867146116365780636f92ed92146116b957610448565b806352be8a641461121e57806353278911146112a15780635a7afe48146113245780635fd6824d146113a757806361b2ef2b1461142a57610448565b8063428cf70511610320578063428cf70514610f8f5780634349e3d81461101257806343f6e4ab14611095578063447d8e421461111857806347985f2b1461119b57610448565b80632c94481414610d835780633647c9f914610e065780633df46fe514610e895780633f3153b214610f0c57610448565b80631dd371f8116103d45780632325ac93116103a35780632325ac9314610af45780632357f36214610b775780632438b32214610bfa578063277fa84f14610c7d57806328432c2214610d0057610448565b80631dd371f8146108e85780631e4dfd831461096b5780631fac3a13146109ee578063202a591b14610a7157610448565b80630c9409e71161041b5780630c9409e7146106595780630f5ee482146106dc578063119427c51461075f578063148e3b3d146107e2578063159eee9f1461086557610448565b8063012f82221461044d578063029d2344146104d05780630a2b1d3a146105535780630afeee97146105d6575b600080fd5b610455612a2b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561049557808201518184015260208101905061047a565b50505050905090810190601f1680156104c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104d8612a64565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105185780820151818401526020810190506104fd565b50505050905090810190601f1680156105455780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61055b612a9d565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561059b578082015181840152602081019050610580565b50505050905090810190601f1680156105c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105de612ad6565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561061e578082015181840152602081019050610603565b50505050905090810190601f16801561064b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610661612b0f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106a1578082015181840152602081019050610686565b50505050905090810190601f1680156106ce5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106e4612b48565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610724578082015181840152602081019050610709565b50505050905090810190601f1680156107515780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610767612b81565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107a757808201518184015260208101905061078c565b50505050905090810190601f1680156107d45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107ea612bba565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561082a57808201518184015260208101905061080f565b50505050905090810190601f1680156108575780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61086d612bf3565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108ad578082015181840152602081019050610892565b50505050905090810190601f1680156108da5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108f0612c2c565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610930578082015181840152602081019050610915565b50505050905090810190601f16801561095d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610973612c65565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109b3578082015181840152602081019050610998565b50505050905090810190601f1680156109e05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109f6612c9e565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a36578082015181840152602081019050610a1b565b50505050905090810190601f168015610a635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610a79612cd7565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610ab9578082015181840152602081019050610a9e565b50505050905090810190601f168015610ae65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610afc612d10565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b3c578082015181840152602081019050610b21565b50505050905090810190601f168015610b695780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610b7f612d49565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610bbf578082015181840152602081019050610ba4565b50505050905090810190601f168015610bec5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610c02612d82565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610c42578082015181840152602081019050610c27565b50505050905090810190601f168015610c6f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610c85612dbb565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610cc5578082015181840152602081019050610caa565b50505050905090810190601f168015610cf25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610d08612df4565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610d48578082015181840152602081019050610d2d565b50505050905090810190601f168015610d755780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610d8b612e2d565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610dcb578082015181840152602081019050610db0565b50505050905090810190601f168015610df85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610e0e612e66565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e4e578082015181840152602081019050610e33565b50505050905090810190601f168015610e7b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610e91612e9f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610ed1578082015181840152602081019050610eb6565b50505050905090810190601f168015610efe5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610f14612ed8565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610f54578082015181840152602081019050610f39565b50505050905090810190601f168015610f815780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610f97612f11565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610fd7578082015181840152602081019050610fbc565b50505050905090810190601f1680156110045780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61101a612f4a565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561105a57808201518184015260208101905061103f565b50505050905090810190601f1680156110875780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61109d612f83565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156110dd5780820151818401526020810190506110c2565b50505050905090810190601f16801561110a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611120612fbc565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611160578082015181840152602081019050611145565b50505050905090810190601f16801561118d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6111a3612ff5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156111e35780820151818401526020810190506111c8565b50505050905090810190601f1680156112105780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61122661302e565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561126657808201518184015260208101905061124b565b50505050905090810190601f1680156112935780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6112a9613067565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156112e95780820151818401526020810190506112ce565b50505050905090810190601f1680156113165780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61132c6130a0565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561136c578082015181840152602081019050611351565b50505050905090810190601f1680156113995780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6113af6130d9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156113ef5780820151818401526020810190506113d4565b50505050905090810190601f16801561141c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611432613112565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611472578082015181840152602081019050611457565b50505050905090810190601f16801561149f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6114b561314b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156114f55780820151818401526020810190506114da565b50505050905090810190601f1680156115225780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611538613184565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561157857808201518184015260208101905061155d565b50505050905090810190601f1680156115a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6115bb6131bd565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156115fb5780820151818401526020810190506115e0565b50505050905090810190601f1680156116285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61163e6131f6565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561167e578082015181840152602081019050611663565b50505050905090810190601f1680156116ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6116c161322f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156117015780820151818401526020810190506116e6565b50505050905090810190601f16801561172e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611744613268565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611784578082015181840152602081019050611769565b50505050905090810190601f1680156117b15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6117c76132a1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156118075780820151818401526020810190506117ec565b50505050905090810190601f1680156118345780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61184a6132da565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561188a57808201518184015260208101905061186f565b50505050905090810190601f1680156118b75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6118cd613313565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561190d5780820151818401526020810190506118f2565b50505050905090810190601f16801561193a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61195061334c565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611990578082015181840152602081019050611975565b50505050905090810190601f1680156119bd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6119d3613385565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611a135780820151818401526020810190506119f8565b50505050905090810190601f168015611a405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611a566133be565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611a96578082015181840152602081019050611a7b565b50505050905090810190601f168015611ac35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611ad96133f7565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611b19578082015181840152602081019050611afe565b50505050905090810190601f168015611b465780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611b5c613430565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611b9c578082015181840152602081019050611b81565b50505050905090810190601f168015611bc95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611bdf613469565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611c1f578082015181840152602081019050611c04565b50505050905090810190601f168015611c4c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611c626134a2565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611ca2578082015181840152602081019050611c87565b50505050905090810190601f168015611ccf5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611ce56134db565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611d25578082015181840152602081019050611d0a565b50505050905090810190601f168015611d525780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611d68613514565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611da8578082015181840152602081019050611d8d565b50505050905090810190601f168015611dd55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611deb61354d565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611e2b578082015181840152602081019050611e10565b50505050905090810190601f168015611e585780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611e6e613586565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611eae578082015181840152602081019050611e93565b50505050905090810190601f168015611edb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611ef16135bf565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611f31578082015181840152602081019050611f16565b50505050905090810190601f168015611f5e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611f746135f8565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611fb4578082015181840152602081019050611f99565b50505050905090810190601f168015611fe15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611ff7613631565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561203757808201518184015260208101905061201c565b50505050905090810190601f1680156120645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61207a61366a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156120ba57808201518184015260208101905061209f565b50505050905090810190601f1680156120e75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6120fd6136a3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561213d578082015181840152602081019050612122565b50505050905090810190601f16801561216a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6121806136dc565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156121c05780820151818401526020810190506121a5565b50505050905090810190601f1680156121ed5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b612203613715565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015612243578082015181840152602081019050612228565b50505050905090810190601f1680156122705780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61228661374e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156122c65780820151818401526020810190506122ab565b50505050905090810190601f1680156122f35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b612309613787565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561234957808201518184015260208101905061232e565b50505050905090810190601f1680156123765780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61238c6137c0565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156123cc5780820151818401526020810190506123b1565b50505050905090810190601f1680156123f95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61240f6137f9565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561244f578082015181840152602081019050612434565b50505050905090810190601f16801561247c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b612492613832565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156124d25780820151818401526020810190506124b7565b50505050905090810190601f1680156124ff5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61251561386b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561255557808201518184015260208101905061253a565b50505050905090810190601f1680156125825780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6125986138a4565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156125d85780820151818401526020810190506125bd565b50505050905090810190601f1680156126055780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61261b6138dd565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561265b578082015181840152602081019050612640565b50505050905090810190601f1680156126885780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61269e613916565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156126de5780820151818401526020810190506126c3565b50505050905090810190601f16801561270b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61272161394f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015612761578082015181840152602081019050612746565b50505050905090810190601f16801561278e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6127a4613988565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156127e45780820151818401526020810190506127c9565b50505050905090810190601f1680156128115780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6128276139c1565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561286757808201518184015260208101905061284c565b50505050905090810190601f1680156128945780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6128aa6139fa565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156128ea5780820151818401526020810190506128cf565b50505050905090810190601f1680156129175780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61292d613a33565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561296d578082015181840152602081019050612952565b50505050905090810190601f16801561299a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6129b0613a6c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156129f05780820151818401526020810190506129d5565b50505050905090810190601f168015612a1d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6040518060400160405280600381526020017f4c4133000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600281526020017f4d3100000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f435231000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600281526020017f525000000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f414631000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600281526020017f4d3200000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f505332000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f595032000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f4c4135000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434632000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434644000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434647000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434634000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434d37000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434132000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f595031000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434642000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f505333000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f504f30000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f574731000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600281526020017f504c00000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600281526020017f5a3000000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434d31000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600281526020017f4d3300000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600281526020017f4e4900000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f574732000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434d32000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f4c4134000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f544431000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434d41000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f4c4132000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434d42000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f4c4136000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434d33000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434645000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434630000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434631000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f505330000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434646000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f414632000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434636000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f504f31000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434639000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434d35000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600281526020017f435000000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434d36000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f435232000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f4c4131000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f505331000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434d34000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600481526020017f41434c310000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f544433000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f414633000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434641000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434d43000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434635000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f504f32000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f544434000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434d39000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434637000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600281526020017f495000000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f574733000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434638000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f505334000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f414634000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434d38000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f415031000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434d45000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600281526020017f435200000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434643000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f434633000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600481526020017f41434c320000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f544432000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600381526020017f43413100000000000000000000000000000000000000000000000000000000008152508156fea26469706673582212204fce7d361ab3237745139dedf8c4978490c25fea91274293eb20aae5d6d3629364736f6c63430007060033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Errors;
}