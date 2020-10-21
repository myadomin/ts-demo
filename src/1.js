"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var index_1 = require("../lib-dts/index");
var index_2 = require("../lib/index");
var axios_1 = require("axios");
// import koa from 'koa'
// 很多已经用js写好的库只有js文件(例如lib-dts/index.js)，首先搜索@types/xxx，如果没有
// 那自己写个d.ts文件(例如lib-dts/index.d.ts) 这个库才能改造为ts用
index_1["default"].numberAdd(1, 3);
index_1["default"].stringAdd('1', '3');
// 如果全新项目 直接写ts文件(例如lib/index.js)
index_2["default"].numberAddString(1, '3');
index_2["default"].anyAddString('1', '3');
// 接口
index_2["default"].register({ username: 'aa', password: 'bb' });
index_2["default"].updateUser({ userid: 2, username: 'cc', password: 'dd' });
// 重载 
index_2.overLoaded(1, '2');
// 泛型
var aaaa = index_2["default"].genericity(1, '2');
aaaa.push(1);
function getUser(type, data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get('user')];
                case 1: 
                // get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
                // 返回值Promise<R>是泛型 下面定义的R是User 所以下面的返回值rs就会有id name email了
                return [2 /*return*/, _a.sent()];
            }
        });
    });
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var rs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getUser('id', '1')];
            case 1:
                rs = _a.sent();
                return [2 /*return*/, rs.id];
        }
    });
}); });
