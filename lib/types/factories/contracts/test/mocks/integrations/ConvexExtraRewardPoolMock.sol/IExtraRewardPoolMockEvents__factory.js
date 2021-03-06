"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IExtraRewardPoolMockEvents__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "reward",
                type: "uint256",
            },
        ],
        name: "Mock_ExtraRewardPaid",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Mock_ExtraStaked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Mock_ExtraWithdrawn",
        type: "event",
    },
];
var IExtraRewardPoolMockEvents__factory = /** @class */ (function () {
    function IExtraRewardPoolMockEvents__factory() {
    }
    IExtraRewardPoolMockEvents__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IExtraRewardPoolMockEvents__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IExtraRewardPoolMockEvents__factory.abi = _abi;
    return IExtraRewardPoolMockEvents__factory;
}());
exports.IExtraRewardPoolMockEvents__factory = IExtraRewardPoolMockEvents__factory;
