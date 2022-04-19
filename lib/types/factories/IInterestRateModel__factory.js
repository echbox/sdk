"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IInterestRateModel__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
];
var IInterestRateModel__factory = /** @class */ (function () {
    function IInterestRateModel__factory() {
    }
    IInterestRateModel__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IInterestRateModel__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IInterestRateModel__factory.abi = _abi;
    return IInterestRateModel__factory;
}());
exports.IInterestRateModel__factory = IInterestRateModel__factory;