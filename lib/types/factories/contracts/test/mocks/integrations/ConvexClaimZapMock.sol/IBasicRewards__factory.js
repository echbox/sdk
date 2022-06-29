"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBasicRewards__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_account",
                type: "address",
            },
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
        ],
        name: "getReward",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_account",
                type: "address",
            },
            {
                internalType: "bool",
                name: "_claimExtras",
                type: "bool",
            },
        ],
        name: "getReward",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_account",
                type: "address",
            },
        ],
        name: "getReward",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "stakeFor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var IBasicRewards__factory = /** @class */ (function () {
    function IBasicRewards__factory() {
    }
    IBasicRewards__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IBasicRewards__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IBasicRewards__factory.abi = _abi;
    return IBasicRewards__factory;
}());
exports.IBasicRewards__factory = IBasicRewards__factory;