"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IVersion__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "version",
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
var IVersion__factory = /** @class */ (function () {
    function IVersion__factory() {
    }
    IVersion__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IVersion__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IVersion__factory.abi = _abi;
    return IVersion__factory;
}());
exports.IVersion__factory = IVersion__factory;
