"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenSymbolByAddress = exports.tokenDataByNetwork = exports.supportedTokens = void 0;
var mappers_1 = require("../utils/mappers");
var normal_1 = require("./normal");
var curveLP_1 = require("./curveLP");
var yearn_1 = require("./yearn");
var convex_1 = require("./convex");
var gear_1 = require("./gear");
exports.supportedTokens = __assign(__assign(__assign(__assign(__assign({}, normal_1.normalTokens), curveLP_1.curveTokens), convex_1.convexTokens), yearn_1.yearnTokens), gear_1.gearTokens);
exports.tokenDataByNetwork = {
    //
    // MAINNET NETWORK
    Mainnet: {
        "1INCH": "0x111111111117dc0aa78b770fa6a738034120c302",
        AAVE: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
        COMP: "0xc00e94cb662c3520282e6f5717214004a7f26888",
        CRV: "0xD533a949740bb3306d119CC777fa900bA034cd52",
        DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        DPI: "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b",
        FEI: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
        LINK: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
        SNX: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
        SUSHI: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
        UNI: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
        USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        USDT: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        WBTC: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        YFI: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
        /// UPDATE
        STETH: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
        FTM: "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
        CVX: "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b",
        FRAX: "0x853d955acef822db058eb8505911ed77f175b99e",
        FXS: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
        LDO: "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
        SPELL: "0x090185f2135308BaD17527004364eBcC2D37e5F6",
        LUSD: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
        sUSD: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
        GUSD: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
        LUNA: "0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9",
        LQTY: "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
        // YEARN TOKENS
        yvDAI: "0xdA816459F1AB5631232FE5e97a05BBBb94970c95",
        yvUSDC: "0xa354f35829ae975e850e23e9615b11da1b3dc4de",
        yvWETH: "0xa258C4606Ca8206D8aA700cE2143D7db854D168c",
        yvWBTC: "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E",
        // CURVE LP TOKENS
        "3Crv": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
        steCRV: "0x06325440d014e39736583c165c2963ba99faf14e",
        FRAX3CRV: "0xd632f22692fac7611d2aa1c0d552930d43caed3b",
        LUSD3CRV: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
        crvPlain3andSUSD: "0xC25a3A3b969415c80451098fa907EC722572917F",
        gusd3CRV: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
        // CONVEX LP TOKENS
        cvx3Crv: "0x30D9410ED1D5DA1F6C8391af5338C93ab8d4035C",
        cvxsteCRV: "0x9518c9063eB0262D791f38d8d6Eb0aca33c63ed0",
        cvxFRAX3CRV: "0xbE0F6478E0E4894CFb14f32855603A083A57c7dA",
        cvxcrvPlain3andSUSD: "0x11D200ef1409cecA8D6d23e6496550f707772F11",
        cvxgusd3CRV: "0x15c2471ef46Fa721990730cfa526BcFb45574576",
        // CONVEX PHANTOM TOKEN ADDRESSES
        stkcvx3Crv: "0xDbA28Ee5b201AaE8E0BfE889E95cC8DC4559e02B",
        stkcvxsteCRV: "0xC0e0492f1157B051fEca7e34c089c6E45a1D6480",
        stkcvxFRAX3CRV: "0x6738e27899ffCF76aeadA4B4612CC4a07BD6562A",
        stkcvxcrvPlain3andSUSD: "0xdb2Bc1Fd98721bF4AD1bACE1Cab1cF5B4cf61d4c",
        stkcvxgusd3CRV: "0xc8124E539fD1F9E5E2F561f14aAAc5899681E274",
        // YEARN- CURVE TOKENS
        yvCurve_stETH: "0xdCD90C7f6324cfa40d7169ef80b12031770B4325",
        yvCurve_FRAX: "0xB4AdA607B9d6b2c9Ee07A275e9616B84AC560139",
        //GEARBOX
        dDAI: "0x6CFaF95457d7688022FC53e7AbE052ef8DFBbdBA",
        dUSDC: "0xc411dB5f5Eb3f7d552F9B8454B2D74097ccdE6E3",
        dWBTC: "0xe753260F1955e8678DCeA8887759e07aa57E8c54",
        dWETH: "0xF21fc650C1B34eb0FDE786D52d23dA99Db3D6278",
        GEAR: "0xBa3335588D9403515223F109EdC4eB7269a9Ab5D"
    },
    //
    // KOVAN NETWORK
    // DAI  LINK  REP  SNX  USDC  WBTC  ZRX
    //
    Kovan: {
        "1INCH": "0x6601ce61E41cd6760E763555A806AB5578EB2a9E",
        AAVE: "0xed2eAe2533bc70dB9030174a7F085e0853289726",
        COMP: "0x90F7A59Fa3993bBc6bA4C6c4ef515958a5bF8a24",
        CRV: "0x0ccfD2Aef95775f080BF6C0E8318D37f720c1999",
        DAI: "0x9DC7B33C3B63fc00ed5472fBD7813eDDa6a64752",
        DPI: "0xF4f06DE71eFc17799297573341C42f3B4C63D589",
        FEI: "0xe1eC2f7B12d4be4075c3B53DB2e48C018B404179",
        LINK: "0x6C994935826574E870549F09efF43BA8089A3D25",
        SNX: "0xB48891df9267EF65AABd32F497F6F2d1eB22A186",
        SUSHI: "0x635E9E7Aa9fA72C56B9A1286026A93E1b8c4090a",
        UNI: "0x1B24F1F2CEFf945FE9EE017F929a6D31394f94b1",
        USDT: "0x4a3964F69284eD6ab6975afc472fB0a072243CD5",
        USDC: "0x31EeB2d0F9B6fD8642914aB10F4dD473677D80df",
        WBTC: "0xE36bC5d8b689AD6d80e78c3e736670e80d4b329D",
        WETH: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
        YFI: "0x1df5DF6d0196bE6AE6A2EED915a0Cc6cAEA84C2D",
        /// UPDATE
        STETH: "0xab8281DD69F1aeeA1FDf5ee3Ae85Bb74E7bB1564",
        FTM: "0x5DE02cFf707eBC43f58DFB022518c18C66147b1E",
        CVX: "0x3628e6e51d685037378e07d2E176E56e67adeB72",
        FRAX: "0x301b0B83E5F5deC5233075368B8b459CEedc0948",
        FXS: "0x25eb8A9B30981d1F04C306829FEBc855FA86695A",
        LDO: "0x99bB41898474aDb38e098fFdB0cD17d2619cA3ef",
        SPELL: "0x20f979FD40caF4aaa4e7A179E1a5C422a897ca6c",
        LUSD: "0x397acA500A56706dd4aAC0592Ed5B8CCAeCfc2d5",
        sUSD: "0x32aeb9B672a81C43391c90a95a4D6c9A9D4459B6",
        GUSD: "0x3cee6494bf400F8C24871dBD331B9436a9CfaBbb",
        LUNA: "0x9dc1D71fAeE18bF77C6166aBC8b218D3336919F1",
        LQTY: "0xC948BB323d753B37eA8195DeAFE904138Df11fbC",
        // YEARN TOKENS
        yvDAI: "0xe5267045739E4d6FcA15BB4a79190012F146893b",
        yvUSDC: "0x980E4d8A22105c2a2fA2252B7685F32fc7564512",
        yvWETH: "0xB8f3CC38753db078b86e31647bE0A752cfd30A4b",
        yvWBTC: "0x66359b29F7b142A3C7158e2F809aCD4407A6Ae75",
        // CURVE LP TOKENS
        "3Crv": "0xAa084E3BDA6890D02cAAd0bc7Bd66B69888c05B3",
        steCRV: "0xB1D7210bD96273F9B5Fc2D9d75b1474AdAc52b2A",
        FRAX3CRV: "0x7091c7aE75502b18CF5c47066DDd4c40702e7552",
        LUSD3CRV: "0x1c53dD8977037Bb1f497de9693E182d64480734a",
        crvPlain3andSUSD: "0x4dD5A029690CC4Ac688A1ccEd7AF8687592Ee3D7",
        gusd3CRV: "0xC9770ff0d47f7c97A579E4a99Ac5fAeC4991a3C6",
        // CONVEX LP TOKENS
        cvx3Crv: "0xdce2f3d8D3AfF3F78dbBC6fa37dFe9f19a4F0DEB",
        cvxsteCRV: "0x49C2f90602D3A4297aC6794F41d97CBF9a6C8E0f",
        cvxFRAX3CRV: "0x4c92f26Da430e69827aE865Aec738a34e5b92f3F",
        cvxcrvPlain3andSUSD: "0x51d37907114f5c3034eD8495B9DDE50BED5A03dC",
        cvxgusd3CRV: "0xc194629156003f53F352c81E93502f909E60a37C",
        // CONVEX PHANTOM TOKEN ADDRESSES
        stkcvx3Crv: "0xEDb913C2E6497d998EDcF36Fe82a7B676F7dC618",
        stkcvxsteCRV: "0x8028Cf76F679b1449Ae0d7994a848f3a51af1969",
        stkcvxFRAX3CRV: "0xeA5d1C2E9b3e0599D17163cC80D31ddAccd46490",
        stkcvxcrvPlain3andSUSD: "0x07e251F6184B90c54155D7deb8ff2D7e8e23f85f",
        stkcvxgusd3CRV: "0x4A66414BBdA4eEDB9cbafB32828F14343459e53e",
        // YEARN- CURVE TOKENS
        yvCurve_stETH: "",
        yvCurve_FRAX: "",
        //GEARBOX
        dDAI: "0x6CFaF95457d7688022FC53e7AbE052ef8DFBbdBA",
        dUSDC: "0xc411dB5f5Eb3f7d552F9B8454B2D74097ccdE6E3",
        dWBTC: "0xe753260F1955e8678DCeA8887759e07aa57E8c54",
        dWETH: "0xF21fc650C1B34eb0FDE786D52d23dA99Db3D6278",
        GEAR: "0xBa3335588D9403515223F109EdC4eB7269a9Ab5D"
    }
};
exports.tokenSymbolByAddress = (0, mappers_1.objectEntries)(exports.tokenDataByNetwork).reduce(function (sum, _a) {
    var _ = _a[0], tokens = _a[1];
    return __assign(__assign({}, sum), (0, mappers_1.keyToLowercase)((0, mappers_1.swapKeyValue)(tokens)));
}, {});
