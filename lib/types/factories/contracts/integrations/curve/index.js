"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICurveRegistry__factory = exports.ICurvePoolStETH__factory = exports.ICurvePool__factory = exports.ICRVToken__factory = exports.iCurvePool4Sol = exports.iCurvePool3Sol = exports.iCurvePool2Sol = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.iCurvePool2Sol = __importStar(require("./ICurvePool_2.sol"));
exports.iCurvePool3Sol = __importStar(require("./ICurvePool_3.sol"));
exports.iCurvePool4Sol = __importStar(require("./ICurvePool_4.sol"));
var ICRVToken__factory_1 = require("./ICRVToken__factory");
Object.defineProperty(exports, "ICRVToken__factory", { enumerable: true, get: function () { return ICRVToken__factory_1.ICRVToken__factory; } });
var ICurvePool__factory_1 = require("./ICurvePool__factory");
Object.defineProperty(exports, "ICurvePool__factory", { enumerable: true, get: function () { return ICurvePool__factory_1.ICurvePool__factory; } });
var ICurvePoolStETH__factory_1 = require("./ICurvePoolStETH__factory");
Object.defineProperty(exports, "ICurvePoolStETH__factory", { enumerable: true, get: function () { return ICurvePoolStETH__factory_1.ICurvePoolStETH__factory; } });
var ICurveRegistry__factory_1 = require("./ICurveRegistry__factory");
Object.defineProperty(exports, "ICurveRegistry__factory", { enumerable: true, get: function () { return ICurveRegistry__factory_1.ICurveRegistry__factory; } });
