"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV2Mock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "WETH",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
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
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
        name: "addLiquidity",
        outputs: [
            {
                internalType: "uint256",
                name: "amountA",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountB",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
        name: "addLiquidityETH",
        outputs: [
            {
                internalType: "uint256",
                name: "amountToken",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountETH",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "factory",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "getAmountIn",
        outputs: [
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "getAmountOut",
        outputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        name: "getAmountsIn",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]",
            },
        ],
        name: "getAmountsOut",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "path",
                type: "address[]",
            },
        ],
        name: "getRate",
        outputs: [
            {
                internalType: "uint256",
                name: "rate",
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
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "quote",
        outputs: [
            {
                internalType: "uint256",
                name: "amountB",
                type: "uint256",
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
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
        name: "removeLiquidity",
        outputs: [
            {
                internalType: "uint256",
                name: "amountA",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountB",
                type: "uint256",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
        name: "removeLiquidityETH",
        outputs: [
            {
                internalType: "uint256",
                name: "amountToken",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountETH",
                type: "uint256",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
        name: "removeLiquidityETHSupportingFeeOnTransferTokens",
        outputs: [
            {
                internalType: "uint256",
                name: "amountETH",
                type: "uint256",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "removeLiquidityETHWithPermit",
        outputs: [
            {
                internalType: "uint256",
                name: "amountToken",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountETH",
                type: "uint256",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
        outputs: [
            {
                internalType: "uint256",
                name: "amountETH",
                type: "uint256",
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
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "removeLiquidityWithPermit",
        outputs: [
            {
                internalType: "uint256",
                name: "amountA",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountB",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenFrom",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenTo",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "rate_RAY",
                type: "uint256",
            },
        ],
        name: "setRate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
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
        name: "swapETHForExactTokens",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
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
        name: "swapExactETHForTokens",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
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
        name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
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
        name: "swapExactTokensForETH",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
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
        name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "swapExactTokensForTokens",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
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
        name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
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
        name: "swapTokensForExactETH",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountInMax",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "swapTokensForExactTokens",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50611818806100206000396000f3fe6080604052600436106101a15760003560e01c80638803dbee116100e1578063baa2abde1161008a578063ded9382a11610064578063ded9382a14610417578063e8e3370014610444578063f305d7191461048c578063fb3bdb411461032257600080fd5b8063baa2abde146103cd578063c45a015514610375578063d06ca61f146103f757600080fd5b8063ad615dec116100bb578063ad615dec146101e9578063af2979eb14610391578063b6f9de95146103b857600080fd5b80638803dbee1461033557806397edd4fa14610355578063ad5c46481461037557600080fd5b80634a25d94a1161014e5780635c11d795116101285780635c11d795146102ff578063791ac947146102ff5780637ff36ab51461032257806385f8c259146101e957600080fd5b80634a25d94a146102175780635911fb9a146102b25780635b0d5984146102d457600080fd5b80631f00ca741161017f5780631f00ca74146102445780632195995c1461026457806338ed17391461029257600080fd5b806302751cec146101a6578063054d50d4146101e957806318cbafe514610217575b600080fd5b3480156101b257600080fd5b506101cf6101c1366004611122565b600080965096945050505050565b604080519283526020830191909152015b60405180910390f35b3480156101f557600080fd5b5061020961020436600461117a565b6104aa565b6040519081526020016101e0565b34801561022357600080fd5b506102376102323660046111f2565b6104b4565b6040516101e09190611262565b34801561025057600080fd5b5061023761025f3660046112a6565b6104e4565b34801561027057600080fd5b506101cf61027f366004611314565b6000809b509b9950505050505050505050565b34801561029e57600080fd5b506102376102ad3660046111f2565b610511565b3480156102be57600080fd5b506102d26102cd3660046113b8565b610748565b005b3480156102e057600080fd5b506102096102ef3660046113f4565b60009a9950505050505050505050565b34801561030b57600080fd5b506102d261031a3660046111f2565b505050505050565b610237610330366004611486565b6107ca565b34801561034157600080fd5b506102376103503660046111f2565b6107f9565b34801561036157600080fd5b506102096103703660046114ec565b610a48565b34801561038157600080fd5b50604051600081526020016101e0565b34801561039d57600080fd5b506102096103ac366004611122565b60009695505050505050565b6102d26103c6366004611486565b5050505050565b3480156103d957600080fd5b506101cf6103e836600461152e565b60008097509795505050505050565b34801561040357600080fd5b506102376104123660046112a6565b610ae5565b34801561042357600080fd5b506101cf6104323660046113f4565b6000809a509a98505050505050505050565b34801561045057600080fd5b5061047161045f366004611598565b60008080985098509895505050505050565b604080519384526020840192909252908201526060016101e0565b61047161049a366004611122565b6000808096509650969350505050565b60005b9392505050565b60408051600180825281830190925260609160009190602080830190803683370190505098975050505050505050565b60408051600180825281830190925260609160009190602080830190803683370190505095945050505050565b60608142811015610583576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f556e69737761705632526f757465723a2045585049524544000000000000000060448201526064015b60405180910390fd5b6000610590898888610ae5565b61059b60018861163b565b815181106105ab576105ab611652565b6020026020010151905087811015610645576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f556e69737761705632526f757465723a20494e53554646494349454e545f4f5560448201527f545055545f414d4f554e54000000000000000000000000000000000000000000606482015260840161057a565b61069133308b8a8a600081811061065e5761065e611652565b90506020020160208101906106739190611681565b73ffffffffffffffffffffffffffffffffffffffff16929190610bfe565b6106db8582898960018181106106a9576106a9611652565b90506020020160208101906106be9190611681565b73ffffffffffffffffffffffffffffffffffffffff169190610ce0565b604080516002808252606082018352600092602083019080368337019050509050898160008151811061071057610710611652565b602002602001018181525050818160018151811061073057610730611652565b60209081029190910101529998505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152602081815260408083209386168352929052208190556107916b033b2e3c9fd0803ce800000082610d3b565b73ffffffffffffffffffffffffffffffffffffffff92831660009081526020818152604080832096909516825294909452919092205550565b604080516001808252818301909252606091600091906020808301908036833701905050979650505050505050565b60608142811015610866576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f556e69737761705632526f757465723a20455850495245440000000000000000604482015260640161057a565b60006108728787610a48565b9050806108db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f556e69737761704d6f636b3a2052617465206973206e6f742073657475700000604482015260640161057a565b60006103e5826108f76b033b2e3c9fd0803ce80000008d61169c565b61090191906116d9565b61090d906103e861169c565b61091791906116d9565b9050888111156109a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f556e69737761705632526f757465723a204558434553534956455f494e50555460448201527f5f414d4f554e5400000000000000000000000000000000000000000000000000606482015260840161057a565b6109c23330838b8b600081811061065e5761065e611652565b6109da868b8a8a60018181106106a9576106a9611652565b6040805160028082526060820183526000926020830190803683370190505090508181600081518110610a0f57610a0f611652565b6020026020010181815250508a81600181518110610a2f57610a2f611652565b60209081029190910101529a9950505050505050505050565b60008083836000818110610a5e57610a5e611652565b9050602002016020810190610a739190611681565b905060008484610a8460018261163b565b818110610a9357610a93611652565b9050602002016020810190610aa89190611681565b73ffffffffffffffffffffffffffffffffffffffff9283166000908152602081815260408083209590931682529390935290912054949350505050565b60606000610af38484610a48565b905080610b5c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f556e69737761704d6f636b3a2052617465206973206e6f742073657475700000604482015260640161057a565b6040805160028082526060820183526000926020830190803683370190505090508581600081518110610b9157610b91611652565b60209081029190910101526103e86103e56b033b2e3c9fd0803ce8000000610bb9858a61169c565b610bc391906116d9565b610bcd919061169c565b610bd791906116d9565b81600181518110610bea57610bea611652565b602090810291909101015295945050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610cda9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610ea1565b50505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610d369084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401610c58565b505050565b60408051808201909152600281527f4d33000000000000000000000000000000000000000000000000000000000000602082015260009082610daa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057a9190611740565b506000610db86002846116d9565b90506b033b2e3c9fd0803ce8000000610df1827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61163b565b610dfb91906116d9565b8411156040518060400160405280600281526020017f4d3100000000000000000000000000000000000000000000000000000000000081525090610e6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057a9190611740565b508281610e856b033b2e3c9fd0803ce80000008761169c565b610e8f9190611791565b610e9991906116d9565b949350505050565b6000610f03826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610fad9092919063ffffffff16565b805190915015610d365780806020019051810190610f2191906117a9565b610d36576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161057a565b6060610e99848460008585843b611020576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161057a565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161104991906117c6565b60006040518083038185875af1925050503d8060008114611086576040519150601f19603f3d011682016040523d82523d6000602084013e61108b565b606091505b509150915061109b8282866110a6565b979650505050505050565b606083156110b55750816104ad565b8251156110c55782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057a9190611740565b803573ffffffffffffffffffffffffffffffffffffffff8116811461111d57600080fd5b919050565b60008060008060008060c0878903121561113b57600080fd5b611144876110f9565b9550602087013594506040870135935060608701359250611167608088016110f9565b915060a087013590509295509295509295565b60008060006060848603121561118f57600080fd5b505081359360208301359350604090920135919050565b60008083601f8401126111b857600080fd5b50813567ffffffffffffffff8111156111d057600080fd5b6020830191508360208260051b85010111156111eb57600080fd5b9250929050565b60008060008060008060a0878903121561120b57600080fd5b8635955060208701359450604087013567ffffffffffffffff81111561123057600080fd5b61123c89828a016111a6565b909550935061124f9050606088016110f9565b9150608087013590509295509295509295565b6020808252825182820181905260009190848201906040850190845b8181101561129a5783518352928401929184019160010161127e565b50909695505050505050565b6000806000604084860312156112bb57600080fd5b83359250602084013567ffffffffffffffff8111156112d957600080fd5b6112e5868287016111a6565b9497909650939450505050565b801515811461130057600080fd5b50565b803560ff8116811461111d57600080fd5b60008060008060008060008060008060006101608c8e03121561133657600080fd5b61133f8c6110f9565b9a5061134d60208d016110f9565b995060408c0135985060608c0135975060808c0135965061137060a08d016110f9565b955060c08c0135945060e08c0135611387816112f2565b93506113966101008d01611303565b92506101208c013591506101408c013590509295989b509295989b9093969950565b6000806000606084860312156113cd57600080fd5b6113d6846110f9565b92506113e4602085016110f9565b9150604084013590509250925092565b6000806000806000806000806000806101408b8d03121561141457600080fd5b61141d8b6110f9565b995060208b0135985060408b0135975060608b0135965061144060808c016110f9565b955060a08b0135945060c08b0135611457816112f2565b935061146560e08c01611303565b92506101008b013591506101208b013590509295989b9194979a5092959850565b60008060008060006080868803121561149e57600080fd5b85359450602086013567ffffffffffffffff8111156114bc57600080fd5b6114c8888289016111a6565b90955093506114db9050604087016110f9565b949793965091946060013592915050565b600080602083850312156114ff57600080fd5b823567ffffffffffffffff81111561151657600080fd5b611522858286016111a6565b90969095509350505050565b600080600080600080600060e0888a03121561154957600080fd5b611552886110f9565b9650611560602089016110f9565b955060408801359450606088013593506080880135925061158360a089016110f9565b915060c0880135905092959891949750929550565b600080600080600080600080610100898b0312156115b557600080fd5b6115be896110f9565b97506115cc60208a016110f9565b965060408901359550606089013594506080890135935060a089013592506115f660c08a016110f9565b915060e089013590509295985092959890939650565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561164d5761164d61160c565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561169357600080fd5b6104ad826110f9565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156116d4576116d461160c565b500290565b60008261170f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60005b8381101561172f578181015183820152602001611717565b83811115610cda5750506000910152565b602081526000825180602084015261175f816040850160208701611714565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600082198211156117a4576117a461160c565b500190565b6000602082840312156117bb57600080fd5b81516104ad816112f2565b600082516117d8818460208701611714565b919091019291505056fea264697066735822122092cdba81bcbf343ea8a8ca38a8b98bebf7ce2a20eba641a322497099602c125c64736f6c634300080a0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var UniswapV2Mock__factory = /** @class */ (function (_super) {
    __extends(UniswapV2Mock__factory, _super);
    function UniswapV2Mock__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    UniswapV2Mock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    UniswapV2Mock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    UniswapV2Mock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    UniswapV2Mock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    UniswapV2Mock__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    UniswapV2Mock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    UniswapV2Mock__factory.bytecode = _bytecode;
    UniswapV2Mock__factory.abi = _abi;
    return UniswapV2Mock__factory;
}(ethers_1.ContractFactory));
exports.UniswapV2Mock__factory = UniswapV2Mock__factory;
